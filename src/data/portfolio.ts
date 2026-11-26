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
  { school: 'MLR Institute of Technology and Management', place: 'Hyderabad', degree: 'Bachelor of Engineering, Mechanical Engineering', period: 'Completed 2024', score: '' },
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
    id: 'real-retail-data-quality', index: '01', title: 'Real-World Retail Data Quality & Analytics', year: 'Historical dataset · 2010–2011', kind: 'Data Analytics · Data Quality · Business Intelligence',
    summary: 'Built a reproducible Python quality-audit pipeline using the UCI Online Retail transaction dataset. The source contains 541,909 real historical invoice-line records dated December 2010 to December 2011. The project audits missing values, exact duplicates, cancellation invoices, non-positive quantities and prices, then creates a cleaned analysis copy and SQL-ready outputs.',
    stack: ['Python', 'Pandas', 'SQL', 'SQLite', 'React', 'Vite', 'Recharts'],
    contribution: [
      'Downloaded the dataset from the UCI Machine Learning Repository, recorded its SHA-256 hash, and checked its expected schema and reference row count.',
      'Audited missing fields, exact duplicate rows, non-positive quantities and unit prices, and cancellation / credit invoices.',
      'Built a separate cleaned transaction dataset, SQLite analysis database, SQL examples and an interactive business-quality dashboard.'
    ],
    features: ['541,909 historical transaction rows', '5,268 exact duplicate rows flagged', 'Missing CustomerID and cancellation audit', 'Monthly revenue and country analysis'],
    metrics: [{ value: '541,909', label: 'Source transaction rows' }, { value: '5,268', label: 'Exact duplicate rows flagged' }, { value: '524,878', label: 'Clean positive-sale rows' }, { value: '£10.64M', label: 'Clean positive-sales revenue' }],
    github: 'https://github.com/venkat5203/real-world-retail-data-quality-analytics',
    live: 'https://real-retail-data-quality-analytics.vercel.app/',
    motif: 'scan'
  },
  {
    id: 'retailrocket-recommender', index: '02', title: 'RetailRocket E-commerce Recommendation System', year: 'Historical dataset · 2015', kind: 'Recommendation Systems · Collaborative Filtering · Ranking Evaluation',
    summary: 'Built a recommendation workflow using the authentic RetailRocket e-commerce behavioural dataset: 2.76 million view, add-to-cart and transaction events from May to September 2015. Compared popularity, item-item collaborative filtering (Item-KNN) and latent-factor SVD using a time-based offline evaluation split.',
    stack: ['Python', 'Pandas', 'NumPy', 'SciPy', 'scikit-learn', 'Item-KNN', 'Truncated SVD'],
    contribution: [
      'Prepared visitor-item interactions from view, add-to-cart and transaction events, with stronger weights for higher-intent events.',
      'Applied chronological data splitting and interaction filtering to reduce future-data leakage in offline evaluation.',
      'Compared popularity, Item-KNN and SVD models using Precision@K, Recall@K, HitRate@K, NDCG@K, MAP@K and catalogue coverage; added a visitor recommendation explorer.'
    ],
    features: ['2,756,101 behavioural events', '1,407,580 visitors and 235,061 items', 'Popularity, Item-KNN and SVD models', 'Time-based offline ranking evaluation'],
    metrics: [{ value: '2.76M', label: 'Behavioural events' }, { value: '1.41M', label: 'Visitors' }, { value: '0.0161', label: 'Item-KNN NDCG@10' }, { value: '0.0225', label: 'SVD Recall@10' }],
    github: 'https://github.com/venkat5203/retailrocket-recommender',
    live: 'https://retailrocket-recommender-retailrock.vercel.app/',
    motif: 'tenants'
  },
];
export type TimelineItem = { period: string; title: string; org: string; place?: string; kind: string; points: string[] };
export const timeline: TimelineItem[] = [
  { period: 'Apr 2024 — Nov 2026', title: 'Analyst – Data Operations & Reporting', org: 'Ardem Data Services Pvt. Ltd.', place: 'Hyderabad', kind: 'Work', points: ['Validated and analyzed 60+ records daily using Excel, business rules and structured investigation.', 'Monitored SLA, turnaround time, throughput, accuracy and exception metrics; reconciled results against business requirements.', 'Performed root-cause analysis across document workflows and prepared KPI reports and reconciliation frameworks for quality monitoring.'] },
  { period: 'Oct 2023 — Jan 2024', title: 'GO-AI Associate – Data Annotation & Quality', org: 'Amazon Development Centre India Pvt. Ltd.', place: 'Hyderabad', kind: 'Work', points: ['Reviewed high-volume content data against quality rules and reported 95% accuracy against internal QA benchmarks.', 'Identified data discrepancies, edge cases and quality gaps; documented findings to support data consistency and reporting.', 'Worked to strict quality, security and turnaround-time requirements.'] },
  { period: '2024', title: 'Bachelor of Engineering, Mechanical Engineering', org: 'MLR Institute of Technology and Management', place: 'Hyderabad', kind: 'Education', points: ['Completed Bachelor of Engineering in Mechanical Engineering.'] },
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
