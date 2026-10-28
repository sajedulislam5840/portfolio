export interface DocumentItem {
  title: string;
  category: "BNCC & Leadership" | "Sports & Athletics" | "Technical";
  issuer: string;
  fileUrl: string;
}

export const CERTIFICATES_DATA: DocumentItem[] = [
  {
    title: "BNCC Platoon Cadetship",
    category: "BNCC & Leadership",
    issuer: "Govt. Science College BNCC Platoon",
    fileUrl: "/documents/bncc-certificate.pdf",
  },
  {
    title: "BNCC Battalion Camping 2022",
    category: "BNCC & Leadership",
    issuer: "Bangladesh National Cadet Corps",
    fileUrl: "/documents/camp-certificate.pdf",
  },
  {
    title: "BNCC Navy Certificate",
    category: "BNCC & Leadership",
    issuer: "Bangladesh National Cadet Corps",
    fileUrl: "/documents/bncc-navy.pdf",
  },
  {
    title: "BNCC Graphics Design",
    category: "BNCC & Leadership",
    issuer: "BNCC Wing",
    fileUrl: "/documents/bncc-graphics-design.pdf",
  },
  {
    title: "100-Meter Sprint Distinction",
    category: "Sports & Athletics",
    issuer: "Annual College Athletics",
    fileUrl: "/documents/100-meter-run.pdf",
  },
  {
    title: "BNCC Sprint Competition",
    category: "Sports & Athletics",
    issuer: "BNCC Athletic Meets",
    fileUrl: "/documents/bncc-sprint.pdf",
  },
  {
    title: "High Jump Distinction",
    category: "Sports & Athletics",
    issuer: "Annual College Athletics",
    fileUrl: "/documents/high-jump.pdf",
  },
  {
    title: "Web Development Certification",
    category: "Technical",
    issuer: "Professional Coding Credentials",
    fileUrl: "/documents/web-development.pdf",
  },
];
