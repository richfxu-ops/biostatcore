import type { Metadata } from 'next';
import Link from 'next/link';
import { getPost, getAllSlugs } from '@/lib/posts';
import styles from './page.module.css';

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Link href="/insights" className={styles.back}>← Back to Insights</Link>
          <span className={styles.category}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.date}>{dateFormatted}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <article
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
            <aside className={styles.sidebar}>
              <div className={`card ${styles.ctaCard}`}>
                <h3 className={styles.ctaTitle}>Discuss Your Project</h3>
                <p className={styles.ctaText}>
                  Have questions about biostatistics or your regulatory submission? Our team is ready to help.
                </p>
                <Link href="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Get in Touch
                </Link>
              </div>
              <div className={`card ${styles.servicesCard}`}>
                <h3 className={styles.ctaTitle}>Our Services</h3>
                <div className={styles.serviceLinks}>
                  <Link href="/services/biostatistics" className="text-link">Biostatistics →</Link>
                  <Link href="/services/statistical-programming" className="text-link">Statistical Programming →</Link>
                  <Link href="/services/data-management" className="text-link">Data Management →</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
