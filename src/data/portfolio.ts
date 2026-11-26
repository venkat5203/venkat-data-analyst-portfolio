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
    id: 'real-retail-data-quality', index: '01', title: 'Real-World Retail Data Quality & Analytics', year: 'Live project', kind: 'Data Analytics · Data Quality · Business Intelligence',
    summary: 'Built a reproducible Python data-quality and analytics pipeline using the documented UCI Online Retail historical transaction dataset. Audits missing values, duplicates, invalid quantities and prices, and separates cancellation transactions for contextual analysis.',
    stack: ['Python', 'Pandas', 'SQL', 'SQLite', 'React', 'Vite', 'Recharts'],
    contribution: [
      'Created a repeatable pipeline that downloads and verifies the public UCI source file, preserves the raw workbook, and generates audit and analysis outputs.',
      'Applied documented quality rules for missing customer IDs, duplicate rows, non-positive quantities and prices, and cancellation invoices.',
      'Built SQL analysis outputs and an interactive dashboard for monthly revenue, country performance, product performance and data-quality findings.'
    ],
    features: ['UCI Online Retail historical data', 'Missing-value and duplicate audit', 'Cancellation and invalid-value checks', 'Revenue and product dashboard'],
    metrics: [{ value: 'UCI', label: 'Documented public source' }, { value: 'Python', label: 'Reproducible audit pipeline' }, { value: 'SQLite', label: 'SQL analysis database' }, { value: 'Live', label: 'Interactive dashboard' }],
    github: 'https://github.com/venkat5203/real-world-retail-data-quality-analytics',
    live: 'https://real-retail-data-quality-analytics.vercel.app/',
    motif: 'scan'
  },
  {
    id: 'retailrocket-recommender', index: '02', title: 'RetailRocket Session-Based Recommendation System', year: 'Live project', kind: 'Recommendation Systems · Ranking · Evaluation',
    summary: 'Developed a product recommendation workflow around RetailRocket behavioural data, with session-oriented recommendations and offline benchmark experiments to compare ranking approaches.',
    stack: ['Python', 'Pandas', 'Recommendation Systems', 'Ranking', 'Offline Evaluation'],
    contribution: [
      'Built a recommendation workflow using RetailRocket interaction data to produce product suggestions from user-session behaviour.',
      'Ran benchmark experiments to compare recommendation variants and inspect their offline evaluation results.',
      'Explored maximal marginal relevance (MMR) reranking to balance recommendation relevance with item diversity.'
    ],
    features: ['Session-oriented product recommendations', 'Candidate ranking experiments', 'Offline benchmark evaluation', 'MMR-based diversity reranking'],
    metrics: [{ value: 'RetailRocket', label: 'Behavioural dataset' }, { value: 'Session', label: 'Recommendation context' }, { value: 'MMR', label: 'Diversity reranking' }, { value: 'Live', label: 'Interactive application' }],
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
