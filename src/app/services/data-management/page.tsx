import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
  title: 'Data Management',
  description: 'Full clinical data management lifecycle — EDC setup, CRF design, data cleaning, medical coding, and database lock.',
};

export default function DataManagementPage() {
  return (
    <ServiceLayout
      name="Data Management"
      tagline="From database design through final data lock — delivering clean, audit-ready clinical data."
      intro="Clean, well-structured data is the foundation of every credible clinical trial. Our data management team handles the full lifecycle — from database design through final data lock — ensuring your study data is accurate, complete, and audit-ready."
      capabilities={[
        {
          title: 'EDC System Setup and Configuration',
          description: 'We design and build electronic data capture (EDC) databases tailored to your study protocol, including edit check programming, data validation rules, and user acceptance testing.',
        },
        {
          title: 'CRF Design',
          description: 'Our case report form (CRF) designs balance clinical needs with data management efficiency, capturing the right data in the right format from the start.',
        },
        {
          title: 'Data Cleaning and Reconciliation',
          description: 'We run systematic data reviews, generate and resolve queries, and reconcile data across sources (EDC, central lab, ePRO, imaging) to deliver a clean, locked dataset ready for analysis.',
        },
        {
          title: 'Medical Coding',
          description: 'We code adverse events, medical history, and concomitant medications using MedDRA and WHODrug dictionaries, applying consistent coding conventions across your program.',
        },
        {
          title: 'Database Lock and Archival',
          description: 'Our team manages the database lock process with full audit trail documentation, and prepares archived datasets for long-term regulatory retention.',
        },
      ]}
      scopeItems={[
        'EDC system design and configuration',
        'CRF development and review',
        'Data management plan (DMP) development',
        'Edit check programming and validation',
        'User acceptance testing (UAT)',
        'Data query management',
        'Central lab data reconciliation',
        'ePRO and imaging data reconciliation',
        'MedDRA adverse event coding',
        'WHODrug medication coding',
        'Database lock coordination',
        'Data archival and regulatory retention',
      ]}
    />
  );
}
