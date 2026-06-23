'use client';
import { CONTENT } from '@/lib/content';
import styles from './Pricing.module.css';

export default function Pricing() {
  const p = CONTENT.pricing;
  return (
    <section id="cenik" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{p.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{p.title}</h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>{p.sub}</p>
        </div>

        <div className={styles.grid}>
          {p.plans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ''} reveal reveal-delay-${i + 1}`}
            >
              {plan.highlight && <span className={styles.badge}>Nejoblíbenější</span>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.desc}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && <span className={styles.period}>{plan.period}</span>}
              </div>
              <ul className={styles.features}>
                {plan.features.map((f, j) => (
                  <li key={j} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/#kontakt" className={plan.highlight ? 'btn-teal' : 'btn-outline-dark'}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className={`${styles.note} reveal`}>{p.note}</p>
      </div>
    </section>
  );
}
