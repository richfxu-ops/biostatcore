import Link from 'next/link';
import Image from 'next/image';
import StatsCounter from '@/components/StatsCounter';
import styles from './page.module.css';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 26 L9 18 L15 22 L21 12 L28 16" />
        <circle cx="9" cy="18" r="2.5" />
        <circle cx="15" cy="22" r="2.5" />
        <circle cx="21" cy="12" r="2.5" />
      </svg>
    ),
    title: 'Biostatistics',
    description:
      'From study design and power calculations through final CSR reporting, our biostatisticians deliver the analytical rigor regulators expect.',
    href: '/services/biostatistics',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="11" height="11" rx="2" />
        <rect x="18" y="3" width="11" height="11" rx="2" />
        <rect x="3" y="18" width="11" height="11" rx="2" />
        <rect x="18" y="18" width="11" height="11" rx="2" />
      </svg>
    ),
    title: 'Statistical Programming',
    description:
      'CDISC-compliant SDTM and ADaM datasets, validated TLFs, and submission-ready data packages built in SAS and R.',
    href: '/services/statistical-programming',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="10" rx="12" ry="5" />
        <path d="M4 10 C4 16 28 16 28 10" />
        <path d="M4 10 C4 22 28 22 28 10" />
      </svg>
    ),
    title: 'Data Management',
    description:
      'EDC setup, CRF design, data cleaning, medical coding, and database lock — everything needed to deliver audit-ready clinical data.',
    href: '/services/data-management',
  },
];

const partners = [
  'Abbott', 'Astellas', 'AstraZeneca', 'Bayer', 'Eisai',
  'Ferring', 'GSK', 'Illumina', 'Ipsen', 'JohnsonJohnson',
  'KyowaKirin', 'MerckSerono', 'Novartis', 'Roche', 'Takeda',
];

const regions = [
  { code: 'FDA', label: 'United States' },
  { code: 'EMA', label: 'Europe' },
  { code: 'NMPA', label: 'China' },
  { code: 'TGA', label: 'Australia' },
];

