import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';
import { personalInfo } from '../data/portfolioData';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const contactLinks = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: (color: string) => <Mail size={17} color={color} />,
    label: 'Email',
    value: personalInfo.email,
    color: 'var(--accent-cyan)',
  },
  {
    href: personalInfo.linkedin,
    icon: (color: string) => <LinkedinIcon size={17} color={color} />,
    label: 'LinkedIn',
    value: 'vanniya-raj-s-7b0b4a2b7',
    color: '#3b82f6',
  },
  {
    href: personalInfo.github,
    icon: (color: string) => <GithubIcon size={17} color={color} />,
    label: 'GitHub',
    value: 'VanniyaRaj-2005',
    color: '#8b5cf6',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'A valid email is required.';
    if (!form.message.trim() || form.message.trim().length < 15)
      e.message = 'Message must be at least 15 characters.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setState('success');
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  return (
    <section id="contact" className="section-padding grid-bg" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            08 / CONTACT
          </p>
          <h2 className="section-title">Let's Build Something Intelligent.</h2>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))', borderRadius: '2px', margin: '0.75rem auto 1rem' }} />
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            I'm interested in opportunities involving AI engineering, Generative AI, LLMs, and practical AI applications.
          </p>
        </motion.div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}
          className="contact-grid"
        >
          {/* Left: Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="card"
                style={{
                  padding: '1.1rem 1.25rem',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: '8px',
                  background: `${link.color}18`,
                  border: `1px solid ${link.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {link.icon(link.color)}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{link.label}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', wordBreak: 'break-all' }}>{link.value}</div>
                </div>
              </a>
            ))}

            <div style={{
              marginTop: '0.5rem',
              padding: '1rem',
              background: 'rgba(6,182,212,0.04)',
              border: '1px solid rgba(6,182,212,0.1)',
              borderRadius: '8px',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontFamily: 'JetBrains Mono',
              lineHeight: 1.6,
            }}>
              Note: The contact form opens your email client as a fallback. No backend is configured.
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {state === 'success' ? (
              <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                <CheckCircle size={48} color="var(--accent-cyan)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Message Ready!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Your email client has been opened with the message pre-filled. Send it from there.
                </p>
                <button className="btn-secondary" style={{ marginTop: '1.5rem' }} onClick={() => setState('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                noValidate
              >
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Send a Message</h3>

                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle('name')}
                    onFocus={e => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                    onBlur={e => (e.target.style.borderColor = errors.name ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)')}
                  />
                  {errors.name && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle('email')}
                    onFocus={e => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                    onBlur={e => (e.target.style.borderColor = errors.email ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)')}
                  />
                  {errors.email && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="What would you like to discuss?"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(6,182,212,0.5)')}
                    onBlur={e => (e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)')}
                  />
                  {errors.message && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.message}</p>}
                </div>

                {state === 'error' && (
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#ef4444', fontSize: '0.82rem' }}>
                    <AlertTriangle size={14} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button type="submit" id="contact-submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
