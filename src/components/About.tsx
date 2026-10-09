import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Cpu, BookOpen, Layers, MessageSquare } from 'lucide-react';
import { aboutParagraphs } from '../data/portfolioData';

const interests = [
  { icon: Layers, label: 'LLM-Powered Applications' },
  { icon: BookOpen, label: 'Retrieval-Based Knowledge Systems' },
  { icon: Cpu, label: 'Multimodal AI' },
  { icon: MessageSquare, label: 'Prompt Engineering' },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}
          className="about-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              01 / ABOUT
            </p>
            <h2 className="section-title">
              Who I Am
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))', borderRadius: '2px', marginBottom: '1.75rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {aboutParagraphs.map((para, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="card"
              style={{ padding: '1.25rem 1.5rem', marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: '8px',
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <GraduationCap size={20} color="var(--accent-cyan)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                  National Engineering College, Kovilpatti
                </div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                  B.Tech – Artificial Intelligence and Data Science
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', gap: '1rem' }}>
                  <span>2023 – 2027</span>
                  <span>CGPA: 7.02 / 10.00</span>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <MapPin size={14} color="var(--accent-cyan)" />
              Kovilpatti, Tamil Nadu, India
            </div>
          </motion.div>

          {/* Right: Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Focus Areas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {interests.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                  className="card"
                  style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.9rem' }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: '8px',
                    background: 'rgba(6,182,212,0.08)',
                    border: '1px solid rgba(6,182,212,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <item.icon size={17} color="var(--accent-cyan)" />
                  </div>
                  <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'Projects Built', value: '3+' },
                { label: 'Hackathons', value: '2+' },
                { label: 'Award Won', value: '1' },
                { label: 'CGPA', value: '7.02' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="card"
                  style={{ padding: '1.25rem', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)', lineHeight: 1, marginBottom: '0.4rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
