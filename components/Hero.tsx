'use client';

import { useEffect, useState, useRef } from 'react';

// ── Typewriter ──────────────────────────────────────────
function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [shown, setShown] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      setShown(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [started, text]);

  return (
    <span>
      {shown}
      {shown.length < text.length && (
        <span style={{ opacity: 0.7, animation: 'blink 1s step-end infinite' }}>█</span>
      )}
    </span>
  );
}

// ── Stat Card ───────────────────────────────────────────
function StatCard({ val, label, sub }: { val: string; label: string; sub: string }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      padding: '16px 22px', minWidth: 130,
    }}>
      <div style={{
        fontFamily: 'Orbitron, monospace', fontWeight: 900,
        fontSize: '1.4rem', color: 'var(--cyan)',
        textShadow: '0 0 20px rgba(0,229,255,0.4)',
      }}>{val}</div>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)', marginTop: 4 }}>{label}</div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem',
        color: 'var(--text-faint)', marginTop: 2, letterSpacing: '0.08em',
      }}>{sub}</div>
    </div>
  );
}

// ── Neural Orb ──────────────────────────────────────────
function NeuralOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const curX = useRef(0);
  const curY = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 18;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 18;
    };
    window.addEventListener('mousemove', onMove);
    let raf: number;
    const animate = () => {
      curX.current += (mouseX.current - curX.current) * 0.06;
      curY.current += (mouseY.current - curY.current) * 0.06;
      if (orbRef.current)
        orbRef.current.style.transform = `rotateY(${curX.current}deg) rotateX(${-curY.current}deg)`;
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  const nodes = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    top: `${15 + ((i * 73 + 17) % 70)}%`,
    left: `${10 + ((i * 57 + 31) % 80)}%`,
    size: 4 + (i % 3) * 2,
    delay: `${(i * 0.4) % 3}s`,
    dur: `${2.5 + (i % 4) * 0.7}s`,
  }));

  return (
    <div style={{ position: 'relative', width: 280, height: 280 }}>
      <div style={{ perspective: 800, width: '100%', height: '100%' }}>
        <div ref={orbRef} style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}>

          {/* Ring 1 */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 260, height: 260, marginLeft: -130, marginTop: -130,
            borderRadius: '50%', border: '1px solid rgba(0,229,255,0.15)',
            animation: 'spinSlow 14s linear infinite',
          }} />
          {/* Ring 2 — tilted X */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 260, height: 260, marginLeft: -130, marginTop: -130,
            borderRadius: '50%', border: '1px solid rgba(0,229,255,0.1)',
            animation: 'spinRev 22s linear infinite',
            transform: 'rotateX(60deg)',
          }} />
          {/* Ring 3 — tilted Y */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 240, height: 240, marginLeft: -120, marginTop: -120,
            borderRadius: '50%', border: '1px solid rgba(0,229,255,0.08)',
            animation: 'spinSlow 30s linear infinite',
            transform: 'rotateY(60deg)',
          }} />

          {/* Core glow sphere */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 140, height: 140, marginLeft: -70, marginTop: -70,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 35%, rgba(0,229,255,0.22), rgba(0,30,50,0.85) 70%)',
            border: '1px solid rgba(0,229,255,0.4)',
            boxShadow: '0 0 50px rgba(0,229,255,0.2), inset 0 0 30px rgba(0,229,255,0.08)',
            animation: 'orbitPulse 4s ease-in-out infinite',
          }} />

          {/* Inner dot */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 14, height: 14, marginLeft: -7, marginTop: -7,
            borderRadius: '50%', background: 'var(--cyan)',
            boxShadow: '0 0 16px var(--cyan), 0 0 40px rgba(0,229,255,0.4)',
            animation: 'pulseCyan 2s ease infinite',
          }} />

          {/* Orbiting dot — ring 1 */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0, animation: 'spinSlow 14s linear infinite' }}>
            <div style={{ position: 'absolute', top: -130, left: -4, width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }} />
          </div>
          {/* Orbiting dot — ring 2 */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0, animation: 'spinRev 22s linear infinite' }}>
            <div style={{ position: 'absolute', top: -120, left: -3, width: 6, height: 6, borderRadius: '50%', background: 'rgba(0,229,255,0.7)', boxShadow: '0 0 8px var(--cyan)' }} />
          </div>
        </div>
      </div>

      {/* Floating nodes */}
      {nodes.map(n => (
        <div key={n.id} style={{
          position: 'absolute', top: n.top, left: n.left,
          width: n.size, height: n.size, borderRadius: '50%',
          background: 'var(--cyan)', boxShadow: `0 0 ${n.size * 2}px var(--cyan)`,
          opacity: 0.55,
          animation: `floatTag ${n.dur} ease-in-out ${n.delay} infinite`,
        }} />
      ))}

      {/* HUD corners */}
      <div style={{ position: 'absolute', top: 8, left: 8, width: 20, height: 20, borderTop: '1px solid rgba(0,229,255,0.5)', borderLeft: '1px solid rgba(0,229,255,0.5)' }} />
      <div style={{ position: 'absolute', bottom: 8, right: 8, width: 20, height: 20, borderBottom: '1px solid rgba(0,229,255,0.5)', borderRight: '1px solid rgba(0,229,255,0.5)' }} />

      {/* HUD label */}
      <div style={{
        position: 'absolute', bottom: -28, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem',
        color: 'rgba(0,229,255,0.4)', letterSpacing: '0.18em', whiteSpace: 'nowrap',
      }}>
        NEURAL CORE · ACTIVE
      </div>
    </div>
  );
}

