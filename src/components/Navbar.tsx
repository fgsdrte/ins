import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Update active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sec);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(6, 11, 20, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(6,182,212,0.1)' : 'none',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Wordmark */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); handleNav('#home'); }}
          style={{
            fontWeight: 800,
            fontSize: '1.1rem',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <span style={{ color: 'var(--accent-cyan)' }}>VR</span>
          <span style={{ color: 'var(--text-secondary)', margin: '0 4px' }}>·</span>
          VANNIYA RAJ
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.15rem',
          }}
          className="nav-desktop"
        >
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                border: 'none',
                color: active === link.href.replace('#', '') ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 500,
                padding: '0.4rem 0.65rem',
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'all 0.2s',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={e => {
                if (active !== link.href.replace('#', ''))
                  (e.target as HTMLElement).style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                if (active !== link.href.replace('#', ''))
                  (e.target as HTMLElement).style.color = 'var(--text-secondary)';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Download Resume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="/resume.pdf"
            download
            className="btn-primary"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}
            aria-label="Download Resume"
          >
            <Download size={14} />
            Resume
          </a>

          {/* Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(v => !v)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              padding: '0.4rem',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
            className="hamburger-btn"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            background: 'rgba(6, 11, 20, 0.97)',
            borderTop: '1px solid var(--border)',
            padding: '1rem 1.5rem',
          }}
          className="mobile-menu-open"
        >
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: active === link.href.replace('#', '') ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.95rem',
                fontWeight: 500,
                padding: '0.65rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ paddingTop: '1rem' }}>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
