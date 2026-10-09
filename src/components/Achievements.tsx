import { motion } from 'framer-motion';
import { Trophy, Users, Presentation } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = { Trophy, Users, Presentation };

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            05 / ACHIEVEMENTS
          </p>
          <h2 className="section-title">Achievements</h2>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))', borderRadius: '2px', marginBottom: '0.75rem' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Trophy;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card"
                style={{
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  ...(ach.highlight ? {
                    borderColor: 'rgba(234,179,8,0.3)',
                    background: 'rgba(234,179,8,0.03)',
                  } : {}),
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 48, height: 48, borderRadius: '10px',
                  background: ach.highlight ? 'rgba(234,179,8,0.12)' : 'rgba(6,182,212,0.08)',
                  border: `1px solid ${ach.highlight ? 'rgba(234,179,8,0.3)' : 'rgba(6,182,212,0.15)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: ach.highlight ? '0 0 20px rgba(234,179,8,0.12)' : 'none',
                }}>
                  <Icon size={22} color={ach.highlight ? '#eab308' : 'var(--accent-cyan)'} />
                </div>

                {/* Content */}
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontWeight: 700, fontSize: ach.highlight ? '1.05rem' : '0.95rem' }}>
                      {ach.title}
                    </h3>
                    <span style={{
                      fontSize: '0.68rem',
                      padding: '0.18rem 0.55rem',
                      borderRadius: '4px',
                      fontWeight: 600,
                      background: ach.type === 'Award' ? 'rgba(234,179,8,0.1)' : 'rgba(6,182,212,0.08)',
                      color: ach.type === 'Award' ? '#eab308' : 'var(--text-muted)',
                      border: `1px solid ${ach.type === 'Award' ? 'rgba(234,179,8,0.25)' : 'rgba(6,182,212,0.15)'}`,
                      fontFamily: 'JetBrains Mono',
                    }}>
                      {ach.type}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.7 }}>
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
