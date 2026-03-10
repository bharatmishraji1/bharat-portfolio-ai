'use client';

import { useState } from 'react';

// ── Shield SVG for Rakshak-H ─────────────────────────
const ShieldSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
    <defs>
      <radialGradient id="sg1" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#001a28" stopOpacity="0.9"/>
      </radialGradient>
      <filter id="glow1">
        <feGaussianBlur stdDeviation="2.5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <circle cx="40" cy="40" r="38" fill="url(#sg1)" stroke="rgba(0,229,255,0.3)" strokeWidth="1"/>
    <path d="M40 18L22 26v16c0 11 8 20 18 22 10-2 18-11 18-22V26L40 18z"
      stroke="#00e5ff" strokeWidth="1.5" fill="rgba(0,229,255,0.08)" filter="url(#glow1)"/>
    <path d="M33 40l5 5 10-10" stroke="#00e5ff" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" filter="url(#glow1)"/>
    <circle cx="40" cy="36" r="5" fill="rgba(0,229,255,0.12)" stroke="rgba(0,229,255,0.4)" strokeWidth="0.75"/>
  </svg>
);

// ── Drone SVG for Aerial Detection ───────────────────
const DroneSVG = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
    <defs>
      <radialGradient id="sg2" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.18"/>
        <stop offset="100%" stopColor="#001a28" stopOpacity="0.9"/>
      </radialGradient>
      <filter id="glow2">
        <feGaussianBlur stdDeviation="2" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <circle cx="40" cy="40" r="38" fill="url(#sg2)" stroke="rgba(0,229,255,0.22)" strokeWidth="1"/>
    <circle cx="40" cy="40" r="7" stroke="#00e5ff" strokeWidth="1.5" fill="rgba(0,229,255,0.1)" filter="url(#glow2)"/>
    <line x1="40" y1="33" x2="40" y2="20" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="40" y1="47" x2="40" y2="60" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="33" y1="40" x2="20" y2="40" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="47" y1="40" x2="60" y2="40" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="6" stroke="#00e5ff" strokeWidth="1" fill="rgba(0,229,255,0.07)" filter="url(#glow2)"/>
    <circle cx="60" cy="20" r="6" stroke="#00e5ff" strokeWidth="1" fill="rgba(0,229,255,0.07)"/>
    <circle cx="20" cy="60" r="6" stroke="#00e5ff" strokeWidth="1" fill="rgba(0,229,255,0.07)"/>
    <circle cx="60" cy="60" r="6" stroke="#00e5ff" strokeWidth="1" fill="rgba(0,229,255,0.07)"/>
  </svg>
);

// ── Trophy SVG ────────────────────────────────────────
const TrophySVG = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="#fbbf24" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M7 4H3v3a4 4 0 004 4M17 4h-4v3a4 4 0 01-4 4m0 0v4m0-4a4 4 0 004-4V4H7v3a4 4 0 004 4zM5 20h10M8 16h4"/>
  </svg>
);

// ── GitHub SVG ────────────────────────────────────────
const GithubSVG = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

// ── Arrow SVG ─────────────────────────────────────────
const ArrowSVG = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Project data ──────────────────────────────────────
const PROJECTS = [
  {
    code: 'PRJ-001',
    badge: { text: 'TOP 2% NATIONAL FINALIST', isAward: true },
    title: 'Rakshak-H',
    subtitle: 'AI HONEYPOT SYSTEM FOR SCAM DETECTION',
    desc: 'An AI-powered honeypot engineered to detect, engage, and neutralize online scammers targeting vulnerable users. Combines NLP pipelines with agentic AI workflows to identify fraudulent patterns and autonomously interact with threat actors in real time.',
    features: [
      'AI honeypot scam interaction and autonomous engagement system',
      'NLP pipeline for real-time fraud message identification',
      'Agentic AI workflow automation via n8n integration',
      'Ranked Top 2% nationally — India AI Impact Buildathon 2026 (HCL GUVI)',
    ],
    metrics: [
      { val: 'TOP 2%', label: 'National Rank' },
      { val: 'NLP',    label: 'Fraud Detection' },
      { val: 'Agentic',label: 'AI Workflow' },
    ],
    tags: ['Python', 'NLP', 'AI Agents', 'n8n', 'LangChain'],
    github: 'https://github.com/bharatmishraji1/RAKSHAK-H-Honeypot',
    Icon: ShieldSVG,
    iconLabel: 'CYBERSECURITY\nAI SYSTEM',
  },
  {
    code: 'PRJ-002',
    badge: { text: 'COMPUTER VISION', isAward: false },
    title: 'Aerial-Detect',
    subtitle: 'AERIAL OBJECT DETECTION & CLASSIFICATION (BIRD VS DRONE)',
    desc: 'A real-time computer vision system using YOLOv8 for object detection and MobileNetV2 transfer learning for classification, distinguishing drones from birds in live aerial video streams with a full Streamlit visualization dashboard.',
    features: [
      'YOLOv8-powered real-time aerial object detection from video streams',
      'MobileNetV2 transfer learning for Bird vs Drone classification',
      'Streamlit dashboard for live inference, confidence metrics & evaluation plots',
      'Optimized for real-time performance at 30+ FPS',
    ],
    metrics: [
      { val: 'YOLOv8', label: 'Detection' },
      { val: '30+ FPS',label: 'Real-time' },
      { val: '2-Class', label: 'Drone vs Bird' },
    ],
    tags: ['YOLOv8', 'MobileNetV2', 'Python', 'Streamlit', 'OpenCV'],
    github: 'https://github.com/bharatmishraji1/Aerial-Object-Classification-Detection',
    Icon: DroneSVG,
    iconLabel: 'COMPUTER\nVISION SYSTEM',
  },
];

