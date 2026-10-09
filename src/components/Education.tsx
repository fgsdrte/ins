import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            07 / EDUCATION
          </p>
          <h2 className="section-title">Education</h2>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '700px' }}>
          {education.map((edu, i) => {
            const Icon = i === 0 ? GraduationCap : School;
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="card"
                style={{
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  ...(edu.current ? { borderColor: 'rgba(6,182,212,0.2)' } : {}),
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: '10px',
                  background: 'rgba(6,182,212,0.08)',
                  border: '1px solid rgba(6,182,212,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={20} color="var(--accent-cyan)" />
                </div>

                {/* Content */}
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{edu.institution}</h3>
                    {edu.current && (
                      <span style={{
                        fontSize: '0.68rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'rgba(6,182,212,0.1)',
                        color: 'var(--accent-cyan)',
                        border: '1px solid rgba(6,182,212,0.2)',
                        fontWeight: 600,
                        fontFamily: 'JetBrains Mono',
                      }}>
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.2rem' }}>
                    {edu.degree}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono', marginBottom: '0.5rem' }}>
                    {edu.duration}
                  </div>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                      {edu.score}
                    </span>
                    {edu.scoreNote && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        ({edu.scoreNote})
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
