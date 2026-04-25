'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

const servicesLinks = [
  { label: 'Biostatistics', href: '/services/biostatistics' },
  { label: 'Statistical Programming', href: '/services/statistical-programming' },
  { label: 'Data Management', href: '/services/data-management' },
];

const aboutLinks = [
  { label: 'Our Story', href: '/about/our-story' },
  { label: 'Our Team', href: '/about/our-team' },
  { label: 'Why Biostat Core', href: '/about/why-biostat-core' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Biostat<span className={styles.logoAccent}>Core</span></span>
          </Link>

          <div className={styles.links}>
            <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Home</Link>

            <div
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`${styles.link} ${styles.dropbtn} ${isActive('/services') ? styles.active : ''}`}>
                Services <span className={styles.chevron}>▾</span>
              </button>
              {servicesOpen && (
                <div className={styles.dropMenu}>
                  {servicesLinks.map(l => (
                    <Link key={l.href} href={l.href} className={styles.dropItem}>{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className={styles.dropdown}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className={`${styles.link} ${styles.dropbtn} ${isActive('/about') ? styles.active : ''}`}>
                About <span className={styles.chevron}>▾</span>
              </button>
              {aboutOpen && (
                <div className={styles.dropMenu}>
                  {aboutLinks.map(l => (
                    <Link key={l.href} href={l.href} className={styles.dropItem}>{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/insights" className={`${styles.link} ${isActive('/insights') ? styles.active : ''}`}>Insights</Link>
            <Link href="/contact" className={`${styles.link} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
          </div>

          <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>Get in Touch</Link>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileLinks}>
          <Link href="/" className={styles.mobileLink}>Home</Link>

          <div className={styles.mobileGroup}>
            <button className={styles.mobileGroupLabel} onClick={() => setServicesOpen(o => !o)}>
              Services <span>{servicesOpen ? '−' : '+'}</span>
            </button>
            {servicesOpen && servicesLinks.map(l => (
              <Link key={l.href} href={l.href} className={styles.mobileSubLink}>{l.label}</Link>
            ))}
          </div>

          <div className={styles.mobileGroup}>
            <button className={styles.mobileGroupLabel} onClick={() => setAboutOpen(o => !o)}>
              About <span>{aboutOpen ? '−' : '+'}</span>
            </button>
            {aboutOpen && aboutLinks.map(l => (
              <Link key={l.href} href={l.href} className={styles.mobileSubLink}>{l.label}</Link>
            ))}
          </div>

          <Link href="/insights" className={styles.mobileLink}>Insights</Link>
          <Link href="/contact" className={styles.mobileLink}>Contact</Link>
        </div>
        <Link href="/contact" className={`btn-primary ${styles.mobileCta}`}>Get in Touch</Link>
      </div>

      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}
    </>
  );
}
