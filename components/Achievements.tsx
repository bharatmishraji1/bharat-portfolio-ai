'use client';

const TrophySVG = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="#fbbf24" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M7 4H3v3a4 4 0 004 4M17 4h-4v3a4 4 0 01-4 4m0 0v4m0-4a4 4 0 004-4V4H7v3a4 4 0 004 4zM5 20h10M8 16h4"/>
  </svg>
);

const TIMELINE = [
  {
    year: '2026 · NATIONAL ACHIEVEMENT',
    gold: true,
    award: 'TOP 2% NATIONAL FINALIST',
    title: 'India AI Impact Buildathon 2026',
    org: 'Organized by HCL · GUVI · National Competition',
    desc: `Selected as a Top 2% National Finalist out of hundreds of competing teams across India for developing RakshakAI — an agentic AI cybersecurity honeypot designed to protect vulnerable users from online scams using NLP and autonomous AI agents.`,
    tags: ['HCL GUVI', 'Cybersecurity AI', 'NLP', 'Agentic AI', 'National Competition'],
  },
  {
    year: '2026 · CERTIFICATION',
    gold: false,
    award: null,
    title: 'Data Science with Generative AI',
    org: 'Physics Wallah (PW) · Delhi, India · March 2026',
    desc: `Comprehensive professional certification covering the complete data science pipeline alongside modern Generative AI techniques — including LLMs, RAG systems, AI agents, and production ML deployment.`,
    tags: ['Data Science', 'Generative AI', 'LLMs', 'RAG', 'Physics Wallah'],
  },
  {
    year: '2024 · EDUCATION',
    gold: false,
    award: null,
    title: 'Bachelor of Commerce (B.Com)',
    org: 'Kumaun University · MBPG College, Haldwani · Graduated 2024',
    desc: `Completed Bachelor of Commerce with a focus on Financial Accounting. A self-driven transition followed, pivoting from commerce to Artificial Intelligence through intensive self-learning — demonstrating exceptional commitment and technical capability.`,
    tags: ['B.Com', 'Kumaun University', 'Financial Accounting', 'Haldwani'],
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        padding: 'clamp(80px,10vh,120px) clamp(20px,5vw,64px)',
        background: 'var(--bg2)',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div className="section-label">04 · Achievements &amp; Education</div>
        <h2 className="section-title reveal" style={{ marginBottom: 56 }}>
          MILESTONES &amp; <span>CREDENTIALS</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 36 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, var(--cyan), rgba(0,229,255,0.1) 80%, transparent)',
          }} />

          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{ position: 'relative', marginBottom: 48 }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -43, top: 4,
                width: 14, height: 14, borderRadius: '50%',
                background: 'var(--bg2)',
                border: `2px solid ${item.gold ? '#fbbf24' : 'var(--cyan)'}`,
                boxShadow: `0 0 10px ${item.gold ? '#fbbf24' : 'var(--cyan)'}`,
              }} />

              {/* Year */}
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                color: item.gold ? '#fbbf24' : 'var(--cyan)',
                letterSpacing: '0.14em', marginBottom: 10,
              }}>{item.year}</div>

              {/* Card */}
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                padding: '28px 32px',
              }}>
                {/* Award badge */}
                {item.award && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem',
                    color: '#fbbf24', background: 'rgba(251,191,36,0.06)',
                    border: '1px solid rgba(251,191,36,0.2)',
                    padding: '3px 12px', marginBottom: 14,
                    letterSpacing: '0.08em',
                  }}>
                    <TrophySVG /> {item.award}
                  </div>
                )}

                <h3 style={{
                  fontFamily: 'Orbitron, monospace', fontWeight: 800,
                  fontSize: '1.25rem', color: 'var(--text)', marginBottom: 6,
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                  color: 'var(--text-faint)', marginBottom: 14, letterSpacing: '0.08em',
                }}>{item.org}</p>
                <p style={{
                  fontSize: '0.9rem', color: 'var(--text-dim)',
                  lineHeight: 1.75, marginBottom: 18,
                }}>{item.desc}</p>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {item.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
