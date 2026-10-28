export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  category: "Technical" | "Leadership";
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    title: "Complete Web Development & Problem Solving",
    issuer: "Programming Hero",
    date: "2026",
    category: "Technical",
  },
  {
    title: "Python Essentials & Data Science",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "Technical",
  },
  {
    title: "Leadership & Discipline Distinction",
    issuer: "Bangladesh National Cadet Corps (BNCC)",
    date: "2024",
    category: "Leadership",
  },
];
