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
    id: 'real-retail-data-quality', index: '01', title: '2026 Retail Product Data Quality & Analytics', year: 'Live project', kind: 'Data Analytics · Data Quality · Business Intelligence',
    summary: 'Built a reproducible Python quality-audit pipeline using Open Food Facts product records reported as modified in 2026. Audits missing product attributes, duplicate barcodes, invalid nutrient values and record completeness. This is product-catalogue data, not sales or transaction data.',
    stack: ['Python', 'Pandas', 'SQL', 'SQLite', 'React', 'Vite', 'Recharts'],
    contribution: [
      'Created a repeatable pipeline that retrieves and hashes a bounded Open Food Facts API snapshot, filters product records by last-modified date from 1 January 2026, and records source metadata.',
      'Applied quality rules for missing names, brands, categories, ingredients and nutrition fields, duplicate barcodes, barcode format and negative nutrient values.',
      'Built SQLite and SQL analysis outputs plus an interactive dashboard for catalogue freshness, completeness, category and brand coverage, recently updated products and quality findings.'
    ],
    features: ['Open Food Facts records updated in 2026', 'Missing-field and barcode audit', 'Nutrition validation and completeness', 'Catalogue freshness dashboard'],
    metrics: [{ value: '2026', label: 'Required product update year' }, { value: 'Python', label: 'Reproducible audit pipeline' }, { value: 'SQLite', label: 'SQL analysis database' }, { value: 'Live', label: 'Interactive dashboard' }],
    github: 'https://github.com/venkat5203/real-world-retail-data-quality-analytics',
    live: 'https://real-retail-data-quality-analytics.vercel.app/',
    motif: 'scan'
  },
  {
    id: 'retailrocket-recommender', index: '02', title: 'Current Product Content-Based Recommendation System', year: 'Live project', kind: 'Recommendation Systems · Content Similarity · Ranking',
    summary: 'Developed a content-based recommendation workflow using Open Food Facts product records reported as modified in 2026. Product names, brands, categories, quantities, ingredients and nutrition grades are converted into TF-IDF features, ranked with cosine similarity and diversified using MMR. No customer behaviour or purchase events are claimed.',
    stack: ['Python', 'scikit-learn', 'TF-IDF', 'Cosine Similarity', 'Maximal Marginal Relevance (MMR)'],
    contribution: [
      'Built a product-content recommendation workflow over the current 2026-updated Open Food Facts catalogue.',
      'Created TF-IDF text features from product names, brands, categories, quantities, ingredients and nutrition grades, then ranked products by cosine similarity.',
      'Applied Maximal Marginal Relevance (MMR) reranking to balance relevance with diversity in the top recommendations.'
    ],
    features: ['2026-updated public product catalogue', 'TF-IDF product representations', 'Cosine similarity ranking', 'MMR diversity reranking'],
    metrics: [{ value: '2026', label: 'Required product update year' }, { value: 'TF-IDF', label: 'Content representation' }, { value: 'MMR', label: 'Diversity reranking' }, { value: 'Live', label: 'Interactive application' }],
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
