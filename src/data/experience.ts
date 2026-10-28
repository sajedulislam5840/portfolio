export interface Experience {
  title: string;
  company: string;
  location: string;
  range: string;
  responsibilities: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  verifyUrl?: string;
}

export const experiences: Experience[] = [
  {
    title: 'Data Preparation Specialist Intern',
    company: 'DataSynthis',
    location: 'Remote',
    range: 'Internship',
    responsibilities: [
      'Engineered high-throughput data validation, schema auditing, and Medallion (Raw-Silver-Gold) deduplication pipelines.',
      'Ensured zero-loss reporting integrity and transformed raw datasets into clean, analytics-ready engines for downstream BI.',
    ],
    skills: ['Medallion ETL', 'Data Validation', 'Schema Auditing', 'Python', 'Pandas'],
  },
];

export const educationList: Education[] = [
  {
    degree: 'BSc in Computer Science and Engineering',
    institution: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    period: 'Undergraduate',
    coursework: [
      'Artificial Intelligence',
      'Operating Systems',
      'Computer Architecture (RISC-V)',
      'Numerical Methods',
      'Database Systems',
      'Digital Logic Design',
    ],
  },
];

export const skillCategories = {
  programmingLanguages: ['Python', 'SQL', 'JavaScript', 'Java', 'C++', 'PHP'],
  dataAndML: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Stratified CV'],
  backendAndTools: ['FastAPI', 'Next.js / React', 'PostgreSQL', 'MySQL', '3NF Normalization', 'Git / GitHub', 'Tailwind CSS'],
};

export const certifications: Certification[] = [
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy / OpenEDG',
  },
  {
    name: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
  },
];
