import React, { useEffect, useRef } from 'react';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  color: string;
  secondaryColor: string;
  alpha: number;
  initialAlpha: number;
  lineWidth: number;
}

export const FlowingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Pointer tracking with smooth interpolation
    const cursor = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 200,
      isActive: false,
    };

    let lastMovePos = { x: -1000, y: -1000 };
    const ripples: Ripple[] = [];

    const handleResize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const addRipple = (x: number, y: number, isClick = false) => {
      const maxRadius = isClick ? 220 : 90;
      const initialAlpha = isClick ? 0.75 : 0.4;
      const speed = isClick ? 3.8 : 2.2;
      const isCyan = Math.random() > 0.4;

      ripples.push({
        x,
        y,
        radius: 6,
        maxRadius,
        speed,
        color: isCyan ? 'rgba(0, 184, 255,' : 'rgba(117, 95, 190,',
        secondaryColor: isCyan ? 'rgba(117, 95, 190,' : 'rgba(0, 184, 255,',
        alpha: initialAlpha,
        initialAlpha,
        lineWidth: isClick ? 2.5 : 1.5,
      });

      // Extra echoing secondary ring on click
      if (isClick) {
        ripples.push({
          x,
          y,
          radius: 2,
          maxRadius: maxRadius * 0.7,
          speed: speed * 0.8,
          color: 'rgba(0, 184, 255,',
          secondaryColor: 'rgba(255, 255, 255,',
          alpha: initialAlpha * 0.8,
          initialAlpha: initialAlpha * 0.8,
          lineWidth: 1.8,
        });
      }

      // Limit active ripples to maintain high performance
      if (ripples.length > 30) {
        ripples.splice(0, ripples.length - 30);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      cursor.targetX = e.clientX;
      cursor.targetY = e.clientY;
      cursor.isActive = true;

      // Initialize on first move
      if (cursor.x < 0) {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
        lastMovePos = { x: e.clientX, y: e.clientY };
      }

      // Create gentle ripple trails if mouse moved sufficient distance
      const dx = e.clientX - lastMovePos.x;
      const dy = e.clientY - lastMovePos.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 40) {
        addRipple(e.clientX, e.clientY, false);
        lastMovePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      cursor.targetX = e.clientX;
      cursor.targetY = e.clientY;
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      cursor.isActive = true;
      addRipple(e.clientX, e.clientY, true);
    };

    const handlePointerLeave = () => {
      cursor.isActive = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    let time = 0;
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += prefersReducedMotion ? 0 : 0.003;

      // Clear previous frame
      ctx.clearRect(0, 0, width, height);

      // Smooth cursor interpolation (lerp)
      if (cursor.isActive) {
        cursor.x += (cursor.targetX - cursor.x) * 0.12;
        cursor.y += (cursor.targetY - cursor.y) * 0.12;
      }

      // 1. Flowing ambient gradients
      // Center 1: Deep Violet wave
      const g1X = width * 0.25 + Math.sin(time * 0.9) * (width * 0.15);
      const g1Y = height * 0.35 + Math.cos(time * 0.7) * (height * 0.12);
      const g1Radius = Math.max(width, height) * 0.45;

      const grad1 = ctx.createRadialGradient(g1X, g1Y, 0, g1X, g1Y, g1Radius);
      grad1.addColorStop(0, 'rgba(117, 95, 190, 0.18)');
      grad1.addColorStop(0.5, 'rgba(117, 95, 190, 0.06)');
      grad1.addColorStop(1, 'rgba(11, 9, 22, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Center 2: Cyan wave
      const g2X = width * 0.75 + Math.cos(time * 0.8) * (width * 0.18);
      const g2Y = height * 0.65 + Math.sin(time * 0.95) * (height * 0.15);
      const g2Radius = Math.max(width, height) * 0.4;

      const grad2 = ctx.createRadialGradient(g2X, g2Y, 0, g2X, g2Y, g2Radius);
      grad2.addColorStop(0, 'rgba(0, 184, 255, 0.14)');
      grad2.addColorStop(0.5, 'rgba(0, 184, 255, 0.04)');
      grad2.addColorStop(1, 'rgba(11, 9, 22, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Center 3: Center morphing blend
      const g3X = width * 0.5 + Math.sin(time * 0.6) * (width * 0.12);
      const g3Y = height * 0.8 + Math.cos(time * 0.85) * (height * 0.1);
      const g3Radius = Math.max(width, height) * 0.35;

      const grad3 = ctx.createRadialGradient(g3X, g3Y, 0, g3X, g3Y, g3Radius);
      grad3.addColorStop(0, 'rgba(117, 95, 190, 0.12)');
      grad3.addColorStop(0.6, 'rgba(0, 184, 255, 0.03)');
      grad3.addColorStop(1, 'rgba(11, 9, 22, 0)');

      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);

      // 2. Cursor glow follower (Interactive soft light)
      if (cursor.isActive && cursor.x > 0 && cursor.y > 0) {
        const cursorGrad = ctx.createRadialGradient(
          cursor.x,
          cursor.y,
          0,
          cursor.x,
          cursor.y,
          cursor.radius
        );
        cursorGrad.addColorStop(0, 'rgba(0, 184, 255, 0.15)');
        cursorGrad.addColorStop(0.4, 'rgba(117, 95, 190, 0.08)');
        cursorGrad.addColorStop(1, 'rgba(11, 9, 22, 0)');

        ctx.fillStyle = cursorGrad;
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, cursor.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Expanding Ripple Rings
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;

        // Progress from 0 to 1
        const progress = r.radius / r.maxRadius;
        r.alpha = r.initialAlpha * (1 - progress);

        if (progress >= 1 || r.alpha <= 0.01) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw primary ripple ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${r.color}${r.alpha})`;
        ctx.lineWidth = r.lineWidth * (1 - progress * 0.4);
        ctx.shadowColor = `${r.color}0.8)`;
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Draw soft inner glow wave
        if (progress < 0.6) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, Math.max(0, r.radius - 4), 0, Math.PI * 2);
          ctx.strokeStyle = `${r.secondaryColor}${r.alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Subtle fine scientific grid overlay for enhanced depth */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};
