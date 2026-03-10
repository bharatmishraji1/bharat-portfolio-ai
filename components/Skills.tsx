'use client';

import React from 'react';

// ── SVG icon components ──────────────────────────────
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
  </svg>
);
const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);
const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
    <path d="M5 3l.6 1.8L7 6l-1.4.6L5 9l-.6-1.8L3 6l1.4-.6z"/>
    <path d="M19 15l.6 1.8L21 18l-1.4.6L19 21l-.6-1.8L17 18l1.4-.6z"/>
  </svg>
);
const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

// ── Skill group data ─────────────────────────────────
const GROUPS = [
  {
    Icon: CodeIcon, name: 'Programming',
    tags: ['Python', 'SQL'],
  },
  {
    Icon: BrainIcon, name: 'Machine Learning',
    tags: ['Supervised Learning', 'Unsupervised Learning', 'Classification', 'Regression', 'Random Forest', 'Logistic Regression', 'Decision Trees', 'Cross Validation', 'Feature Engineering'],
  },
  {
    Icon: LayersIcon, name: 'Deep Learning',
    tags: ['ANN', 'CNN', 'RNN', 'LSTM', 'Transfer Learning'],
  },
  {
    Icon: MessageIcon, name: 'Natural Language Processing',
    tags: ['Text Preprocessing', 'Tokenization', 'TF-IDF', 'Word Embeddings', 'Named Entity Recognition', 'Sentiment Analysis', 'Text Classification'],
  },
  {
    Icon: SparkleIcon, name: 'Generative AI',
    tags: ['Large Language Models', 'Prompt Engineering', 'RAG', 'AI Agents', 'LangChain'],
  },
  {
    Icon: BookIcon, name: 'Libraries & Frameworks',
    tags: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'NLTK', 'spaCy', 'Hugging Face'],
  },
  {
    Icon: EyeIcon, name: 'Computer Vision',
    tags: ['YOLO / YOLOv8', 'Object Detection', 'Image Classification', 'MobileNetV2'],
  },
  {
    Icon: WrenchIcon, name: 'Tools & Infrastructure',
    tags: ['Git', 'Streamlit', 'n8n', 'Jupyter Notebook', 'MySQL', 'Matplotlib', 'Seaborn'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(80px,10vh,120px) clamp(20px,5vw,64px)',
        background: 'var(--bg2)',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div className="section-label">02 · Skills</div>
        <h2 className="section-title reveal" style={{ marginBottom: 48 }}>
          NEURAL <span>ARSENAL</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {GROUPS.map(({ Icon, name, tags }) => (
            <div
              key={name}
              className="glass reveal"
              style={{
                padding: '24px',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(0,229,255,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: '50%',
                  background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon />
                </div>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
                  color: 'var(--cyan)', letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  {name}
                </span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {tags.map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
