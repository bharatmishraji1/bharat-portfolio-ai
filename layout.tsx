import type { Metadata } from 'next';
import { Space_Grotesk, Orbitron, Fira_Code } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Bharat Mishra | AI & Machine Learning Specialist',
  description:
    'Futuristic portfolio of Bharat Mishra — Top 2% National Finalist, India AI Impact Buildathon 2026. Expert in LLMs, Computer Vision, and Agentic AI.',
  keywords: ['AI', 'Machine Learning', 'Computer Vision', 'LLM', 'Python', 'PyTorch'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
