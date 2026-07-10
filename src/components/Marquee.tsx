'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { TRANSLATIONS } from '@/lib/translations';
import styles from './Marquee.module.css';

export default function Marquee() {
  const { lang } = useLanguage();
  const items = TRANSLATIONS[lang].marquee;
  const text = items.join('  ·  ') + '  ·  ';
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
