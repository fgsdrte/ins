import { motion } from 'framer-motion';
import { Code2, Sparkles, Brain, Radio } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Sparkles,
  Brain,
  Radio,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            02 / SKILLS
          </p>
          <h2 className="section-title">Technical Expertise</h2>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))', borderRadius: '2px', marginBottom: '0.75rem' }} />
          <p className="section-subtitle">
            A focused set of technical skills built around AI engineering, Generative AI, and machine learning.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {skills.map((group, groupIdx) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
                className="card"
                style={{ padding: '1.5rem' }}
              >
                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '8px',
                    background: 'rgba(6,182,212,0.1)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color="var(--accent-cyan)" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill items */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIdx * 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            marginTop: '2rem',
            padding: '1rem 1.5rem',
            background: 'rgba(6,182,212,0.04)',
            border: '1px solid rgba(6,182,212,0.1)',
            borderRadius: '8px',
            color: 'var(--text-muted)',
            fontSize: '0.82rem',
            fontFamily: 'JetBrains Mono',
            textAlign: 'center',
          }}
        >
          Skills are presented without artificial proficiency percentages — honesty over decoration.
        </motion.div>
      </div>
    </section>
  );
}
