'use client';

import { useState } from 'react';

// ── Icon components ───────────────────────────────────
const EmailIcon  = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon  = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="var(--cyan)" width="14" height="14">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="var(--cyan)" width="14" height="14">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CONTACTS = [
  { Icon: EmailIcon,   label: 'EMAIL',    val: 'bharathaldwanionline@gmail.com', href: 'mailto:bharathaldwanionline@gmail.com' },
  { Icon: PhoneIcon,   label: 'PHONE',    val: '+91 9193451404',                  href: 'tel:+919193451404' },
  { Icon: LinkedinIcon,label: 'LINKEDIN', val: 'linkedin.com/in/bharat-mishra-974a6b1b6', href: 'https://linkedin.com/in/bharat-mishra-974a6b1b6' },
  { Icon: GithubIcon,  label: 'GITHUB',   val: 'github.com/bharatmishraji1',      href: 'https://github.com/bharatmishraji1' },
];

function ContactLink({ item }: { item: typeof CONTACTS[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '16px 20px', textDecoration: 'none',
        background: hov ? 'rgba(0,229,255,0.06)' : 'var(--surface)',
        border: `1px solid ${hov ? 'rgba(0,229,255,0.35)' : 'var(--border)'}`,
        transition: 'all 0.3s ease',
        color: 'var(--text)',
      }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <item.Icon />
      </div>
      <div>
        <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.55rem', color:'var(--text-faint)', letterSpacing:'0.1em' }}>
          {item.label}
        </div>
        <div style={{ fontSize:'0.87rem', color: hov ? 'var(--cyan)' : 'var(--text)', marginTop:2, transition:'color 0.3s' }}>
          {item.val}
        </div>
      </div>
      <div style={{ marginLeft:'auto', color: hov ? 'var(--cyan)' : 'transparent', transition:'color 0.3s' }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px,10vh,120px) clamp(20px,5vw,64px)',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div className="section-label">05 · Contact</div>
        <h2 className="section-title reveal" style={{ marginBottom: 48 }}>
          INITIATE <span>CONNECTION</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 'clamp(32px,5vw,64px)',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div className="reveal-l">
            <p style={{ color:'var(--text-dim)', fontSize:'0.97rem', lineHeight:1.8, marginBottom:28 }}>
              Open to AI/ML engineering roles, research collaborations, freelance projects, and hackathon teams. Ready to contribute to cutting-edge AI systems that solve real problems.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {CONTACTS.map(item => <ContactLink key={item.label} item={item} />)}
            </div>
          </div>

          {/* Right: availability card */}
          <div className="reveal-r">
            <div style={{
              background:'rgba(0,255,136,0.04)',
              border:'1px solid rgba(0,255,136,0.15)',
              padding:'30px 34px',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                <span style={{
                  width:8, height:8, borderRadius:'50%',
                  background:'#00ff88', boxShadow:'0 0 10px #00ff88',
                  display:'inline-block', animation:'pulseCyan 2s ease infinite',
                }} />
                <span style={{
                  fontFamily:'JetBrains Mono, monospace', fontSize:'0.65rem',
                  color:'#00ff88', letterSpacing:'0.12em',
                }}>SYSTEM STATUS: AVAILABLE</span>
              </div>
              <h3 style={{
                fontFamily:'Orbitron, monospace', fontWeight:800,
                fontSize:'1.25rem', color:'var(--text)', marginBottom:10,
              }}>Open to Opportunities</h3>
              <p style={{ fontSize:'0.9rem', color:'var(--text-dim)', lineHeight:1.75, marginBottom:20 }}>
                Currently available for AI/ML engineering roles, research collaborations, freelance AI projects, and hackathon teams. Ready to contribute to cutting-edge AI systems.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:20 }}>
                {['AI/ML Engineering','Research Roles','Freelance','Hackathons'].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div style={{
                display:'flex', alignItems:'center', gap:8,
                paddingTop:16, borderTop:'1px solid var(--border)',
                fontFamily:'JetBrains Mono, monospace', fontSize:'0.65rem',
                color:'var(--text-faint)',
              }}>
                <PinIcon /> Haldwani, Uttarakhand, India · 263126
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #contact > div > div:last-child{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}
