'use client';
import { useEffect, useRef } from 'react';

interface Dot { x: number; y: number; vx: number; vy: number; r: number; alpha: number; aDir: number; }

export default function DotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    const dots: Dot[] = [];
    const COUNT = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1 + Math.random() * 2,
        alpha: 0.1 + Math.random() * 0.25,
        aDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        d.alpha += d.aDir * 0.003;
        if (d.alpha > 0.35 || d.alpha < 0.05) d.aDir *= -1;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(27, 138, 120, ${d.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines for nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(27, 138, 120, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
