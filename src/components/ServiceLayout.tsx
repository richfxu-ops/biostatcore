import Link from 'next/link';
import styles from './ServiceLayout.module.css';

interface Capability {
  title: string;
  description: string;
}

interface ServiceLayoutProps {
  name: string;
  tagline: string;
  intro: string;
  capabilities: Capability[];
  scopeItems: string[];
}

export default function ServiceLayout({ name, tagline, intro, capabilities, scopeItems }: ServiceLayoutProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>Services</p>
          <h1 className={styles.heroTitle}>{name}</h1>
          <p className={styles.heroTagline}>{tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className={styles.intro}>{intro}</p>
        </div>
      </section>

      <section className={`section section--alt ${styles.capabilitiesSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-header__accent" />
            <h2>Core Capabilities</h2>
          </div>
          <div className={styles.capabilityList}>
            {capabilities.map((cap, i) => (
              <div key={cap.title} className={`${styles.capability} ${i % 2 !== 0 ? styles.capabilityAlt : ''}`}>
                <div className={styles.capabilityContent}>
                  <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                  <p className={styles.capabilityDesc}>{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__accent" />
            <h2>Full Service Scope</h2>
          </div>
          <div className={styles.scopeGrid}>
            {scopeItems.map(item => (
              <div key={item} className={styles.scopeItem}>
                <span className={styles.scopeCheck}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className={styles.cta}>
            <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
