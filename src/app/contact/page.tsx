import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Biostat Core team. We respond within one business day.',
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubhead}>
            Ready to discuss your next clinical trial? Our team responds within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className={styles.info}>
              <div className={`card ${styles.infoCard}`}>
                <h3 className={styles.infoHeading}>Direct Contact</h3>
                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>✉</span>
                    <div>
                      <p className={styles.infoLabel}>Email</p>
                      <a href="mailto:info@biostatcore.com" className={styles.infoValue}>info@biostatcore.com</a>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📍</span>
                    <div>
                      <p className={styles.infoLabel}>Location</p>
                      <p className={styles.infoValue}>United States</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🌐</span>
                    <div>
                      <p className={styles.infoLabel}>LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/company/111959091/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.infoValue}
                      >
                        linkedin.com/company/111959091
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`card ${styles.infoCard}`}>
                <h3 className={styles.infoHeading}>Global Coverage</h3>
                <p className={styles.infoText}>
                  Biostat Core is the U.S. representative of Meta Clinical Technology, with teams
                  across the United States, China, Japan, Australia, and Europe. We support
                  submissions to the FDA, EMA, NMPA, and TGA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
