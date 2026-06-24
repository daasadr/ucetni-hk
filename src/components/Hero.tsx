'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/basePath';
import { CONTENT } from '@/lib/content';
import styles from './Hero.module.css';

const DotCanvas = dynamic(() => import('./DotCanvas'), { ssr: false });

type Msg = { role: 'user' | 'bot'; text: string };

/* ── inteligentní fallback pro GitHub Pages (bez API) ── */
const REPLIES: [RegExp, string][] = [
  [/(cen|kolik|pla|tarif|ceník)/i,
    'Účetnictví pro živnostníky od 1 500 Kč/měsíc, pro s.r.o. od 2 800 Kč/měsíc. Podrobný ceník najdete výše na stránce. Ráda připravím individuální nabídku!'],
  [/(termín|volný|dostupn|kdy|schůzk|konzultace)/i,
    'Tento týden mám volno: čtvrtek 26. 6. v 10:00 a pátek 27. 6. ve 14:00. Příští týden: pondělí 30. 6. v 9:00 a středa 2. 7. v 15:00. Napište mi na info@horakova-ucetni.cz pro rezervaci!'],
  [/(mzd|zaměstnanec|výplat|personalist)/i,
    'Zpracovávám kompletní mzdovou agendu — výpočet mezd, přihlášky OSSZ/ZP, roční zúčtování. Cena od 200 Kč/zaměstnanec/měsíc.'],
  [/(dph|vat)/i,
    'DPH přiznání, souhrnná hlášení i kontrolní hlášení — vše zajišťuji v termínu. Cena od 800 Kč/kvartál.'],
  [/(daň|přiznání|dpfo|dppo)/i,
    'Zpracovávám DPFO, DPPO i DPH. Hlídám termíny za vás — žádné pokuty, žádný stres.'],
  [/(s\.r\.o\.|firma|společnost|esg|holding)/i,
    'Pro s.r.o. nabízím kompletní vedení účetnictví, daňová přiznání i reporting od 2 800 Kč/měsíc.'],
  [/(živno|osvč|podnikat)/i,
    'Balíček "Podnikatel Start" pro OSVČ: daňová evidence, DPH, daňové přiznání — vše za 1 990 Kč/měsíc.'],
];

function getBotReply(text: string): string {
  for (const [re, reply] of REPLIES) {
    if (re.test(text)) return reply;
  }
  return 'Děkuji za dotaz! Nejraději vám poradím osobně — info@horakova-ucetni.cz nebo +420 777 123 456. První konzultace je vždy zdarma!';
}
/* ─────────────────────────────────────────────────── */

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

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
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch {
      await new Promise(r => setTimeout(r, 1050));
      setMessages(prev => [...prev, { role: 'bot', text: getBotReply(text) }]);
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

      {/* hlavní textový obsah */}
      <div className={`container ${styles.content}`}>
        <p className={`${styles.since} reveal`}>{CONTENT.sinceLabel}</p>
        <h1 className={`${styles.name} reveal reveal-delay-1`}>{CONTENT.name}</h1>
        <div className={`${styles.taglineWrap} reveal reveal-delay-2`}>
          <span className={styles.tagline}>{CONTENT.tagline}</span>
          <span className={styles.taglineSub}>{CONTENT.sub}</span>
        </div>
        <p className={`${styles.claim} reveal reveal-delay-3`}>{CONTENT.claim}</p>
        <div className={`${styles.ctas} reveal reveal-delay-3`}>
          <a href="/#kontakt" className="btn-teal">{CONTENT.cta1}</a>
          <a href="/#sluzby" className="btn-outline">{CONTENT.cta2}</a>
        </div>
        <div className={`${styles.badges} reveal reveal-delay-4`}>
          <span className={styles.badge}>✓ Certifikát I. stupně SÚ ČR</span>
          <span className={styles.badge}>✓ 14+ let praxe</span>
          <span className={styles.badge}>✓ První konzultace zdarma</span>
        </div>
      </div>

      {/* chatbot panel */}
      <div className={styles.botPanel}>
        <div className={styles.botHeader}>
          <span className={styles.onlineDot} />
          <span>Asistentka · online</span>
        </div>

        {/* bubble1 nebo chat — NAD ilustrací, zobáček míří DOLŮ k ústům */}
        {!chatOpen ? (
          <div className={`${styles.bubble} ${styles.bubble1}`}>
            Potřebujete se zeptat na otázku ohledně mých služeb či ověřit si dostupnost?
            <button className={styles.askBtn} onClick={() => setChatOpen(true)}>
              ZEPTAT SE
            </button>
          </div>
        ) : (
          <div className={styles.chatBubble}>
            <div className={styles.chatMessages} ref={messagesRef}>
              {messages.length === 0 && (
                <p className={styles.chatEmpty}>
                  <span className={styles.chatPrompt}>Ptejte se…</span>
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
                placeholder="Napište dotaz…"
                rows={2}
              />
              <button
                className={styles.sendBtn}
                onClick={sendMessage}
                disabled={loading || !input.trim()}
              >
                OK
              </button>
            </div>
          </div>
        )}

        <img src={asset('/images/bot.webp')} alt="Virtuální asistentka" className={styles.botImg} />

        {/* bubble2 — pod ilustrací */}
        <div className={`${styles.bubble} ${styles.bubble2}`}>
          ✨ Váš osobní chatbot – můžete jej mít na webu taky
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
