import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Biostat Core — Biostatistics for Global Clinical Trials',
    template: '%s | Biostat Core',
  },
  description:
    'Biostat Core provides biostatistics, statistical programming, and data management services for clinical trials across FDA, EMA, NMPA, and TGA regulatory pathways.',
  openGraph: {
    siteName: 'Biostat Core',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
