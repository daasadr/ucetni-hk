'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/basePath';
import { TRANSLATIONS } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './Hero.module.css';

const DotCanvas = dynamic(() => import('./DotCanvas'), { ssr: false });

type Msg = { role: 'user' | 'bot'; text: string };

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const ct = t.chatbot;

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: 'user', text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('https://winter-sun-a78d.daasa-d.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next, lang }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch {
      await new Promise(r => setTimeout(r, 1050));
      setMessages(prev => [...prev, { role: 'bot', text: ct.fallback }]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <section className={styles.hero}>
      <div ref={bgRef} className={styles.bg} style={{ backgroundImage: `url(${asset('/images/hero-bg.webp')})` }} />
      <div className={styles.overlay} />
      <DotCanvas />
      <div className={styles.bgWord} aria-hidden="true">HORÁKOVÁ</div>
      <div className={styles.accentLine} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={`${styles.since} reveal`}>{t.sinceLabel}</p>
        <h1 className={`${styles.name} reveal reveal-delay-1`}>{t.name}</h1>
        <div className={`${styles.taglineWrap} reveal reveal-delay-2`}>
          <span className={styles.tagline}>{t.tagline}</span>
          <span className={styles.taglineSub}>{t.sub}</span>
        </div>
        <p className={`${styles.claim} reveal reveal-delay-3`}>{t.claim}</p>
        <div className={`${styles.ctas} reveal reveal-delay-3`}>
          <a href="#kontakt" className="btn-teal">{t.cta1}</a>
          <a href="#sluzby" className="btn-outline">{t.cta2}</a>
        </div>
        <div className={`${styles.badges} reveal reveal-delay-4`}>
          {t.badges.map((b, i) => <span key={i} className={styles.badge}>{b}</span>)}
        </div>
      </div>

      {/* chatbot panel */}
      <div className={styles.botPanel}>
        <div className={styles.botHeader}>
          <span className={styles.onlineDot} />
          <span>{ct.online}</span>
        </div>

        {!chatOpen ? (
          <div className={`${styles.bubble} ${styles.bubble1}`}>
            {ct.bubble1}
            <button className={styles.askBtn} onClick={() => setChatOpen(true)}>
              {ct.askBtn}
            </button>
          </div>
        ) : (
          <div className={styles.chatBubble}>
            <div className={styles.chatMessages} ref={messagesRef}>
              {messages.length === 0 && (
                <p className={styles.chatEmpty}>
                  <span className={styles.chatPrompt}>{ct.prompt}</span>
                </p>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={msg.role === 'user' ? styles.userMsg : styles.botMsg}>
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className={styles.botMsg}>
                  <span className={styles.typing}>
                    <span /><span /><span />
                  </span>
                </div>
              )}
            </div>
            <div className={styles.chatInput}>
              <textarea
                className={styles.chatTextarea}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder={ct.placeholder}
                rows={2}
              />
              <button
                className={styles.sendBtn}
                onClick={sendMessage}
                disabled={loading || !input.trim()}
              >
                {ct.sendBtn}
              </button>
            </div>
          </div>
        )}

        <img src={asset('/images/bot.webp')} alt="Virtuální asistentka" className={styles.botImg} />

        <div className={`${styles.bubble} ${styles.bubble2}`}>
          {ct.bubble2}
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
