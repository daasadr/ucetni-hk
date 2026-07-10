'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLanguage, type Lang } from '@/lib/LanguageContext';
import { TRANSLATIONS } from '@/lib/translations';
import styles from './Nav.module.css';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'cs', label: 'CS' },
  { code: 'en', label: 'EN' },
  { code: 'sl', label: 'SL' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const forceLight = !isHome || scrolled;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${forceLight ? styles.forceLight : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoName}>Markéta Horáková</span>
          <span className={styles.logoTitle}>{t.logoTitle}</span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {t.links.map(l => (
            <a key={l.href} href={l.href} className={styles.link} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className={styles.langSwitch}>
            {LANGS.map(l => (
              <button
                key={l.code}
                className={`${styles.langBtn} ${lang === l.code ? styles.langBtnActive : ''}`}
                onClick={() => { setLang(l.code); setOpen(false); }}
                aria-label={`Switch language to ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="#kontakt" className={`btn-teal ${styles.navCta}`} onClick={() => setOpen(false)}>
            {t.cta}
          </a>
        </nav>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
