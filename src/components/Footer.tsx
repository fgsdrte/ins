import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';
import { personalInfo } from '../data/portfolioData';

const footerLinks = [
  { href: personalInfo.github, icon: (s: number) => <GithubIcon size={s} />, label: 'GitHub' },
  { href: personalInfo.linkedin, icon: (s: number) => <LinkedinIcon size={s} />, label: 'LinkedIn' },
  { href: `mailto:${personalInfo.email}`, icon: (s: number) => <Mail size={s} />, label: 'Email' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '2.5rem 0',
    }}>
      <div className="container-custom">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          {/* Left: Wordmark */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.3rem' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>VR</span>
              <span style={{ color: 'var(--text-muted)', margin: '0 4px' }}>·</span>
              Vanniya Raj S
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono' }}>
              Designed and built with curiosity for AI.
            </div>
          </div>

          {/* Center: Social links */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {footerLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 36, height: 36,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.3)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                }}
              >
                {icon(15)}
              </a>
            ))}
          </div>

          {/* Right: Copyright */}
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Vanniya Raj S. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
