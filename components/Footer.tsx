'use client';

import { NAV_LOGO_B64 } from './images';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '24px clamp(20px,5vw,64px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 14,
      position: 'relative',
      zIndex: 2,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src={NAV_LOGO_B64}
          alt="Logo"
          style={{
            width: 30, height: 30, objectFit: 'contain',
            borderRadius: '50%',
            border: '1px solid rgba(0,229,255,0.25)',
          }}
        />
        <span style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 800,
          fontSize: '0.78rem', color: 'var(--cyan)', letterSpacing: '0.1em',
        }}>
          BHARAT MISHRA
        </span>
      </div>

      <span style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem',
        color: 'var(--text-faint)', letterSpacing: '0.08em',
      }}>
        © 2025 · AI &amp; MACHINE LEARNING ENGINEER · TOP 2% NATIONAL FINALIST
      </span>

      <div style={{ display: 'flex', gap: 20 }}>
        {[
          { label: 'GITHUB',   href: 'https://github.com/bharatmishraji1' },
          { label: 'LINKEDIN', href: 'https://linkedin.com/in/bharat-mishra-974a6b1b6' },
          { label: 'EMAIL',    href: 'mailto:bharathaldwanionline@gmail.com' },
        ].map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
              color: 'var(--text-faint)', letterSpacing: '0.1em',
              textDecoration: 'none', transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
