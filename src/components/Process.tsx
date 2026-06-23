'use client';
import { CONTENT } from '@/lib/content';
import styles from './Process.module.css';

export default function Process() {
  const p = CONTENT.process;
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag section-tag-dark reveal">{p.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{p.title}</h2>
        </div>
        <div className={styles.steps}>
          {p.steps.map((step, i) => (
            <div key={i} className={`${styles.step} reveal reveal-delay-${i + 1}`}>
              <div className={styles.numWrap}>
                <span className={styles.num}>{step.num}</span>
                {i < p.steps.length - 1 && <span className={styles.connector} aria-hidden="true" />}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.cta} reveal`}>
          <a href="/#kontakt" className="btn-outline-dark">Začít spolupráci</a>
        </div>
      </div>
    </section>
  );
}
