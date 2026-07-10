'use client';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { TRANSLATIONS } from '@/lib/translations';
import styles from './FAQ.module.css';

export default function FAQ() {
  const { lang } = useLanguage();
  const f = TRANSLATIONS[lang].faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className="section-tag reveal">{f.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{f.title}</h2>
        </div>
        <div className={styles.list}>
          {f.items.map((item, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''} reveal reveal-delay-${i + 1}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={styles.chevron} aria-hidden="true">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={`${styles.cta} reveal`}>
          <p className={styles.ctaText}>{lang === 'cs' ? 'Nenašli jste odpověď? Napište mi.' : lang === 'en' ? "Didn't find your answer? Write to me." : 'Niste našli odgovora? Pišite mi.'}</p>
          <a href="#kontakt" className="btn-teal">{lang === 'cs' ? 'Napsat dotaz' : lang === 'en' ? 'Send a question' : 'Pošljite vprašanje'}</a>
        </div>
      </div>
    </section>
  );
}
