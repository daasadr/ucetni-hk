import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import ScrollReveal from '@/components/ScrollReveal';
import { LanguageProvider } from '@/lib/LanguageContext';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'Ing. Markéta Horáková — Certifikovaná účetní Praha',
  description: 'Certifikovaná účetní v Praze. Vedení účetnictví, zpracování mezd, daňová přiznání, DPH agenda. Individuální přístup, přesnost, dostupnost. První konzultace zdarma.',
  keywords: ['účetní Praha', 'účetnictví', 'daňové přiznání', 'zpracování mezd', 'DPH', 'certifikovaná účetní'],
  openGraph: {
    title: 'Ing. Markéta Horáková — Certifikovaná účetní Praha',
    description: 'Účetnictví bez starostí. Daně bez překvapení. 14+ let praxe, 180+ spokojených klientů.',
    url: 'https://daasadr.github.io/ucetni-hk',
    siteName: 'Ing. Markéta Horáková',
    images: [{ url: `${BASE}/images/og-image.webp`, width: 1200, height: 630 }],
    locale: 'cs_CZ',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#0d2233" />
      </head>
      <body>
        <LanguageProvider>
          <ScrollReveal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