// ── Card ──────────────────────────────────────────────
function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(0,229,255,0.35)' : 'var(--border)'}`,
        padding: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 40,
        alignItems: 'start',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 0 40px rgba(0,229,255,0.07)' : 'none',
      }}
    >
      {/* Corner decorations */}
      <div style={{ position:'absolute', top:0, left:0, width:18, height:18, borderTop:'2px solid var(--cyan)', borderLeft:'2px solid var(--cyan)' }} />
      <div style={{ position:'absolute', bottom:0, right:0, width:18, height:18, borderBottom:'2px solid var(--cyan)', borderRight:'2px solid var(--cyan)' }} />

      {/* Left content */}
      <div>
        {/* Meta */}
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.58rem', color:'var(--text-faint)' }}>
            {project.code}
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily:'JetBrains Mono, monospace', fontSize:'0.58rem',
            letterSpacing:'0.1em', color: project.badge.isAward ? '#fbbf24' : 'var(--cyan)',
            background: project.badge.isAward ? 'rgba(251,191,36,0.07)' : 'rgba(0,229,255,0.07)',
            border: `1px solid ${project.badge.isAward ? 'rgba(251,191,36,0.2)' : 'rgba(0,229,255,0.2)'}`,
            padding: '2px 10px',
          }}>
            {project.badge.isAward && <TrophySVG />}
            {project.badge.text}
          </span>
          {project.badge.isAward && (
            <span style={{
              width:5, height:5, borderRadius:'50%',
              background:'#00ff88', boxShadow:'0 0 6px #00ff88',
              display:'inline-block', animation:'pulseCyan 2s ease infinite',
            }} />
          )}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 900,
          fontSize: 'clamp(1.4rem,2.5vw,2rem)',
          color: 'var(--cyan)', letterSpacing: '0.02em',
          marginBottom: 6,
          textShadow: hovered ? '0 0 20px rgba(0,229,255,0.4)' : 'none',
          transition: 'text-shadow 0.3s ease',
        }}>{project.title}</h3>
        <p style={{
          fontFamily:'JetBrains Mono, monospace', fontSize:'0.65rem',
          color:'rgba(0,229,255,0.45)', letterSpacing:'0.12em',
          marginBottom:18,
        }}>{project.subtitle}</p>

        {/* Description */}
        <p style={{
          fontSize:'0.93rem', color:'var(--text-dim)',
          lineHeight:1.8, marginBottom:22, maxWidth:560,
        }}>{project.desc}</p>

        {/* Features */}
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8, marginBottom:24 }}>
          {project.features.map((f, i) => (
            <li key={i} style={{
              fontFamily:'JetBrains Mono, monospace', fontSize:'0.68rem',
              color:'var(--text-dim)', display:'flex', alignItems:'flex-start', gap:10,
            }}>
              <span style={{ color:'var(--cyan)', flexShrink:0, marginTop:1 }}>→</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Metrics */}
        <div style={{ display:'flex', gap:2, marginBottom:24, flexWrap:'wrap' }}>
          {project.metrics.map((m, i) => (
            <div key={i} style={{
              background:'rgba(0,229,255,0.04)', border:'1px solid rgba(0,229,255,0.08)',
              padding:'10px 18px', textAlign:'center',
            }}>
              <div style={{ fontFamily:'Orbitron, monospace', fontWeight:800, fontSize:'0.95rem', color:'var(--cyan)' }}>
                {m.val}
              </div>
              <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.52rem', color:'var(--text-faint)', marginTop:2, letterSpacing:'0.08em' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:28 }}>
          {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
        </div>

        {/* GitHub Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:'inline-flex', alignItems:'center', gap:8,
            fontFamily:'JetBrains Mono, monospace', fontSize:'0.65rem',
            letterSpacing:'0.12em', color:'var(--cyan)',
            border:'1px solid rgba(0,229,255,0.3)',
            padding:'9px 20px',
            textDecoration:'none',
            transition:'all 0.3s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--surface)';
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--cyan)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,229,255,0.3)';
          }}
        >
          <GithubSVG /> VIEW ON GITHUB <ArrowSVG />
        </a>
      </div>

      {/* Right: icon */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14, paddingTop:8 }}>
        <div style={{ animation: hovered ? 'orbitPulse 3s ease-in-out infinite' : 'none' }}>
          <project.Icon />
        </div>
        <div style={{
          fontFamily:'JetBrains Mono, monospace', fontSize:'0.52rem',
          color:'var(--text-faint)', textAlign:'center', letterSpacing:'0.08em',
          whiteSpace:'pre-line',
        }}>
          {project.iconLabel}
        </div>
      </div>

      {/* Mobile: hide icon area */}
      <style>{`
        @media(max-width:700px){
          .proj-icon-col { display:none !important; }
        }
      `}</style>
    </div>
  );
}

// ── Section ───────────────────────────────────────────
export default function ProjectSection() {
  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(80px,10vh,120px) clamp(20px,5vw,64px)',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div className="section-label">03 · Projects</div>
        <h2 className="section-title reveal" style={{ marginBottom: 12 }}>
          DEPLOYED <span>SYSTEMS</span>
        </h2>
        <p className="reveal" style={{
          color: 'var(--text-dim)', fontSize: '0.97rem', lineHeight: 1.7,
          maxWidth: 520, marginBottom: 48,
        }}>
          Production-grade AI systems engineered to solve real-world challenges at the intersection of security, vision, and intelligence.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {PROJECTS.map(p => <ProjectCard key={p.code} project={p} />)}
        </div>
      </div>
    </section>
  );
}
