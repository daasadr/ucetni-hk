'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { asset } from '@/lib/basePath';
import { CONTENT } from '@/lib/content';
import styles from './Hero.module.css';

const DotCanvas = dynamic(() => import('./DotCanvas'), { ssr: false });

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div ref={bgRef} className={styles.bg} style={{ backgroundImage: `url(${asset('/images/hero-bg.webp')})` }} />
      <div className={styles.overlay} />
      <DotCanvas />
      <div className={styles.bgWord} aria-hidden="true">HORÁKOVÁ</div>
      <div className={styles.accentLine} aria-hidden="true" />

      {/* hlavní textový obsah — původní poloha */}
      <div className={`container ${styles.content}`}>
        <p className={`${styles.since} reveal`}>{CONTENT.sinceLabel}</p>
        <h1 className={`${styles.name} reveal reveal-delay-1`}>{CONTENT.name}</h1>
        <div className={`${styles.taglineWrap} reveal reveal-delay-2`}>
          <span className={styles.tagline}>{CONTENT.tagline}</span>
          <span className={styles.taglineSub}>{CONTENT.sub}</span>
        </div>
        <p className={`${styles.claim} reveal reveal-delay-3`}>{CONTENT.claim}</p>
        <div className={`${styles.ctas} reveal reveal-delay-3`}>
          <a href="/#kontakt" className="btn-teal">{CONTENT.cta1}</a>
          <a href="/#sluzby" className="btn-outline">{CONTENT.cta2}</a>
        </div>
        <div className={`${styles.badges} reveal reveal-delay-4`}>
          <span className={styles.badge}>✓ Certifikát I. stupně SÚ ČR</span>
          <span className={styles.badge}>✓ 14+ let praxe</span>
          <span className={styles.badge}>✓ První konzultace zdarma</span>
        </div>
      </div>

      {/* chatbot — absolutně přilepený k pravému okraji */}
      <div className={styles.botPanel}>
        <div className={styles.botHeader}>
          <span className={styles.onlineDot} />
          <span>Asistentka · online</span>
        </div>
        <img
          src={asset('/images/bot.webp')}
          alt="Virtuální asistentka"
          className={styles.botImg}
        />
        <div className={`${styles.bubble} ${styles.bubble1}`}>
          Potřebujete se zeptat na otázku ohledně mých služeb či ověřit si dostupnost?
        </div>
        <div className={`${styles.bubble} ${styles.bubble2}`}>
          ✨ Váš osobní chatbot – můžete jej mít na webu taky
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
