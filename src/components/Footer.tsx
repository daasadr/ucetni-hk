'use client';
import { CONTENT } from '@/lib/content';
import styles from './Footer.module.css';

const NAV = [
  { label: 'O mně', href: '#o-mne' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'Reference', href: '#reference' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Footer() {
  const f = CONTENT.footer;
  const c = CONTENT.contact.info;

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <p className={styles.logo}>Ing. Markéta <span className={styles.logoAccent}>Horáková</span></p>
              <p className={styles.logoSub}>Certifikovaná účetní · Praha</p>
              <p className={styles.desc}>{f.desc}</p>
              <span className={styles.chamber}>{f.chamber}</span>
            </div>
            <div>
              <h4 className={styles.colTitle}>Navigace</h4>
              <ul className={styles.linkList}>
                {NAV.map(n => (
                  <li key={n.href}><a href={n.href} className={styles.link}>{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={styles.colTitle}>Kontakt</h4>
              <ul className={styles.contactList}>
                <li><a href={`tel:${c.phone.replace(/\s/g,'')}`} className={styles.link}>{c.phone}</a></li>
                <li><a href={`mailto:${c.email}`} className={styles.link}>{c.email}</a></li>
                <li className={styles.addr}>{c.address}</li>
                <li className={styles.hours}>{c.hours}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.disclaimer}>{f.disclaimer}</p>
          <p className={styles.rights}>{f.rights}</p>
        </div>
      </div>
    </footer>
  );
}
