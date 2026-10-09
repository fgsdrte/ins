import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { personalInfo } from '../data/portfolioData';

// SVG AI Knowledge Graph visual
function AIVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '440px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 440 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', opacity: 0.9 }}
        aria-hidden="true"
      >
        {/* Outer ring */}
        <circle cx="220" cy="210" r="180" stroke="rgba(6,182,212,0.08)" strokeWidth="1" />
        <circle cx="220" cy="210" r="140" stroke="rgba(6,182,212,0.06)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="220" cy="210" r="100" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />

        {/* Connection lines */}
        <line x1="220" y1="210" x2="100" y2="100" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
        <line x1="220" y1="210" x2="340" y2="100" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
        <line x1="220" y1="210" x2="60" y2="230" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
        <line x1="220" y1="210" x2="380" y2="230" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
        <line x1="220" y1="210" x2="140" y2="340" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
        <line x1="220" y1="210" x2="300" y2="340" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
        <line x1="220" y1="210" x2="220" y2="50" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />

        {/* Secondary connections */}
        <line x1="100" y1="100" x2="340" y2="100" stroke="rgba(6,182,212,0.12)" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="60" y1="230" x2="140" y2="340" stroke="rgba(6,182,212,0.1)" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="380" y1="230" x2="300" y2="340" stroke="rgba(6,182,212,0.1)" strokeWidth="1" strokeDasharray="3 5" />

        {/* Central node */}
        <circle cx="220" cy="210" r="36" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5" />
        <circle cx="220" cy="210" r="24" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.8)" strokeWidth="1" />
        <text x="220" y="205" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">LLM</text>
        <text x="220" y="218" textAnchor="middle" fill="#06b6d4" fontSize="7" fontFamily="JetBrains Mono">ENGINE</text>

        {/* Top node - Query */}
        <circle cx="220" cy="50" r="22" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" />
        <text x="220" y="46" textAnchor="middle" fill="#3b82f6" fontSize="7" fontFamily="JetBrains Mono">USER</text>
        <text x="220" y="57" textAnchor="middle" fill="#3b82f6" fontSize="7" fontFamily="JetBrains Mono">QUERY</text>

        {/* Top-left node - RAG */}
        <circle cx="100" cy="100" r="22" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.5)" strokeWidth="1" />
        <text x="100" y="96" textAnchor="middle" fill="#06b6d4" fontSize="7.5" fontFamily="JetBrains Mono">RAG</text>
        <text x="100" y="107" textAnchor="middle" fill="#06b6d4" fontSize="7" fontFamily="JetBrains Mono">RETRIEVAL</text>

        {/* Top-right node - Embeddings */}
        <circle cx="340" cy="100" r="22" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
        <text x="340" y="96" textAnchor="middle" fill="#8b5cf6" fontSize="7.5" fontFamily="JetBrains Mono">EMBED</text>
        <text x="340" y="107" textAnchor="middle" fill="#8b5cf6" fontSize="7" fontFamily="JetBrains Mono">VECTORS</text>

        {/* Left node */}
        <circle cx="60" cy="230" r="20" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.35)" strokeWidth="1" />
        <text x="60" y="226" textAnchor="middle" fill="#8ba3c7" fontSize="7" fontFamily="JetBrains Mono">DOCS</text>
        <text x="60" y="237" textAnchor="middle" fill="#8ba3c7" fontSize="7" fontFamily="JetBrains Mono">STORE</text>

        {/* Right node */}
        <circle cx="380" cy="230" r="20" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.35)" strokeWidth="1" />
        <text x="380" y="226" textAnchor="middle" fill="#8ba3c7" fontSize="7" fontFamily="JetBrains Mono">PROMPT</text>
        <text x="380" y="237" textAnchor="middle" fill="#8ba3c7" fontSize="7" fontFamily="JetBrains Mono">ENG</text>

        {/* Bottom-left node */}
        <circle cx="140" cy="340" r="20" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.35)" strokeWidth="1" />
        <text x="140" y="336" textAnchor="middle" fill="#8ba3c7" fontSize="7" fontFamily="JetBrains Mono">MULTI</text>
        <text x="140" y="347" textAnchor="middle" fill="#8ba3c7" fontSize="7" fontFamily="JetBrains Mono">MODAL</text>

        {/* Bottom-right node */}
        <circle cx="300" cy="340" r="20" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.35)" strokeWidth="1" />
        <text x="300" y="336" textAnchor="middle" fill="#8ba3c7" fontSize="7" fontFamily="JetBrains Mono">GROUND</text>
        <text x="300" y="347" textAnchor="middle" fill="#8ba3c7" fontSize="7" fontFamily="JetBrains Mono">RESP</text>

        {/* Pulse animation on central node */}
        <circle cx="220" cy="210" r="36" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1">
          <animate attributeName="r" values="36;54;36" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Label */}
      <div style={{
        position: 'absolute',
        bottom: '-10px',
        right: '10px',
        background: 'rgba(6,11,20,0.8)',
        border: '1px solid rgba(6,182,212,0.2)',
        borderRadius: '6px',
        padding: '0.3rem 0.7rem',
        fontSize: '0.7rem',
        color: 'var(--text-muted)',
        fontFamily: 'JetBrains Mono',
      }}>
        RAG · LLM · Multimodal
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Radial gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(6,182,212,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 70% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.2)',
                borderRadius: '100px',
                padding: '0.4rem 1rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--accent-cyan)',
                display: 'inline-block',
                boxShadow: '0 0 8px var(--accent-cyan)',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                Hi, I'm Vanniya Raj S
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Building{' '}
              <span className="gradient-text">Intelligent</span>
              {' '}Solutions with AI
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '1.75rem',
                maxWidth: '480px',
              }}
            >
              {personalInfo.intro}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.25rem' }}
            >
              {personalInfo.heroTags.map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}
            >
              <button id="hero-explore-projects" className="btn-primary" onClick={scrollToProjects}>
                Explore My Projects
              </button>
              <a
                id="hero-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={16} /> View GitHub
              </a>
              <button
                onClick={scrollToContact}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <Mail size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                Get in touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right: AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="hero-visual"
          >
            <AIVisual />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '-3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'var(--text-muted)',
            fontSize: '0.7rem',
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span style={{ fontFamily: 'JetBrains Mono' }}>scroll</span>
          <ChevronDown size={16} style={{ animation: 'bounce 2s infinite' }} />
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
}
