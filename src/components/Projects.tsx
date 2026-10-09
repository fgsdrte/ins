import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Trophy, AlertCircle, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

// RAG Workflow Diagram for Project 1
function RAGWorkflow({ workflow }: { workflow: Array<{ step: string; desc: string }> }) {
  return (
    <div style={{ margin: '1.5rem 0', overflowX: 'auto' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        minWidth: 'max-content',
        padding: '1rem',
        background: 'rgba(6,11,20,0.6)',
        border: '1px solid rgba(6,182,212,0.15)',
        borderRadius: '10px',
      }}>
        {workflow.map((node, i) => (
          <div key={node.step} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', padding: '0 0.5rem' }}>
              <div style={{
                background: i === 0 ? 'rgba(59,130,246,0.15)' : i === workflow.length - 1 ? 'rgba(6,182,212,0.2)' : 'rgba(6,182,212,0.08)',
                border: `1px solid ${i === 0 ? 'rgba(59,130,246,0.5)' : i === workflow.length - 1 ? 'rgba(6,182,212,0.6)' : 'rgba(6,182,212,0.25)'}`,
                borderRadius: '8px',
                padding: '0.6rem 0.9rem',
                minWidth: '90px',
              }}>
                <div style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: i === 0 ? '#3b82f6' : 'var(--accent-cyan)',
                  fontFamily: 'JetBrains Mono',
                  marginBottom: '0.2rem',
                  whiteSpace: 'nowrap',
                }}>
                  {node.step}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  {node.desc}
                </div>
              </div>
            </div>
            {i < workflow.length - 1 && (
              <ChevronRight size={16} color="rgba(6,182,212,0.4)" style={{ flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Project detail modal
function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'rgba(6,11,20,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          backdropFilter: 'blur(6px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '780px',
            maxHeight: '88vh',
            overflowY: 'auto',
            padding: '2rem',
            position: 'relative',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              borderRadius: '6px',
              padding: '0.4rem',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <X size={16} />
          </button>

          {/* Category */}
          <span className="skill-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            {project.category}
          </span>

          {/* Award badge */}
          {project.award && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(234,179,8,0.1)',
              border: '1px solid rgba(234,179,8,0.3)',
              borderRadius: '6px',
              padding: '0.4rem 0.9rem',
              marginBottom: '1rem',
              width: 'fit-content',
            }}>
              <Trophy size={14} color="#eab308" />
              <span style={{ fontSize: '0.8rem', color: '#eab308', fontWeight: 600 }}>{project.award}</span>
            </div>
          )}

          {/* Training note */}
          {project.note && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
              background: 'rgba(6,182,212,0.06)',
              border: '1px solid rgba(6,182,212,0.15)',
              borderRadius: '6px',
              padding: '0.6rem 0.9rem',
              marginBottom: '1rem',
            }}>
              <AlertCircle size={13} color="var(--accent-cyan)" style={{ marginTop: 2, flexShrink: 0 }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.note}</span>
            </div>
          )}

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>{project.title}</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.93rem' }}>
            {project.summary}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
            {project.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
          </div>

          {/* RAG Workflow */}
          {'workflow' in project && project.workflow && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                RAG Pipeline Flow
              </h3>
              <RAGWorkflow workflow={project.workflow as Array<{ step: string; desc: string }>} />
            </div>
          )}

          {/* Sections */}
          {[
            { label: '📌 Problem', key: 'problem' },
            { label: '🎯 Objective', key: 'objective' },
            { label: '⚙️ Outcome', key: 'outcome' },
          ].map(({ label, key }) => {
            const val = (project as Record<string, unknown>)[key] as string | undefined;
            if (!val) return null;
            return (
              <div key={key} style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{label}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.88rem' }}>{val}</p>
              </div>
            );
          })}

          {/* Implementation */}
          {project.implementation && (
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                🔧 Implementation
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.implementation.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    <ArrowRight size={13} color="var(--accent-cyan)" style={{ marginTop: 4, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Project card
function ProjectCard({ project, index, onOpen }: {
  project: typeof projects[0];
  index: number;
  onOpen: (p: typeof projects[0]) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      className="card"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        position: 'relative',
        overflow: 'hidden',
        ...(project.featured ? { borderColor: 'rgba(6,182,212,0.2)' } : {}),
      }}
    >
      {/* Featured stripe */}
      {project.featured && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))',
        }} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', display: 'block', marginBottom: '0.4rem' }}>
            {project.category}
          </span>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.3 }}>{project.title}</h3>
        </div>
        {project.award && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            background: 'rgba(234,179,8,0.1)',
            border: '1px solid rgba(234,179,8,0.25)',
            borderRadius: '6px',
            padding: '0.3rem 0.6rem',
            flexShrink: 0,
          }}>
            <Trophy size={12} color="#eab308" />
            <span style={{ fontSize: '0.68rem', color: '#eab308', fontWeight: 600, whiteSpace: 'nowrap' }}>Award</span>
          </div>
        )}
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.7, flexGrow: 1 }}>
        {project.summary}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags.slice(0, 4).map(t => (
          <span key={t} className="skill-tag" style={{ fontSize: '0.72rem', padding: '0.25rem 0.6rem' }}>{t}</span>
        ))}
      </div>

      <button
        id={`project-details-${project.id}`}
        className="btn-secondary"
        style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
        onClick={() => onOpen(project)}
      >
        View Details <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            03 / PROJECTS
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))', borderRadius: '2px', marginBottom: '0.75rem' }} />
          <p className="section-subtitle">
            Technical case studies exploring AI engineering, Generative AI, and real-world problem solving.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
