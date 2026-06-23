'use client';
import dynamic from 'next/dynamic';
import { useState, FormEvent } from 'react';
import { CONTENT } from '@/lib/content';
import styles from './Contact.module.css';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function Contact() {
  const c = CONTENT.contact;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1200));
    setStatus('sent');
  };

  return (
    <section id="kontakt" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag section-tag-dark reveal">{c.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{c.title}</h2>
          <p className={`${styles.claim} reveal reveal-delay-2`}>{c.claim}</p>
        </div>

        <div className={styles.layout}>
          <div className={`${styles.formWrap} reveal`}>
            {status === 'sent' ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <p>{c.form.success}</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <Field label={c.form.name}><input className={styles.input} type="text" required placeholder={c.form.name} /></Field>
                  <Field label={c.form.email}><input className={styles.input} type="email" required placeholder={c.form.email} /></Field>
                </div>
                <div className={styles.row}>
                  <Field label={c.form.phone}><input className={styles.input} type="tel" placeholder={c.form.phone} /></Field>
                  <Field label={c.form.type}>
                    <select className={styles.input} defaultValue="">
                      <option value="" disabled>{c.form.type}</option>
                      {c.form.typeOptions.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label={c.form.message}><textarea className={styles.textarea} rows={5} placeholder={c.form.message} /></Field>
                <button className={`btn-teal ${styles.submit}`} type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? c.form.sending : c.form.submit}
                </button>
              </form>
            )}
          </div>

          <div className={`${styles.sidebar} reveal reveal-delay-2`}>
            <div className={styles.infoBox}>
              <InfoRow icon="📞" label="Telefon" value={c.info.phone} href={`tel:${c.info.phone.replace(/\s/g, '')}`} />
              <InfoRow icon="✉️" label="E-mail" value={c.info.email} href={`mailto:${c.info.email}`} />
              <InfoRow icon="📍" label="Adresa" value={c.info.address} />
              <InfoRow icon="🕐" label="Úřední hodiny" value={c.info.hours} sub={c.info.hoursNote} />
            </div>
            <div className={styles.mapWrap}>
              <Map label={c.info.address} />
              <p className={styles.mapNote}>{c.mapNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--txt-dark-low)' }}>{label}</label>
      {children}
    </div>
  );
}

function InfoRow({ icon, label, value, href, sub }: { icon: string; label: string; value: string; href?: string; sub?: string }) {
  return (
    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
      <span style={{ fontSize: '1rem', marginTop: '0.1rem', flexShrink: 0 }}>{icon}</span>
      <div>
        <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--txt-dark-low)', marginBottom: '0.15rem' }}>{label}</span>
        {href
          ? <a href={href} style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--txt-dark)', transition: 'color 0.2s' }}>{value}</a>
          : <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--txt-dark)' }}>{value}</span>
        }
        {sub && <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--txt-dark-low)', fontStyle: 'italic', marginTop: '0.15rem' }}>{sub}</span>}
      </div>
    </div>
  );
}
