// ─────────────────────────────────────────────────────────────
//  iterative-grit.com — all site content lives in this one file.
//  Replace anything in [BRACKETS]. Add a project by copying one
//  object in `projects`; it gets its own page at /runs/<slug>.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: '[YOUR NAME]',
  domain: 'iterative-grit.com',
  field: 'Industrial & Systems Engineering',
  school: '[SCHOOL]',
  gradYear: '[YEAR]',
  headline: 'Every attempt is a data point.',
  intro:
    "I study how operations really run, then measure, change one thing, and measure again until the numbers move.",
  now: "[Current internship, project or what you're looking for — e.g. seeking summer 2027 operations internships]",
  email: '[EMAIL]',
  links: {
    linkedin: '#',
    github: '#',
    resume: '#', // e.g. put resume.pdf in /public and use '/resume.pdf'
  },
  openTo: "Hiring for operations, supply chain or process roles? Let's talk.",
};

// The strip under the hero. Delete any you don't want to show.
export const stats = [
  { value: '[N]', label: 'internships' },
  { value: '[N]', label: 'projects shipped' },
  { value: '[GPA]', label: 'GPA, if worth showing' },
  { value: '[YEAR]', label: 'available from', accent: true },
];

export type Experience = {
  role: string;
  org: string;
  dates: string;
  place?: string;
  blurb?: string;
  bullets: string[];
  tags?: string[];
  run?: string; // slug of a related project
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: '[Operations / Supply Chain Intern]',
    org: '[Company]',
    dates: '[MMM YYYY] — now',
    place: '[City]',
    blurb: "[One line on what the company does, for readers who haven't heard of it]",
    bullets: [
      '[Action verb + what you changed + the measured result, e.g. cut picking time on X by Y%]',
      '[Built a model, dashboard or SOP, and who now uses it]',
    ],
    tags: ['[Tool]', '[Method]'],
    run: 'run-03',
    current: true,
  },
  {
    role: '[Research Assistant / Student Consultant]',
    org: '[Lab or Club]',
    dates: '[MMM YYYY] — [MMM YYYY]',
    place: '[City]',
    bullets: ['[What you did and the result]', '[Who you worked with and what you were responsible for]'],
  },
];

export const education = {
  degree: 'B.S. Industrial & Systems Engineering',
  school: '[School]',
  dates: '[YYYY] — [YYYY]',
  coursework: '[e.g. Operations Research, Simulation, Quality Engineering, Facility Design]',
};

// level: 1–5, self-rated. `used` lists project slugs as evidence.
export const skills = [
  { group: 'MODEL', name: '[Linear / integer programming]', level: 4, used: ['run-02', 'run-03'] },
  { group: 'SIMULATE', name: '[Discrete-event simulation]', level: 3, used: ['run-02'] },
  { group: 'MEASURE', name: '[Python · pandas]', level: 4, used: ['run-01', 'run-03'] },
  { group: 'MEASURE', name: '[SQL]', level: 2, used: ['run-03'] },
  { group: 'IMPROVE', name: '[Lean · value-stream mapping]', level: 3, used: ['run-01'] },
  { group: 'COMMUNICATE', name: '[Dashboards · Tableau / Power BI]', level: 3, used: ['run-01'] },
];

export type Iteration = { hypothesis: string; change: string; result: string };

export type Project = {
  slug: string;
  number: number; // run number, shown as #03 etc.
  title: string;
  context: string; // internship / course / competition
  dates: string;
  summary: string; // two sentences: problem + result
  featured?: boolean; // shown as a card on the homepage
  role: string;
  methods: string;
  tools: string;
  metric: { name: string; before: string; after: string };
  problem: string[];
  iterations: Iteration[];
  figure?: { src?: string; alt?: string; caption: string };
  next: string[];
};

// Newest first.
export const projects: Project[] = [
  {
    slug: 'run-03',
    number: 3,
    title: '[Project title, e.g. Re-slotting a warehouse to cut picker travel]',
    context: '[Internship at Company]',
    dates: '[MMM–MMM YYYY]',
    summary:
      '[Two sentences: the problem in plain words, and the result. A recruiter who reads only this should get the point.]',
    featured: true,
    role: '[e.g. Lead analyst, team of 3]',
    methods: '[e.g. Time study, ABC analysis]',
    tools: '[e.g. Python, Excel]',
    metric: { name: '[metric name]', before: '[x]', after: '[y]' },
    problem: [
      '[Who had the problem, what it cost them, and how you measured the starting point. Keep it to one short paragraph.]',
      '[Any constraints: budget, space, time, people.]',
    ],
    iterations: [
      { hypothesis: '[What you thought would work]', change: '[What you actually tried]', result: "[Didn't work — and why]" },
      { hypothesis: '[What the v1 failure taught you]', change: '[The adjustment]', result: '[Partial improvement]' },
      { hypothesis: '[Final idea]', change: '[What shipped]', result: '[Measured result]' },
    ],
    figure: { caption: '[One-line caption saying what to notice]' },
    next: ['[A limitation you noticed]', "[What you'd measure or test next]"],
  },
  {
    slug: 'run-02',
    number: 2,
    title: '[Project title, e.g. Simulating queues at a campus clinic]',
    context: '[Course]',
    dates: '[MMM–MMM YYYY]',
    summary: '[Two sentences: the problem and the result.]',
    featured: true,
    role: '[Your role]',
    methods: '[Methods]',
    tools: '[Tools]',
    metric: { name: '[metric name]', before: '[x]', after: '[y]' },
    problem: ['[The problem and the baseline.]'],
    iterations: [
      { hypothesis: '[Hypothesis]', change: '[Change]', result: '[Result]' },
      { hypothesis: '[Hypothesis]', change: '[Change]', result: '[Result]' },
    ],
    figure: { caption: '[Caption]' },
    next: ["[What you'd do next]"],
  },
  {
    slug: 'run-01',
    number: 1,
    title: '[Project title]',
    context: '[Club / competition / class]',
    dates: '[MMM YYYY]',
    summary: '[Two sentences: the problem and the result — or what you learned if it did not work.]',
    role: '[Your role]',
    methods: '[Methods]',
    tools: '[Tools]',
    metric: { name: '[metric name]', before: '[x]', after: '[y]' },
    problem: ['[The problem and the baseline.]'],
    iterations: [{ hypothesis: '[Hypothesis]', change: '[Change]', result: '[Result]' }],
    next: ["[What you'd do next]"],
  },
];

export const pad = (n: number) => String(n).padStart(2, '0');
