import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const badgeColors: Record<string, { bg: string; border: string; color: string }> = {
  silver: { bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.3)', color: '#94a3b8' },
  gold: { bg: 'rgba(234,179,8,0.1)', border: 'rgba(234,179,8,0.3)', color: '#eab308' },
  blue: { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.3)', color: '#3b82f6' },
  green: { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)', color: '#22c55e' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            06 / CERTIFICATIONS
          </p>
          <h2 className="section-title">Certifications</h2>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))', borderRadius: '2px', marginBottom: '0.75rem' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.1rem' }}>
          {certifications.map((cert, i) => {
            const colors = badgeColors[cert.badgeColor] || badgeColors.blue;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                {/* Icon */}
                <div style={{
                  width: 40, height: 40, borderRadius: '8px',
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Award size={20} color={colors.color} />
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                    {cert.title}
                  </h3>
                  <span style={{
                    fontSize: '0.72rem',
                    padding: '0.22rem 0.6rem',
                    borderRadius: '4px',
                    fontWeight: 600,
                    background: colors.bg,
                    color: colors.color,
                    border: `1px solid ${colors.border}`,
                    fontFamily: 'JetBrains Mono',
                  }}>
                    {cert.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
