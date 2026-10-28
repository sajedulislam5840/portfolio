export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'AZS: The Catalyst — EdTech Ecosystem',
    description: 'A production-ready EdTech platform unifying curriculum sequencing, batch management, and subscription tracking. Features an integrated conversational AI tutoring assistant for complex STEM problem-solving.',
    tags: ['Next.js', 'FastAPI', 'Neon PostgreSQL', 'Tailwind CSS', 'AI'],
    githubUrl: 'https://github.com/sajedulislam5840',
    liveUrl: 'https://vercel.com',
    featured: true,
  },
  {
    title: 'Retail Intelligence Engine',
    description: 'An enterprise multi-source ETL analytics pipeline. Converts messy retail transaction logs into a clean, audited Raw → Silver → Gold Medallion architecture powering executive analytics dashboards.',
    tags: ['Python', 'Pandas', 'Medallion ETL', 'Data Validation', 'Data Engineering'],
    githubUrl: 'https://github.com/sajedulislam5840',
    featured: true,
  },
  {
    title: 'Career Switch Prediction System',
    description: 'End-to-end classification pipeline addressing 74.8%/25.2% target class imbalance via class-weighted loss. Evaluated across 5,000 professional profiles using Stratified 5-Fold cross-validation (ROC-AUC: 0.716).',
    tags: ['Python', 'Scikit-Learn', 'MLP Classifier', 'Stratified CV', 'Machine Learning'],
    githubUrl: 'https://github.com/sajedulislam5840',
    featured: true,
  },
  {
    title: 'SparkEnergies — Utility Billing System',
    description: 'A centralized utility billing engine designed on an ER model normalized to 3NF. Built with double-entry transactional safety for prepaid balances and dynamic 6-month usage analytics.',
    tags: ['PHP', 'MySQL', '3NF Normalization', 'Database Systems', 'ACID Compliance'],
    githubUrl: 'https://github.com/sajedulislam5840',
    featured: true,
  },
];
