export type TeamMember = { name: string; role: string; location?: string; skills?: string[]; credentials?: string[]; links?: { label: string; href: string }[]; image?: string; pending?: boolean };
export type Opening = { role: string; description: string };

export const team: TeamMember[] = [
  { name: "Abdus Sami", role: "Backend Engineer", skills: ["Django", "DRF", "PostgreSQL", "Docker", "AWS"], links: [{ label: "Portfolio", href: "https://sami.asia" }], image: "/images/team/sami.jpg" },
  { name: "Nafis Sahriar Redwan", role: "Full Stack Dev", skills: ["Next.js", "React", "Node", "MongoDB"], links: [{ label: "Portfolio", href: "https://nafissahriar.me" }], image: "/images/team/nafis.jpg" },
  { name: "Ebnul Hasan Mahi", role: "Full Stack Dev", skills: ["FastAPI", "React", "Java", "PostgreSQL"], links: [{ label: "Portfolio", href: "https://ebnulhasanmahi.me" }], image: "/images/team/mahi.jpg" },
  { name: "Ahmmad Ishtiak Alam Efty", role: "Frontend Dev", pending: true, image: "/images/team/efty.jpg" },
  { name: "A. B. M. Saiem", role: "Frontend Dev", pending: true, image: "/images/team/saiem.jpg" },
  { name: "Mr. Cala", role: "Frontend Engineer", pending: true, image: "/images/team/cala.jpg" },
  { name: "Sadman Tanim Sowad", role: "Software Engineer & Security Researcher", location: "Savar", credentials: ["eJPT", "CAPenX", "Bugcrowd: spectreghost"], links: [{ label: "Portfolio", href: "https://sadman-tanim-sowad-protfolio.netlify.app" }, { label: "LinkedIn", href: "https://linkedin.com/in/sadman-tanim-sowad" }], image: "/images/team/sadman.jpg" }
];

export const openings: Opening[] = [
  { role: "DevOps / Cloud Engineer", description: "Keeping deployments boring and uptime unremarkable." },
  { role: "UI/UX Designer", description: "Turning requirements into interfaces people don't have to think about." },
  { role: "QA / Test Engineer", description: "Catching what the rest of the team ships by accident." },
  { role: "Mobile Developer", description: "Native or cross-platform builds for clients who need to be in a pocket." },
  { role: "Data Engineer", description: "Pipelines and schemas for products that outgrow a single database." },
  { role: "Project / Delivery Lead", description: "Keeping scope, timeline, and client expectations in the same room." },
  { role: "Security Researcher", description: "A second set of eyes alongside Sadman on every audit." }
];
