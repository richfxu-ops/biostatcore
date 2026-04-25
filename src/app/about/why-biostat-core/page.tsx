import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Why Biostat Core',
  description: 'Discover what sets Biostat Core apart — global scale, submission-ready deliverables, senior talent, and a partnership model built for clinical development.',
};

const differentiators = [
  {
    number: '01',
    title: 'Scale Without Compromise',
    description:
      'Backed by Meta Clinical\'s global team of nearly 1,000 professionals, we can scale resources up or down to match your program\'s demands — without sacrificing quality or continuity. Whether you need a single senior biostatistician or a full functional service team, we deliver.',
  },
  {
    number: '02',
    title: 'Submission-Ready Deliverables',
    description:
      'Every output we produce — from SDTM/ADaM datasets to Tables, Listings, and Figures — is built to meet the standards of the FDA, EMA, NMPA, and TGA. Our team has guided over 150 projects through regulatory inspection without major findings.',
  },
  {
    number: '03',
    title: 'Multinational Expertise',
    description:
      'We operate across the U.S., China, Japan, Australia, and Europe. Our teams understand both the local regulatory nuances and the global harmonization requirements of multi-regional clinical trials (MRCTs), making us an ideal partner for cross-border studies.',
  },
  {
    number: '04',
    title: 'Senior-Level Talent',
    description:
      'More than 40% of our professionals hold advanced degrees (MS or PhD), and over 40% have 5–10 years of hands-on industry experience. Your project is staffed by people who have seen the full lifecycle of clinical development.',
  },
  {
    number: '05',
    title: 'Built for Partnership',
    description:
      "We don't just deliver data packages — we integrate with your team. Our flexible FSP and RPO models mean you get dedicated professionals who understand your program's history and goals, not a rotating cast of contractors.",
  },
];

export default function WhyBiostatCorePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>About</p>
          <h1 className={styles.heroTitle}>Why Choose Biostat Core?</h1>
          <p className={styles.heroSubhead}>
            Choosing a biostatistics partner is one of the most consequential decisions in a
            clinical development program. Here&apos;s what sets Biostat Core apart.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.diffList}>
            {differentiators.map(d => (
              <div key={d.number} className={styles.diffItem}>
                <div className={styles.diffNumber}>{d.number}</div>
                <div className={styles.diffContent}>
                  <h2 className={styles.diffTitle}>{d.title}</h2>
                  <p className={styles.diffDesc}>{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section--dark ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaHeading}>Ready to See How Biostat Core Can Help?</h2>
          <p className={styles.ctaSub}>Get in touch and our team will respond within one business day.</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
