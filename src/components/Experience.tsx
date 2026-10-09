import { motion } from 'framer-motion';
import { Briefcase, Wrench } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            04 / EXPERIENCE
          </p>
          <h2 className="section-title">Experience & Training</h2>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))', borderRadius: '2px', marginBottom: '0.75rem' }} />
          <p className="section-subtitle">
            Industry exposure and technical training that complement my academic background.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              style={{
                position: 'relative',
                marginBottom: i < experiences.length - 1 ? '2.25rem' : 0,
              }}
            >
              {/* Timeline dot */}
              <div
                className="timeline-dot"
                style={{ position: 'absolute', left: '-2.5rem', top: '1.25rem', marginLeft: '14px' }}
              />

              <div className="card" style={{ padding: '1.5rem 1.75rem' }}>
                {/* Type badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: exp.type === 'Industry Training' ? 'rgba(59,130,246,0.1)' : 'rgba(6,182,212,0.08)',
                  border: `1px solid ${exp.type === 'Industry Training' ? 'rgba(59,130,246,0.25)' : 'rgba(6,182,212,0.2)'}`,
                  borderRadius: '4px',
                  padding: '0.25rem 0.65rem',
                  marginBottom: '0.9rem',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: exp.type === 'Industry Training' ? '#3b82f6' : 'var(--accent-cyan)',
                  fontFamily: 'JetBrains Mono',
                }}>
                  {exp.type === 'Industry Training' ? <Briefcase size={11} /> : <Wrench size={11} />}
                  {exp.type}
                </div>

                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  {exp.organization}
                </h3>
                <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                  {exp.role}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem', fontFamily: 'JetBrains Mono' }}>
                  {exp.duration}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                  {exp.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                  {exp.tags.map(t => (
                    <span key={t} className="skill-tag" style={{ fontSize: '0.72rem', padding: '0.22rem 0.55rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
