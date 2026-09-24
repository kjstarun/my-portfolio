export const profile = {
  name: "Tarun Sivagnanam",
  role: "Full Stack Developer",
  tagline: "I turn unstable, alert-dropping systems into ones that just work — then teach the next engineer how.",
  intro:
    "Four years building and rebuilding enterprise MERN + Azure applications for real-time industrial monitoring. My favorite work is the kind that starts as a production fire and ends as a system nobody has to think about anymore.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "kjstarun@gmail.com",
  phone: "+91 9600992922",
  linkedin: "https://linkedin.com/in/tarun-sivagnanam-47a968147",
  github: "https://github.com/kjstarun",
  resumeNote: "Resume available on request",
};

export const stats = [
  { value: "150+", label: "production issues resolved" },
  { value: "35%", label: "lift in user participation" },
  { value: "95%", label: "test coverage on DDi" },
  { value: "4", label: "years, one client, real depth" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Custom Hooks", "MUI", "Tailwind CSS", "SCSS", "Highcharts"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Moleculer.js", "REST APIs", "MSAL Auth", "Serverless Functions", "Mongoose", "Cube.js"],
  },
  {
    title: "Data & Cloud",
    items: ["MongoDB", "MongoDB Atlas", "Aggregation Pipelines", "Azure Cosmos DB", "Function Apps", "Service Bus", "Logic Apps"],
  },
  {
    title: "Practices",
    items: ["Vitest", "Git", "CI/CD", "Agile/Scrum", "Code Review", "Root Cause Analysis"],
  },
  {
    title: "AI-Assisted Dev",
    items: ["Claude Code", "Cursor"],
  },
];

export const timeline = [
  {
    role: "Software Engineer",
    org: "CES Information Technologies",
    period: "Apr 2024 — Jun 2026",
    note: "Promoted from Junior Software Engineer, skipping the Associate level",
    points: [
      "Redesigned the platform's message architecture to close a critical gap that was silently dropping maintenance alerts — then scaled the fix across 10+ use cases.",
      "Took 150+ recurring production issues from reactive fixes to root-caused, durable solutions.",
      "Mentored 3 interns and 1 experienced hire into billable, production-ready contributors over 6 months.",
      "Owned the frontend of a multi-tenant gamification platform end-to-end after the founding architect's exit — shipped in 5 months, 35% lift in participation.",
    ],
  },
  {
    role: "Junior Software Engineer",
    org: "CES Information Technologies",
    period: "Jun 2023 — Mar 2024",
    note: null,
    points: [
      "Replaced a 1-week manual plant-onboarding process with a self-service portal that finishes in seconds.",
      "Cut a 2-minute landing page load to 30 seconds by rethinking how role-based data was requested.",
      "Solo-proposed and delivered a stabilization fix that earned a promotion and strong appraisal.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "CES Information Technologies",
    period: "Jun 2022 — May 2023",
    note: null,
    points: [
      "Built features for an internal HR platform covering recruiter workflows and referrals.",
      "Selected for dedicated Full Stack training ahead of a live client placement.",
    ],
  },
];

export const projects = [
  {
    name: "ARCH / MonARCh",
    subtitle: "Asset Reliability Continuous Health Monitoring",
    description:
      "A real-time industrial monitoring platform for a bottle and beverage manufacturer, tracking assets from raw material sourcing to delivery. The hardest problem wasn't building it — it was keeping it truthful under load.",
    highlights: [
      "Diagnosed a message-processing gap causing 30% of maintenance alerts to silently vanish between source and stakeholder.",
      "Redesigned the pipeline with queue-based ingestion, deduplication, full trace-ID logging, and a daily failsafe report — eliminating missed alerts entirely.",
      "Extended the redesign solo across 10+ additional use cases in 2 months.",
      "Cut landing-page load time from 2 minutes to 30 seconds by fixing unhandled role-based data logic.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Azure Service Bus", "MongoDB", "Event-Driven Architecture"],
  },
  {
    name: "DDi Gamification Platform",
    subtitle: "Multi-tenant engagement platform",
    description:
      "A badges-and-leaderboard platform to keep employees, vendors, and buyers engaged — inherited mid-build after the founding architect left, and taken solo from there to production.",
    highlights: [
      "Owned the entire frontend build across 3 tenants on a shared backend.",
      "Built role-, region-, and achievement-based personalized views on top of the base multi-tenant architecture.",
      "Shipped an animation-heavy, fully responsive Next.js UI — from phones to 4K displays.",
      "Reached 95% test coverage with Vitest while shipping complex filtering and export features.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Vitest", "Multi-tenant UI", "AI-assisted dev"],
  },
];
