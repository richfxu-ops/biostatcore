import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
  title: 'Biostatistics',
  description: 'End-to-end biostatistics services for clinical trials — from study design through regulatory submission to the FDA, EMA, NMPA, and TGA.',
};

export default function BiostatisticsPage() {
  return (
    <ServiceLayout
      name="Biostatistics"
      tagline="End-to-end statistical support for clinical trials, from initial study design through final regulatory submission."
      intro="Our biostatistics team provides comprehensive statistical support built to meet the standards of the FDA, EMA, NMPA, and TGA. Every deliverable — from Statistical Analysis Plans to final Clinical Study Reports — is designed to withstand regulatory scrutiny and stand up to peer review."
      capabilities={[
        {
          title: 'Study Design and Planning',
          description: 'We collaborate with your medical and clinical teams on protocol development, sample size and power calculations, randomization strategy, and endpoint selection to ensure your trial is statistically sound from day one.',
        },
        {
          title: 'Statistical Analysis Plans (SAP)',
          description: 'Our SAPs are comprehensive roadmaps that include pre-specified analyses, handling of missing data, multiplicity adjustments, and Mock Tables, Listings, and Figures (TLFs) so there are no surprises at the analysis stage.',
        },
        {
          title: 'CDISC Implementation',
          description: 'We convert raw clinical data into fully compliant SDTM and ADaM datasets, ensuring traceability and consistency across your entire submission package.',
        },
        {
          title: 'Tables, Listings, and Figures (TLFs)',
          description: 'We produce high-fidelity TLFs for Clinical Study Reports (CSRs), interim analyses, and Data Monitoring Committee (DMC) reviews, all validated through our independent QC process.',
        },
        {
          title: 'Statistical Consulting',
          description: 'Beyond execution, our senior biostatisticians serve as strategic advisors — helping you navigate complex adaptive designs, Bayesian approaches, non-inferiority trials, and multi-regional regulatory requirements.',
        },
      ]}
      scopeItems={[
        'Protocol writing and review (statistical sections)',
        'Statistical consulting and sample size calculation',
        'Randomization design',
        'CRF review and data validation plan review',
        'SAP and Statistical Analysis Report (SAR) development',
        'Statistical analysis and QC/review',
        'Clinical Study Report (CSR) support',
        'Data Monitoring Committee (DMC) statistical support',
      ]}
    />
  );
}
