/** Portfolio content grounded in Venkat Ramana Nemani's résumé. */
export const profile = {
  fullName: 'Venkat Ramana Nemani',
  name: 'Venkat Ramana',
  first: 'Venkat',
  email: 'venkata.nemani99@gmail.com',
  location: 'Hyderabad, Telangana, India',
  timezone: 'Asia/Kolkata',
  links: {
    linkedin: 'https://linkedin.com/in/venkat-ramana-nemani',
    github: 'https://github.com/venkat5203',
  },
  resume: '/assets/Venkat_Nemani_Resume.pdf',
  availability: 'Open to Data Analyst opportunities',
  roles: ['Data Analyst', 'SQL & BI Reporting', 'Data Quality Analyst', 'Operations Analytics'],
  interests: ['Data Quality', 'Business Intelligence', 'Operations Analytics'],
};

export const stats = [
  { value: 2.5, decimals: 1, suffix: '+', label: 'Years of professional experience' },
  { value: 2, decimals: 0, suffix: '', label: 'Live portfolio applications' },
];

export const education = [
  { school: 'MLR Institute of Technology and Management', place: 'Hyderabad', degree: 'Bachelor of Engineering, Mechanical Engineering', period: 'Course period: 2016–2020 · Degree completed 2024', score: '' },
];

