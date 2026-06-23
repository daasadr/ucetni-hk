'use client';
import { useEffect, useRef, useState } from 'react';
import { CONTENT, FOUNDED } from '@/lib/content';
import styles from './Stats.module.css';

function Counter({ target, suffix, display }: { target: number; suffix: string; display?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);
  const yearCount = new Date().getFullYear() - FOUNDED;
  const realTarget = target === -1 ? yearCount : target;

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !observed.current) {
        observed.current = true;
        const start = performance.now();
        const dur = 1800;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * realTarget));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [realTarget]);

  return <span ref={ref}>{display && val === realTarget ? display : val}{suffix}</span>;
}

export default function Stats() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {CONTENT.stats.map((s, i) => (
          <div key={i} className={styles.item}>
            <p className={styles.value}>
              <Counter target={s.value} suffix={s.suffix} display={(s as { display?: string }).display} />
            </p>
            <p className={styles.label}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
