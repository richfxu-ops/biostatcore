import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Team',
  description: "Meet Biostat Core's leadership team — decades of combined experience in biostatistics, clinical data management, and regulatory submissions.",
};

const team = [
  {
    name: 'Daniel Lu, Ph.D.',
    title: 'Chairman',
    photo: '/team/daniel_lu.jpg',
    bio: 'Dr. Lu has over 20 years of experience at Novartis, Sanofi, Pfizer, Medidata and Johnson and Johnson. He is also a core expert of the NMPA-CDE Clinical Data Standardization Group and a visiting professor of the NMPA Advanced Training Institute.',
  },
  {
    name: 'Hualong Sun, Ph.D.',
    title: 'Chief Strategy Officer',
    photo: '/team/hualong_sun.jpg',
    bio: 'Dr. Sun has over 20 years of industry experience serving in roles including data management, project leadership and biostatistics. He has worked at Merck Serono and Parexel and is a Visiting Professor at China Pharmaceutical University.',
  },
  {
    name: 'Bob Yan, Ph.D.',
    title: 'Senior Vice President',
    photo: '/team/bob_yan.jpg',
    bio: 'Dr. Yan has over 25 years of biostatistics experience and 20 years of team management experience. He has led teams at Abbott, Astellas, Parexel and Sanofi.',
  },
  {
    name: 'Yuqing Dai, Ph.D.',
    title: 'Senior Vice President',
    photo: '/team/yuqing_dai.jpg',
    bio: 'Dr. Dai has over 20 years of experience working on drug clinical trials and medical devices. He has served at UBI, Medtronic, United Health Group and i3 Statprobe.',
  },
];

export default function OurTeamPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>About</p>
          <h1 className={styles.heroTitle}>Our Team</h1>
          <p className={styles.heroSubhead}>
            Biostat Core&apos;s leadership team brings decades of combined experience in
            biostatistics, clinical data management, and regulatory submissions across global markets.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.teamGrid}>
            {team.map(member => (
              <div key={member.name} className={`card ${styles.memberCard}`}>
                <div className={styles.photoWrapper}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={200}
                    className={styles.photo}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberTitle}>{member.title}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
