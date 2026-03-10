'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [msg, setMsg] = useState('INITIALIZING NEURAL CORE');
  const msgs = ['INITIALIZING NEURAL CORE','LOADING AI SYSTEMS','CALIBRATING 3D ENGINE','ESTABLISHING CONNECTION'];

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setProgress(p => Math.min(p + Math.random() * 22, 100));
      setMsg(msgs[i % msgs.length]);
      i++;
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 24,
    }}>
      <div style={{
        fontFamily: 'Orbitron, monospace', fontWeight: 900,
        fontSize: '2.5rem', letterSpacing: '0.2em',
        color: 'var(--cyan)',
        textShadow: '0 0 30px rgba(0,229,255,0.5)',
      }}>BM.AI</div>

      <div style={{ width: 200, height: 1, background: 'rgba(0,229,255,0.15)', overflow: 'hidden' }}>
        <div style={{
          height: '100%', background: 'var(--cyan)',
          width: `${progress}%`,
          boxShadow: '0 0 8px var(--cyan)',
          transition: 'width 0.4s ease',
        }} />
      </div>

      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
        color: 'rgba(0,229,255,0.5)', letterSpacing: '0.15em',
      }}>
        {msg}<span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
      </div>
    </div>
  );
}
