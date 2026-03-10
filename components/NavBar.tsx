'use client';

import { useEffect, useState } from 'react';
import { NAV_LOGO_B64 } from './images';

const links = [
  { href: '#about',        label: 'ABOUT'        },
  { href: '#skills',       label: 'SKILLS'       },
  { href: '#projects',     label: 'PROJECTS'     },
  { href: '#achievements', label: 'ACHIEVEMENTS' },
  { href: '#contact',      label: 'CONTACT'      },
];

export default function NavBar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]        = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop Nav ── */}
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 500, height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(20px, 5vw, 64px)',
          background: scrolled ? 'rgba(3,10,14,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,229,255,0.1)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img
            src={NAV_LOGO_B64}
            alt="Bharat Mishra"
            style={{
              width: 40, height: 40,
              objectFit: 'contain',
              borderRadius: '50%',
              border: '1px solid rgba(0,229,255,0.3)',
              boxShadow: '0 0 12px rgba(0,229,255,0.2)',
            }}
          />
          <span style={{
            fontFamily: 'Orbitron, monospace', fontWeight: 700,
            fontSize: '0.78rem', letterSpacing: '0.14em',
            color: 'var(--cyan)',
          }}>
            BM.AI
          </span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}
             className="hidden-mobile">
          {links.map(l => (
            <a
              key={l.href} href={l.href}
              onClick={() => setActive(l.href)}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem',
                letterSpacing: '0.14em', textDecoration: 'none',
                color: active === l.href ? 'var(--cyan)' : 'rgba(212,238,245,0.5)',
                borderBottom: active === l.href ? '1px solid var(--cyan)' : '1px solid transparent',
                paddingBottom: 2,
                transition: 'color 0.3s ease',
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:bharathaldwanionline@gmail.com"
            style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem',
              letterSpacing: '0.12em', textDecoration: 'none',
              color: 'var(--cyan)', border: '1px solid rgba(0,229,255,0.3)',
              padding: '6px 16px', transition: 'all 0.3s ease',
            }}
          >
            HIRE ME
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          style={{
            display: 'none', flexDirection: 'column', gap: 5,
            background: 'none', border: 'none', cursor: 'pointer', padding: 4,
          }}
          className="show-mobile"
          aria-label="menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: 22, height: 1, background: 'var(--cyan)' }} />
          ))}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 499,
          background: 'rgba(3,10,14,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 40,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'Orbitron, monospace', fontSize: '1.3rem',
                fontWeight: 800, color: 'var(--text)', textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .hidden-mobile{ display:none !important; }
          .show-mobile{ display:flex !important; }
        }
        @media(min-width:769px){
          .show-mobile{ display:none !important; }
        }
      `}</style>
    </>
  );
}
