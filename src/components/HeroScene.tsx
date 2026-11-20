"use client";

import { useEffect, useRef } from "react";

export default function HeroScene() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let cleanup: (() => void) | undefined;
    let loading = false;
    let visible = false;
    let active = () => {};
    const load = async () => {
      if (loading || preference.matches || disposed) return;
      loading = true;
      try {
        const THREE = await import("three");
        if (disposed || preference.matches) {
          loading = false;
          return;
        }
        let renderer: InstanceType<typeof THREE.WebGLRenderer>;
        try {
          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "low-power",
          });
        } catch {
          return;
        } // The CSS lighting remains as the no-WebGL fallback.
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);
        element.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 30);
        camera.position.z = 7;
        const group = new THREE.Group();
        scene.add(group);
        scene.add(new THREE.HemisphereLight(0xe9e8ff, 0x202029, 2.5));
        const key = new THREE.DirectionalLight(0xffffff, 5);
        key.position.set(-3, 5, 4);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0xb6a3ed, 3);
        rim.position.set(4, -2, 2);
        scene.add(rim);
        const materials: InstanceType<typeof THREE.MeshStandardMaterial>[] = [];
        const geometries: InstanceType<typeof THREE.BufferGeometry>[] = [];
        for (let band = 0; band < 3; band++) {
          const geometry = new THREE.TorusGeometry(2.25 + band * 0.32, 0.055 + band * 0.025, 12, 120);
          const material = new THREE.MeshStandardMaterial({
            color: band === 1 ? 0x9692a6 : 0xd4d5df,
            metalness: 0.7,
            roughness: 0.26,
          });
          geometries.push(geometry);
          materials.push(material);
          const ring = new THREE.Mesh(geometry, material);
          ring.rotation.x = 0.45 + band * 0.22;
          ring.rotation.y = -0.35 + band * 0.3;
          group.add(ring);
        }
        group.rotation.z = -0.35;
        const resize = () => {
          const { width, height } = element.getBoundingClientRect();
          if (!width || !height) return;
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.position.z = width < 600 ? 9 : 7;
          camera.updateProjectionMatrix();
        };
        const sizeObserver = new ResizeObserver(resize);
        sizeObserver.observe(element);
        resize();
        let frame = 0,
          last = 0,
          time = 0;
        const render = (now: number) => {
          frame = requestAnimationFrame(render);
          if (now - last < 1000 / 30) return;
          time += Math.min((now - last) / 1000, 0.05);
          last = now;
          const rect = element.getBoundingClientRect();
          const progress = Math.max(-1, Math.min(1, rect.top / innerHeight));
          group.rotation.y = Math.sin(time * 0.2) * 0.18;
          group.rotation.z =
            -0.35 + Math.sin(time * 0.13) * 0.06 + progress * 0.1;
          group.position.y = Math.sin(time * 0.25) * 0.15;
          renderer.render(scene, camera);
        };
        active = () => {
          cancelAnimationFrame(frame);
          if (visible && !document.hidden && !preference.matches) {
            last = performance.now();
            frame = requestAnimationFrame(render);
          }
        };
        const lost = (event: Event) => {
          event.preventDefault();
          visible = false;
          active();
        };
        renderer.domElement.addEventListener("webglcontextlost", lost);
        document.addEventListener("visibilitychange", active);
        cleanup = () => {
          cancelAnimationFrame(frame);
          sizeObserver.disconnect();
          document.removeEventListener("visibilitychange", active);
          renderer.domElement.removeEventListener("webglcontextlost", lost);
          geometries.forEach((item) => item.dispose());
          materials.forEach((item) => item.dispose());
          renderer.dispose();
          renderer.domElement.remove();
        };
        active();
      } catch {
        /* Keep the static CSS artwork if the optional scene cannot load. */
      }
    };
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) void load();
      active();
    });
    observer.observe(element);
    const changed = () => {
      if (!preference.matches && visible) void load();
      active();
    };
    preference.addEventListener("change", changed);
    return () => {
      disposed = true;
      observer.disconnect();
      preference.removeEventListener("change", changed);
      cleanup?.();
    };
  }, []);
  return <div ref={host} className="hero-scene" aria-hidden="true" />;
}
