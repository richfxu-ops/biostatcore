import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Expert perspectives on biostatistics, statistical programming, data management, and regulatory submissions from the Biostat Core team.',
};

const categories = ['All', 'Biostatistics', 'Statistical Programming', 'Data Management', 'Regulatory', 'Industry'];

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Insights</h1>
          <p className={styles.heroSubhead}>
            Expert perspectives on biostatistics, regulatory submissions, and clinical data science.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.categories}>
            {categories.map(cat => (
              <span key={cat} className={`${styles.catBtn} ${cat === 'All' ? styles.catActive : ''}`}>
                {cat}
              </span>
            ))}
          </div>

          <div className={styles.grid}>
            {posts.map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className={`card ${styles.postCard}`}>
                <span className={styles.category}>{post.category}</span>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postDate}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <span className="text-link" style={{ marginTop: 'auto' }}>Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