// ── Main ────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: 'clamp(90px,10vh,110px) clamp(20px,5vw,64px) 60px',
        position: 'relative',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 'clamp(40px,6vw,100px)',
        alignItems: 'center',
        width: '100%', maxWidth: 1140, margin: '0 auto',
      }}>

        {/* LEFT: text */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)',
            padding: '5px 14px', marginBottom: 28,
            animation: 'fadeUp 0.6s ease 0.2s both',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88', display: 'inline-block', animation: 'pulseCyan 2s ease infinite' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--cyan)', letterSpacing: '0.14em' }}>
              NATIONAL FINALIST · TOP 2% · INDIA AI IMPACT BUILDATHON 2026
            </span>
          </div>

          <h1 style={{ lineHeight: 0.95, marginBottom: 16, animation: 'fadeUp 0.7s ease 0.4s both' }}>
            <span style={{ display: 'block', fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(2.8rem,7vw,6rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}>
              <Typewriter text="BHARAT" delay={600} />
            </span>
            <span style={{
              display: 'block', fontFamily: 'Orbitron, monospace', fontWeight: 900,
              fontSize: 'clamp(2.8rem,7vw,6rem)', letterSpacing: '-0.03em',
              background: 'linear-gradient(90deg, var(--cyan), #38bdf8, var(--cyan))',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              animation: 'shimmer 4s linear infinite, fadeUp 0.7s ease 0.5s both',
            }}>
              <Typewriter text="MISHRA" delay={1000} />
            </span>
          </h1>

          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'rgba(0,229,255,0.6)', letterSpacing: '0.2em', marginBottom: 20, animation: 'fadeUp 0.6s ease 0.7s both' }}>
            AI &amp; MACHINE LEARNING ENGINEER
          </p>

          <p style={{ fontSize: '0.97rem', color: 'var(--text-dim)', lineHeight: 1.8, maxWidth: 520, marginBottom: 36, animation: 'fadeUp 0.6s ease 0.9s both' }}>
            Building intelligent systems at the intersection of{' '}
            <strong style={{ color: 'var(--text)' }}>Generative AI, Computer Vision, and NLP</strong>.
            From cybersecurity honeypots to aerial object detection — engineering AI that solves real problems.
          </p>

          <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginBottom: 36, animation: 'fadeUp 0.6s ease 1.1s both' }}>
            <StatCard val="TOP 2%" label="National Rank" sub="Buildathon 2026" />
            <StatCard val="2" label="AI Projects" sub="Production systems" />
            <StatCard val="7+" label="Tech Domains" sub="ML · CV · NLP · GenAI" />
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animation: 'fadeUp 0.6s ease 1.3s both' }}>
            <a href="#projects" className="cyber-btn cyber-btn-primary">
              VIEW PROJECTS
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="mailto:bharathaldwanionline@gmail.com" className="cyber-btn cyber-btn-outline">
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* RIGHT: Neural Orb */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, animation: 'fadeIn 1s ease 0.6s both' }}>
          <NeuralOrb />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 280 }}>
            {['PyTorch', 'YOLOv8', 'LangChain', 'RAG', 'AI Agents', 'NLP', 'Python', 'GenAI'].map((t, i) => (
              <span key={t} className="tech-tag" style={{ animation: `floatTag ${2.2 + (i % 4) * 0.5}s ease-in-out ${(i * 0.3) % 2}s infinite` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, animation: 'fadeUp 0.6s ease 2s both' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.52rem', color: 'var(--text-faint)', letterSpacing: '0.2em' }}>SCROLL</span>
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, var(--cyan), transparent)', animation: 'fadeUp 1.5s ease-in-out infinite' }} />
      </div>

      <style>{`
        @media(max-width:768px){
          #hero > div { grid-template-columns: 1fr !important; }
          #hero > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
