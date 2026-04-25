import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
  title: 'Statistical Programming',
  description: 'CDISC-compliant SDTM and ADaM datasets, validated TLFs, and complete submission-ready data packages built in SAS and R.',
};

export default function StatisticalProgrammingPage() {
  return (
    <ServiceLayout
      name="Statistical Programming"
      tagline="Validated, submission-ready datasets and outputs built to meet the expectations of global regulatory agencies."
      intro="Our statistical programming team transforms clinical data into validated, submission-ready datasets and outputs. We work across SAS and R to deliver CDISC-compliant data packages that meet the expectations of the FDA, EMA, NMPA, and TGA."
      capabilities={[
        {
          title: 'SDTM and ADaM Dataset Development',
          description: 'We map raw clinical data to Study Data Tabulation Model (SDTM) and Analysis Data Model (ADaM) standards, maintaining full traceability from source to submission.',
        },
        {
          title: 'Tables, Listings, and Figures',
          description: 'Our programmers produce validated TLFs for Clinical Study Reports, interim analyses, and regulatory briefing documents. Every output goes through independent double programming or QC review.',
        },
        {
          title: 'Define.xml and Reviewer\'s Guides',
          description: 'We prepare complete define.xml files and Reviewer\'s Guides for eCTD submissions, making it easy for regulatory reviewers to navigate your data package.',
        },
        {
          title: 'Integrated Submission Packages',
          description: 'For programs with multiple studies, we create Integrated Summary of Safety (ISS) and Integrated Summary of Efficacy (ISE) datasets and outputs, pooling data across trials for a complete regulatory picture.',
        },
        {
          title: 'Legacy Data Conversion',
          description: 'If your program includes older studies with non-CDISC data, we handle the conversion to current standards so your entire submission package is consistent and compliant.',
        },
      ]}
      scopeItems={[
        'SDTM dataset development and mapping',
        'ADaM dataset development',
        'Table, listing, and figure (TLF) programming',
        'Independent QC and double programming',
        'Define.xml creation',
        'Reviewer\'s Guide preparation',
        'Integrated Summary of Safety (ISS) programming',
        'Integrated Summary of Efficacy (ISE) programming',
        'Legacy data conversion to CDISC standards',
        'SAS and R programming',
        'eCTD submission package preparation',
        'Pinnacle 21 validation and compliance checks',
      ]}
    />
  );
}
