'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { TRANSLATIONS } from '@/lib/translations';
import styles from './Services.module.css';

export default function Services() {
  const { lang } = useLanguage();
  const s = TRANSLATIONS[lang].services;

  return (
    <section id="sluzby" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{s.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{s.title}</h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>{s.sub}</p>
        </div>
        <div className={styles.grid}>
          {s.items.map((item, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}>
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.cardName}>{item.name}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
        <div className={`${styles.cta} reveal`}>
          <a href="#kontakt" className="btn-teal">{s.cta}</a>
        </div>
      </div>
    </section>
  );
}
