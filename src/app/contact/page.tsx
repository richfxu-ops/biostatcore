import type { Metadata } from 'next';
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
              <form className={styles.form} action="#" method="POST">
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input id="name" name="name" type="text" className={styles.input} placeholder="Jane Smith" required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input id="email" name="email" type="email" className={styles.input} placeholder="jane@company.com" required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="company" className={styles.label}>Company / Organization</label>
                  <input id="company" name="company" type="text" className={styles.input} placeholder="Pharma Co." />
                </div>
                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <select id="subject" name="subject" className={styles.select}>
                    <option value="">Select a topic...</option>
                    <option value="biostatistics">Biostatistics Services</option>
                    <option value="programming">Statistical Programming</option>
                    <option value="data-management">Data Management</option>
                    <option value="partnership">Partnership / FSP</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    rows={6}
                    placeholder="Tell us about your project or study..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '16px', padding: '16px' }}>
                  Send Message
                </button>
                <p className={styles.responseNote}>We typically respond within one business day.</p>
              </form>
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
                        href="https://www.linkedin.com/company/biostatcore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.infoValue}
                      >
                        linkedin.com/company/biostatcore
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
