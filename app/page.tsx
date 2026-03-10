'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectSection from '@/components/ProjectSection';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

export default function Page() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rx = useRef(0);
  const ry = useRef(0);
  const cx = useRef(0);
  const cy = useRef(0);

  useEffect(() => {
    // ── cursor ──
    const onMove = (e: MouseEvent) => {
      cx.current = e.clientX;
      cy.current = e.clientY;
    };
    document.addEventListener('mousemove', onMove);

    let raf: number;
    const animCursor = () => {
      rx.current += (cx.current - rx.current) * 0.18;
      ry.current += (cy.current - ry.current) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.left = cx.current + 'px';
        dotRef.current.style.top  = cy.current + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px';
        ringRef.current.style.top  = ry.current + 'px';
      }
      raf = requestAnimationFrame(animCursor);
    };
    animCursor();

    // ── hover scale on ring ──
    const hoverEls = document.querySelectorAll('a, button, .skill-tag, [data-hover]');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (ringRef.current) {
          ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.8)';
          ringRef.current.style.opacity = '0.8';
        }
      });
      el.addEventListener('mouseleave', () => {
        if (ringRef.current) {
          ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
          ringRef.current.style.opacity = '0.45';
        }
      });
    });

    // ── scroll reveal ──
    const reveals = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 60);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(el => io.observe(el));

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div id="c-dot"  ref={dotRef}  />
      <div id="c-ring" ref={ringRef} />

      {/* Fixed 3D canvas */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Scene3D />
      </div>

      {/* Scrollable content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <ProjectSection />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
