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
  { value: 2.5, decimals: 1, suffix: '+', label: 'Years of experience' },
  { value: 47000, decimals: 0, suffix: '+', label: 'Records analyzed in project' },
  { value: 95, decimals: 0, suffix: '%', label: 'Reported data accuracy' },
  { value: 55, decimals: 0, suffix: '%', label: 'Quality failures from two error types' },
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
    id: 'data-quality-sla', index: '01', title: 'Data Quality & SLA Monitoring Analysis', year: 'Case study', kind: 'Data Analytics · Quality · SLA',
    summary: 'Analyzed a 47,000+ record operational dataset to identify quality failure drivers and monitor accuracy, SLA compliance, exceptions and monthly trends.',
    stack: ['SQL', 'Python', 'Pandas', 'Excel'],
    contribution: [
      'Analyzed 47,000+ records with SQL joins, CTEs, window functions and subqueries to investigate performance outliers and process-quality drivers.',
      'Identified two error types responsible for 55% of quality failures, highlighting focus areas for root-cause analysis.',
      'Created an Excel KPI dashboard using COUNTIFS, SUMIFS and AVERAGEIFS to track accuracy, SLA compliance, exceptions and monthly trends across five document categories.'
    ],
    features: ['47,000+ record dataset', 'Quality failure analysis', 'SLA and exception KPIs', 'Five document categories'],
    metrics: [{ value: '47K+', label: 'Records analyzed' }, { value: '55%', label: 'Failures from two error types' }, { value: '5', label: 'Document categories' }, { value: 'KPI', label: 'Quality and SLA monitoring' }],
    github: 'https://github.com/venkat5203/data-quality-sla-monitoring-', motif: 'scan'
  },
  {
    id: 'sales-operations', index: '02', title: 'Sales & Operations Data Analysis', year: 'Case study', kind: 'Data Analytics · Dashboard',
    summary: 'Prepared sales and operations data for reporting, then built a Power BI dashboard to track business performance and completion trends.',
    stack: ['SQL', 'Python', 'Pandas', 'Excel', 'Power BI'],
    contribution: [
      'Cleaned and transformed sales/operations data using Python, Pandas and SQL, structuring datasets by region and time period for analysis.',
      'Built a Power BI dashboard to monitor sales, average order value and on-time completion.',
      'Translated dashboard observations into actionable business insights for operational reporting.'
    ],
    features: ['Regional and time-based segmentation', 'Sales tracking', 'Average order value', 'On-time completion'],
    metrics: [{ value: 'Power BI', label: 'Dashboard' }, { value: '3', label: 'Core KPIs tracked' }, { value: 'SQL + Python', label: 'Data preparation' }, { value: 'Insights', label: 'Reporting output' }],
    motif: 'flow'
  }
];
export type TimelineItem = { period: string; title: string; org: string; place?: string; kind: string; points: string[] };
export const timeline: TimelineItem[] = [
  { period: 'Apr 2024 — Sep 2026', title: 'Analyst – Data Operations & Reporting', org: 'Ardem Data Services Pvt. Ltd.', place: 'Hyderabad', kind: 'Work', points: ['Validated and analyzed 60+ records daily using Excel, business rules and structured investigation.', 'Monitored SLA, turnaround time, throughput, accuracy and exception metrics; reconciled results against business requirements.', 'Performed root-cause analysis across document workflows and prepared KPI reports and reconciliation frameworks for quality monitoring.'] },
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