const blogPosts = [
  {
    slug: 'ich-e9-estimands',
    category: 'Biostatistics',
    title: 'Understanding ICH E9(R1) Estimands in Clinical Trials',
    date: 'April 10, 2026',
    excerpt: "The estimand framework transforms how we define and communicate trial objectives. Here's what every clinical team needs to know.",
  },
  {
    slug: 'fda-submission-package',
    category: 'Regulatory',
    title: '5 Keys to a Successful FDA Submission Package',
    date: 'March 28, 2026',
    excerpt: 'A complete, well-structured submission package can make or break your regulatory review timeline. These five principles guide our approach.',
  },
  {
    slug: 'cdisc-compliance',
    category: 'Statistical Programming',
    title: "CDISC Compliance from Day One: A Programmer's Guide",
    date: 'March 14, 2026',
    excerpt: 'Building CDISC-compliant datasets retroactively is painful and expensive. Here\'s how to bake compliance in from the start.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* A: Hero */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>
              Biostatistics That Move<br />Clinical Programs Forward
            </h1>
            <p className={styles.heroSubhead}>
              From study design through regulatory submission, Biostat Core provides the
              statistical rigor and global expertise your clinical program demands.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/services/biostatistics" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/about/our-team" className="text-link">
                Learn About Our Team →
              </Link>
            </div>
          </div>
          <div className={styles.heroDecor} aria-hidden="true">
            <svg viewBox="0 0 400 400" className={styles.heroSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="160" stroke="#0A4D68" strokeWidth="1" strokeDasharray="6 6" opacity="0.15" />
              <circle cx="200" cy="200" r="110" stroke="#0A4D68" strokeWidth="1" strokeDasharray="4 8" opacity="0.1" />
              <circle cx="200" cy="200" r="60" stroke="#E8913A" strokeWidth="1.5" opacity="0.2" />
              <circle cx="200" cy="200" r="8" fill="#E8913A" opacity="0.3" />
              <circle cx="200" cy="90" r="5" fill="#0A4D68" opacity="0.25" />
              <circle cx="310" cy="200" r="5" fill="#0A4D68" opacity="0.25" />
              <circle cx="200" cy="310" r="5" fill="#0A4D68" opacity="0.25" />
              <circle cx="90" cy="200" r="5" fill="#0A4D68" opacity="0.25" />
              <line x1="200" y1="90" x2="200" y2="200" stroke="#0A4D68" strokeWidth="0.75" opacity="0.2" />
              <line x1="310" y1="200" x2="200" y2="200" stroke="#0A4D68" strokeWidth="0.75" opacity="0.2" />
              <line x1="200" y1="310" x2="200" y2="200" stroke="#0A4D68" strokeWidth="0.75" opacity="0.2" />
              <line x1="90" y1="200" x2="200" y2="200" stroke="#0A4D68" strokeWidth="0.75" opacity="0.2" />
              <circle cx="130" cy="130" r="3" fill="#1A7A5A" opacity="0.3" />
              <circle cx="270" cy="130" r="3" fill="#1A7A5A" opacity="0.3" />
              <circle cx="270" cy="270" r="3" fill="#1A7A5A" opacity="0.3" />
              <circle cx="130" cy="270" r="3" fill="#1A7A5A" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      {/* B: Stats */}
      <section className="section section--alt">
        <div className="container">
          <StatsCounter />
        </div>
      </section>

      {/* C: Services */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-header__accent" />
            <h2>What We Do</h2>
            <p>End-to-end biometrics and clinical data services across the full trial lifecycle.</p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map(s => (
              <div key={s.title} className={`card ${styles.serviceCard}`}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.description}</p>
                <Link href={s.href} className="text-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D: Global Reach */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.globalInner}>
            <div className={styles.globalText}>
              <div className="section-header">
                <span className="section-header__accent" />
                <h2>One Partner. Five Continents. Every Major Regulatory Pathway.</h2>
                <p>
                  As the U.S. arm of Meta Clinical Technology, Biostat Core gives you local
                  partnership backed by a global team of nearly 1,000 professionals. Our teams
                  work across FDA, EMA, NMPA, and TGA submissions, bringing multinational
                  regulatory fluency to every engagement.
                </p>
              </div>
              <div className={styles.regulatoryBadges}>
                {regions.map(r => (
                  <div key={r.code} className={styles.badge}>
                    <span className={styles.badgeCode}>{r.code}</span>
                    <span className={styles.badgeLabel}>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.globalMap} aria-hidden="true">
              <svg viewBox="0 0 480 280" className={styles.mapSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="480" height="280" rx="12" fill="#dce8ef" />
                <circle cx="100" cy="130" r="18" fill="#0A4D68" opacity="0.9" />
                <text x="100" y="135" textAnchor="middle" fontSize="11" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">FDA</text>
                <circle cx="235" cy="105" r="18" fill="#1A7A5A" opacity="0.9" />
                <text x="235" y="110" textAnchor="middle" fontSize="11" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">EMA</text>
                <circle cx="355" cy="115" r="18" fill="#E8913A" opacity="0.9" />
                <text x="355" y="120" textAnchor="middle" fontSize="11" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">NMPA</text>
                <circle cx="400" cy="155" r="18" fill="#5D6D7E" opacity="0.85" />
                <text x="400" y="160" textAnchor="middle" fontSize="11" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">PMDA</text>
                <circle cx="385" cy="215" r="18" fill="#0A4D68" opacity="0.7" />
                <text x="385" y="220" textAnchor="middle" fontSize="11" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">TGA</text>
                <line x1="100" y1="130" x2="235" y2="105" stroke="#0A4D68" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
                <line x1="235" y1="105" x2="355" y2="115" stroke="#0A4D68" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
                <line x1="355" y1="115" x2="400" y2="155" stroke="#0A4D68" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
                <line x1="400" y1="155" x2="385" y2="215" stroke="#0A4D68" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* E: Partner Logos */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-header__accent" />
            <h2>Trusted by Leading Innovators</h2>
          </div>
          <div className={styles.logoGrid}>
            {partners.map(name => (
              <div key={name} className={styles.logoItem}>
                <Image
                  src={`/logos/${name}.png`}
                  alt={name}
                  width={180}
                  height={90}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F: Latest Insights */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-header__accent" />
            <h2>Latest Insights</h2>
          </div>
          <div className={styles.blogGrid}>
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className={`card ${styles.blogCard}`}>
                <span className={styles.blogCategory}>{post.category}</span>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogDate}>{post.date}</p>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <span className="text-link" style={{ marginTop: 'auto' }}>Read more →</span>
              </Link>
            ))}
          </div>
          <div className={styles.blogMore}>
            <Link href="/insights" className="btn-secondary">View All Insights</Link>
          </div>
        </div>
      </section>

      {/* G: Contact CTA */}
      <section className={`section section--dark ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaHeading}>Ready to Discuss Your Next Study?</h2>
          <p className={styles.ctaSub}>Our team responds within one business day.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
