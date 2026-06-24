import styles from './Marquee.module.css';

const ITEMS = [
  'Certifikovaná účetní',
  '14+ let praxe',
  '180+ spokojených klientů',
  '100% daní podáno včas',
  'Praha a okolí',
  'Mzdy · DPH · Daně',
  'Certifikát I. stupně SÚ ČR',
  'První konzultace zdarma',
];

export default function Marquee() {
  const text = ITEMS.join('  ·  ') + '  ·  ';
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
