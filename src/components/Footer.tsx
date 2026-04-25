import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.col}>
          <div className={styles.logo}>
            Biostat<span className={styles.logoAccent}>Core</span>
          </div>
          <p className={styles.tagline}>
            Biostatistics expertise for global clinical programs.
          </p>
          <p className={styles.copy}>© {new Date().getFullYear()} Biostat Core. All rights reserved.</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHeading}>Quick Links</h4>
          <nav className={styles.colLinks}>
            <Link href="/services/biostatistics">Biostatistics</Link>
            <Link href="/services/statistical-programming">Statistical Programming</Link>
            <Link href="/services/data-management">Data Management</Link>
            <Link href="/about/our-story">Our Story</Link>
            <Link href="/about/our-team">Our Team</Link>
            <Link href="/about/why-biostat-core">Why Biostat Core</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHeading}>Contact</h4>
          <div className={styles.contactList}>
            <a href="mailto:info@biostatcore.com">info@biostatcore.com</a>
            <span>United States</span>
            <a
              href="https://www.linkedin.com/company/biostatcore"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
