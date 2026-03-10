'use client';

// SVG icons for highlights
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="var(--cyan)"/>
  </svg>
);
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const highlights = [
  { Icon: TargetIcon, text: 'Specialization in Agentic AI & LLM-powered systems' },
  { Icon: EyeIcon,    text: 'Real-world computer vision with YOLOv8 & transfer learning' },
  { Icon: RocketIcon, text: 'Self-taught transition from B.Com to AI engineering' },
];

const infoRows = [
  { key: 'Name',          val: 'Bharat Mishra',               cyan: false },
  { key: 'Role',          val: 'AI & ML Engineer',             cyan: true  },
  { key: 'Education',     val: 'B.Com · Kumaun University',    cyan: false },
  { key: 'Graduation',    val: '2024',                         cyan: false },
  { key: 'Certification', val: 'Data Science with GenAI · PW', cyan: false },
  { key: 'Location',      val: 'Haldwani, Uttarakhand, India', cyan: false },
  { key: 'Status',        val: 'Available for Hire ✦',         cyan: true  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(80px,10vh,120px) clamp(20px,5vw,64px)',
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div className="section-label">01 · About</div>
        <h2 className="section-title reveal" style={{ marginBottom: 48 }}>
          WHO I <span>AM</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)',
          gap: 'clamp(32px,5vw,64px)',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div className="reveal-l">
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 16, fontSize: '0.97rem' }}>
              I&apos;m an <strong style={{ color: 'var(--text)' }}>AI &amp; Machine Learning Engineer</strong> from Haldwani, Uttarakhand, passionate about building intelligent systems that make a real-world impact. My journey represents a deliberate, self-driven transition from a{' '}
              <strong style={{ color: 'var(--text)' }}>commerce background</strong> to one of the most exciting frontiers in technology.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 16, fontSize: '0.97rem' }}>
              With hands-on experience in <strong style={{ color: 'var(--text)' }}>Python, deep learning, NLP, computer vision, and Generative AI</strong>, I specialize in the full ML pipeline — from data preprocessing and feature engineering through model training, evaluation, and deployment.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 28, fontSize: '0.97rem' }}>
              My flagship project, <strong style={{ color: 'var(--text)' }}>RakshakAI</strong>, was recognized as a{' '}
              <strong style={{ color: 'var(--cyan)' }}>Top 2% National Finalist</strong> in the India AI Impact Buildathon 2026, competing against hundreds of teams nationwide.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {highlights.map(({ Icon, text }, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '12px 16px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
                  color: 'var(--text-dim)',
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: info card */}
          <div className="reveal-r" style={{ position: 'relative' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '32px 36px',
              position: 'relative',
            }}>
              {/* Corner decorations */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: 18, height: 18,
                borderTop: '2px solid var(--cyan)',
                borderLeft: '2px solid var(--cyan)',
              }} />
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: 18, height: 18,
                borderBottom: '2px solid var(--cyan)',
                borderRight: '2px solid var(--cyan)',
              }} />

              {infoRows.map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '13px 0',
                  borderBottom: i < infoRows.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                    color: 'var(--text-faint)', letterSpacing: '0.12em', textTransform: 'uppercase',
                  }}>{row.key}</span>
                  <span style={{
                    fontSize: '0.87rem', fontWeight: 500,
                    color: row.cyan ? 'var(--cyan)' : 'var(--text)',
                    textAlign: 'right',
                  }}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