export type SkillCategory = { id: string; index: string; title: string; blurb: string; skills: string[] };
export const skillCategories: SkillCategory[] = [
  { id: 'sql', index: '01', title: 'SQL & Data Analysis', blurb: 'Querying, validating and investigating structured data to surface patterns, discrepancies and operational insights.', skills: ['SQL', 'Joins', 'CTEs', 'Window Functions', 'Subqueries', 'Trend Analysis', 'Data Validation'] },
  { id: 'bi', index: '02', title: 'BI & Reporting', blurb: 'Creating KPI reports and dashboards that make operational performance easier to monitor.', skills: ['Power BI', 'Tableau (working knowledge)', 'Excel Dashboards', 'Pivot Tables', 'Data Visualization'] },
  { id: 'transform', index: '03', title: 'Data Transformation', blurb: 'Preparing, cleaning and reconciling data for analysis and reliable reporting.', skills: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Preparation', 'Reconciliation', 'Excel Automation'] },
  { id: 'ops', index: '04', title: 'Operations Analytics', blurb: 'Tracking performance, quality and workflow health across high-volume operational processes.', skills: ['SLA', 'Turnaround Time', 'Throughput', 'Accuracy', 'Exception Tracking', 'Root-Cause Analysis'] },
  { id: 'db', index: '05', title: 'Data & Databases', blurb: 'Understanding relational data, relationships and business-rule-based validation.', skills: ['Relational Databases', 'Data Models', 'SQL', 'Business Rules'] },
  { id: 'tools', index: '06', title: 'Tools', blurb: 'Tools used for analysis, reporting and organizing operational data.', skills: ['Excel', 'Power BI', 'Tableau', 'Python', 'SQL'] },
];
export const fundamentals = ['SQL', 'Data Cleaning', 'Data Validation', 'Excel', 'Python', 'Power BI', 'Statistics'];
export type Metric = { value: string; label: string };
export type Project = { id: string; index: string; title: string; year: string; kind: string; summary: string; stack: string[]; contribution: string[]; features: string[]; metrics: Metric[]; github?: string; live?: string; motif: 'scan' | 'flow' | 'tenants' };
export const projects: Project[] = [
  {
    id: 'real-retail-data-quality', index: '01', title: '2025–2026 Retail Sales & Inventory Data Quality Analytics', year: '2025–2026 observed data', kind: 'Data Analytics · Data Quality · Business Intelligence',
    summary: 'Built a reproducible Python data-quality pipeline using Mendeley Data’s Retail Transactions and Stocks dataset. The verified sales observations run from 1 June 2025 to 24 April 2026 and cover 125,751 sales rows across 40 stores and 2,326 SKUs, alongside 284,755 inventory records. The pipeline checks missing values, duplicates, invalid dates, return activity and stock data.',
    stack: ['Python', 'Pandas', 'SQL', 'SQLite', 'React', 'Vite', 'Recharts'],
    contribution: [
      'Retrieved and SHA-256 verified the sales and inventory source files, and measured the transaction and stock date ranges directly from their date fields.',
      'Audited missing identifiers and values, duplicate rows, date validity, negative quantities and sales amounts, while retaining return activity for separate review.',
      'Built SQL-ready SQLite tables and an interactive dashboard for monthly sales, store performance, product sales, channels, inventory snapshots and data-quality findings.'
    ],
    features: ['125,751 sales rows · 284,755 inventory rows', '40 stores · 2,326 SKUs', 'Observed dates: Jun 2025 – Apr 2026', 'Sales, returns, inventory and data-quality audit'],
    metrics: [{ value: '125,751', label: 'Observed sales rows' }, { value: '284,755', label: 'Inventory rows' }, { value: '40', label: 'Retail stores' }, { value: '2,326', label: 'SKUs' }],
    github: 'https://github.com/venkat5203/real-world-retail-data-quality-analytics',
    live: 'https://real-retail-data-quality-analytics.vercel.app/',
    motif: 'scan'
  },
  {
    id: 'retailrocket-recommender', index: '02', title: '2025 Online Shopping Session Recommender (OPeRA)', year: '2025 observed data', kind: 'Recommendation Systems · Session Behaviour · Content Similarity',
    summary: 'Built an interactive product recommendation demo using OPeRA, a real-user online-shopping behaviour dataset collected from 24 March to 8 May 2025. It contains 28,904 observed actions across 692 sessions, with 652 products carrying ASIN metadata. The app combines session co-visitation with TF-IDF/cosine product similarity and MMR diversity reranking.',
    stack: ['Python', 'Pandas', 'PyArrow', 'scikit-learn', 'TF-IDF', 'Cosine Similarity', 'MMR'],
    contribution: [
      'Parsed action-level session data and product metadata from OPeRA Parquet files, preserving the actual 2025 timestamps and source attribution.',
      'Built product-title TF-IDF representations, cosine-similarity recommendations, session co-visitation and MMR reranking for product and session exploration.',
      'Added chronological session holdout checks and documented that the small number of eligible next-product targets is insufficient for reliable offline accuracy claims.'
    ],
    features: ['28,904 real shopping actions · 692 sessions', '652 products with ASIN metadata', 'Observed dates: Mar–May 2025', 'Session co-visitation · TF-IDF · cosine similarity · MMR'],
    metrics: [{ value: '28,904', label: 'Observed shopping actions' }, { value: '692', label: 'Shopping sessions' }, { value: '652', label: 'Products with metadata' }, { value: '2025', label: 'Actual event year' }],
    github: 'https://github.com/venkat5203/retailrocket-recommender',
    live: 'https://retailrocket-recommender-retailrock.vercel.app/',
    motif: 'tenants'
  },
];
export type TimelineItem = { period: string; title: string; org: string; place?: string; kind: string; points: string[] };
export const timeline: TimelineItem[] = [
  { period: 'Apr 2024 — Nov 2026', title: 'Analyst – Data Operations & Reporting', org: 'Ardem Data Services Pvt. Ltd.', place: 'Hyderabad', kind: 'Work', points: ['Validated and analyzed 60+ records daily using Excel, business rules and structured investigation.', 'Monitored SLA, turnaround time, throughput, accuracy and exception metrics; reconciled results against business requirements.', 'Performed root-cause analysis across document workflows and prepared KPI reports and reconciliation frameworks for quality monitoring.'] },
  { period: 'Oct 2023 — Jan 2024', title: 'GO-AI Associate – Data Annotation & Quality', org: 'Amazon Development Centre India Pvt. Ltd.', place: 'Hyderabad', kind: 'Work', points: ['Reviewed high-volume content data against quality rules and reported 95% accuracy against internal QA benchmarks.', 'Identified data discrepancies, edge cases and quality gaps; documented findings to support data consistency and reporting.', 'Worked to strict quality, security and turnaround-time requirements.'] },
  { period: '2016–2020 (course period)', title: 'Bachelor of Engineering, Mechanical Engineering', org: 'MLR Institute of Technology and Management', place: 'Hyderabad', kind: 'Education', points: ['Course period: 2016–2020. Degree requirements were completed and the degree was awarded in 2024 after clearing supplementary examinations.'] },
];
export type Recognition = { title: string; org: string; detail: string; kind: string; link?: string };
export const recognitions: Recognition[] = [
  { title: 'Data & Business Analytics Certification', org: 'Naresh IT', kind: 'Certification', detail: 'Covered Excel, SQL, Python, Power BI/Tableau and Statistics.' },
];
export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [
  { issuer: 'Naresh IT', name: 'Data Analytics & Business Analytics', link: '' },
];
export const navItems = [ { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'expertise', label: 'Expertise' }, { id: 'projects', label: 'Projects' }, { id: 'experience', label: 'Experience' }, { id: 'contact', label: 'Contact' } ];
export function projectsUsing(skill: string): string[] {
  const s = skill.toLowerCase().replace(/\.js$/, '');
  return projects.filter((p) => p.stack.some((t) => t.toLowerCase().replace(/\.js$/, '') === s)).map((p) => p.title);
}
