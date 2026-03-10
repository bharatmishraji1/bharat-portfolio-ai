'use client';

import { useEffect, useRef } from 'react';

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Lazy-load Three.js from CDN to avoid bundle issues
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => initScene(canvas);
    document.head.appendChild(script);

    let animId: number;
    function initScene(c: HTMLCanvasElement) {
      const THREE = (window as any).THREE;
      if (!THREE) return;

      const renderer = new THREE.WebGLRenderer({ canvas: c, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
      camera.position.z = 40;

      // ── Particles ──
      const COUNT = 2200;
      const geo   = new THREE.BufferGeometry();
      const pos   = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const r     = 28 + Math.random() * 50;
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);
        pos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
        pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i*3+2] = r * Math.cos(phi);
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat       = new THREE.PointsMaterial({ color: 0x00e5ff, size: 0.07, transparent: true, opacity: 0.5, sizeAttenuation: true });
      const particles = new THREE.Points(geo, mat);
      scene.add(particles);

      // ── Wireframe sphere ──
      const sGeo = new THREE.SphereGeometry(7, 22, 22);
      const sMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.05 });
      const sphere = new THREE.Mesh(sGeo, sMat);
      scene.add(sphere);

      // ── Grid ──
      const grid = new THREE.GridHelper(100, 55, 0x001520, 0x001520);
      grid.position.y = -16;
      scene.add(grid);

      // ── Mouse + scroll state ──
      let mx = 0, my = 0, scrollT = 0;
      const onMouse = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth  - 0.5) * 2;
        my = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      const onScroll = () => { scrollT = window.scrollY / window.innerHeight; };
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('mousemove', onMouse);
      window.addEventListener('scroll',    onScroll, { passive: true });
      window.addEventListener('resize',    onResize);

      // ── Animate ──
      function animate() {
        animId = requestAnimationFrame(animate);
        particles.rotation.y += 0.0012;
        particles.rotation.x += 0.0003;
        sphere.rotation.y    += 0.004;
        sphere.rotation.x    += 0.002;
        camera.position.x += (mx * 3 - camera.position.x) * 0.03;
        camera.position.y += (my * 3 - camera.position.y) * 0.03;
        camera.position.z  = 40 - scrollT * 7;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      }
      animate();

      // Cleanup stored on canvas element
      (c as any).__threeCleanup = () => {
        window.removeEventListener('mousemove', onMouse);
        window.removeEventListener('scroll',    onScroll);
        window.removeEventListener('resize',    onResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if ((canvas as any).__threeCleanup) (canvas as any).__threeCleanup();
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block', opacity: 0.65 }}
    />
  );
}
