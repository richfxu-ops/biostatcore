import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Biostat Core is the United States representative of Meta Clinical Technology, a global provider of biostatistics and clinical data services.',
};

const values = [
  {
    title: 'Scientific Rigor',
    description: 'We apply the highest standards of statistical methodology to every project. Our analyses are designed to withstand regulatory scrutiny and stand up to peer review.',
  },
  {
    title: 'Transparency',
    description: 'Clear communication is at the heart of every engagement. We keep our clients informed at every milestone, and our documentation is thorough enough to speak for itself.',
  },
  {
    title: 'Flexibility',
    description: 'No two clinical programs are alike. We scale our resources and adapt our delivery models — from embedded FSP teams to full-service engagements — to match the unique needs of each sponsor.',
  },
  {
    title: 'Global Perspective',
    description: 'With operations spanning the U.S., China, Japan, Australia, and Europe, we bring a multinational lens to every study. Our teams understand local regulatory landscapes while maintaining globally consistent quality.',
  },
  {
    title: 'Commitment to Quality',
    description: 'Our quality management system covers every deliverable, from statistical analysis plans to final submission packages. We build quality in from the start rather than inspecting for it at the end.',
  },
];

export default function OurStoryPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>About</p>
          <h1 className={styles.heroTitle}>Our Story</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.storyBody}>
            <p>
              Biostat Core is the United States representative of Meta Clinical Technology, a global
              provider of biostatistics, statistical programming, and clinical data management
              services. We help sponsors conduct high-quality, compliant, and efficient clinical
              research from early-phase studies through regulatory submission.
            </p>
            <p>
              As a subsidiary of the Clinical Service Center (CSC), Meta Clinical operates with a
              team of nearly 1,000 experienced professionals. Our teams collaborate on multinational
              studies across the United States, China, Japan, Australia, and Europe, with deep
              expertise in regulatory submissions to the FDA, NMPA, EMA, and TGA.
            </p>
            <p>
              Biostat Core was established to give U.S.-based sponsors direct access to this global
              network — with a local team that understands both domestic regulatory expectations and
              the nuances of multi-regional clinical development. We operate through Functional
              Service Provider (FSP) and full-service engagement models, adapting our structure to
              fit your program.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-header__accent" />
            <h2>Our Values</h2>
            <p>The principles that shape how we work with every client, on every study.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={v.title} className={`card ${styles.valueCard}`}>
                <div className={styles.valueNumber}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
