'use client';
import { asset } from '@/lib/basePath';
import { useLanguage } from '@/lib/LanguageContext';
import { TRANSLATIONS, FOUNDED } from '@/lib/translations';
import styles from './About.module.css';

export default function About() {
  const { lang } = useLanguage();
  const a = TRANSLATIONS[lang].about;
  const years = new Date().getFullYear() - FOUNDED;

  return (
    <section id="o-mne" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.photoCol}>
          <div className={styles.photoWrap}>
            <img src={asset('/images/about-photo.webp')} alt="Ing. Markéta Horáková" className={styles.photo} />
            <div className={styles.photoBadge}>
              <span className={styles.badgeNum}>{years}</span>
              <span className={styles.badgeLabel}>{a.yearsLabel}</span>
            </div>
          </div>
          <div className={styles.credentials}>
            {a.credentials.map((c, i) => (
              <div key={i} className={styles.credential}>
                <span className={styles.credIcon}>✓</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textCol}>
          <span className="section-tag section-tag-dark reveal">{a.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{a.title}</h2>
          <div className={`${styles.tealLine} reveal reveal-delay-1`} />
          <p className={`${styles.para} reveal reveal-delay-2`}>{a.p1}</p>
          <p className={`${styles.para} reveal reveal-delay-3`}>{a.p2}</p>
          <p className={`${styles.para} reveal reveal-delay-3`}>{a.p3}</p>

          <div className={`${styles.sig} reveal reveal-delay-4`}>
            <div className={styles.sigLine} />
            <div>
              <p className={styles.sigName}>{a.signature}</p>
              <p className={styles.sigTitle}>{a.signatureTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
