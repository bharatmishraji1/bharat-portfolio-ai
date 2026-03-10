'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import ProjectSection from '@/components/ProjectSection';
import TechCloud from '@/components/TechCloud';
import Contact from '@/components/Contact';
import NavBar from '@/components/NavBar';
import LoadingScreen from '@/components/LoadingScreen';

// Dynamically import the 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => <LoadingScreen />,
});

export default function Page() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden">
      {/* Fixed 3D Canvas behind everything */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<LoadingScreen />}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Scrollable content overlay */}
      <div className="relative z-10">
        <Hero />
        <ProjectSection />
        <TechCloud />
        <Contact />
      </div>
    </main>
  );
}
