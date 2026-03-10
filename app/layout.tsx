import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bharat Mishra | AI & Machine Learning Engineer',
  description:
    'Portfolio of Bharat Mishra — Top 2% National Finalist, India AI Impact Buildathon 2026. Expert in LLMs, Computer Vision, NLP, and Agentic AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
