'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { TRANSLATIONS } from '@/lib/translations';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].testimonials;

  return (
    <section id="reference" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag section-tag-dark reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
        </div>
        <div className={styles.grid}>
          {t.items.map((item, i) => (
            <blockquote key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.stars}>★★★★★</div>
              <div className={styles.bar} />
              <p className={styles.quote}>„{item.quote}"</p>
              <footer className={styles.footer}>
                <span className={styles.author}>{item.author}</span>
                <span className={styles.role}>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
