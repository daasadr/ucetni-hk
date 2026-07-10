'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Nav.module.css';

const LINKS = [
  { label: 'O mně', href: '#o-mne' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'Reference', href: '#reference' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

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
          <span className={styles.logoTitle}>Certifikovaná účetní</span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={styles.link} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#kontakt" className={`btn-teal ${styles.navCta}`} onClick={() => setOpen(false)}>
            Konzultace zdarma
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
