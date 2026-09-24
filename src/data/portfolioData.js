export const profile = {
  name: "Tarun Sivagnanam",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer specializing in enterprise MERN & Azure systems — building things that stay reliable, and growing the team around them.",
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
    note: null,
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
    subtitle: "Architecture Redesign, Scaling & Team Growth",
    category: "Event-Driven Architecture",
    accentColor: "#F2B84B",
    badge: null,
    description:
      "A real-time industrial monitoring platform for a bottle & beverage manufacturer. The hardest problem wasn't building it — it was keeping it truthful under load: 30% of maintenance alerts were silently vanishing before this redesign.",
    impactStats: [
      { value: "0", label: "missed alerts post-redesign" },
      { value: "150+", label: "production issues resolved" },
      { value: "4", label: "engineers mentored to billable" },
      { value: "10+", label: "use cases extended solo" },
    ],
    sections: [
      {
        label: "Architecture Redesign",
        icon: "⚡",
        points: [
          "Diagnosed a critical architecture gap causing machine failure/maintenance alerts to silently drop — traced to tightly-coupled processing logic, inconsistent error handling, and duplicate message delivery — resulting in 30% of notifications missed across all client factory plants, risking equipment damage and downtime costs.",
          "Co-designed an end-to-end redesign with a 30+ member client team for the platform's highest-volume use case (1,000+ messages/minute); implemented a Confluent–Mongo dump layer with a unique compound index to guarantee message idempotency at entry.",
          "Built a timer-triggered Azure Function to process queued messages every 3 minutes with full trace-ID logging, removed redundant internal API calls, and routed output to a multi-channel notification layer (Teams, web, SMS, email).",
          "Designed a daily failsafe job exporting unresolved failures to stakeholders, guaranteeing zero silent data loss even in edge-case failures.",
          "Delivered in an intensive 3–4 month sprint; eliminated missed notifications entirely. Recognized directly by senior management with a significant appraisal impact.",
        ],
      },
      {
        label: "Scale & Ownership",
        icon: "🔁",
        points: [
          "Solo-extended the notification architecture redesign across 10+ additional use cases platform-wide, adding exponential retry logic (p-retry) for internal API and database fault tolerance — completed in 2 months with zero missed notifications platform-wide.",
          "Resolved 150+ live production issues across ARCH/MonARCh over the full tenure — spanning frontend, backend, and data-layer root causes — directly supporting platform stability and client trust.",
          "Continued as ongoing code reviewer for the team, including subsequently-joined experienced engineers, reflecting deep project-level ownership built over multiple years.",
        ],
      },
      {
        label: "Mentorship",
        icon: "🧑‍🏫",
        points: [
          "Took on mentorship ownership for 3 incoming interns and 1 experienced hire: built a structured roadmap, ran code reviews, and led 6 months of shadowing and pair programming — converting all 4 into billable resources on the project.",
        ],
      },
    ],
    tags: ["React", "TypeScript", "Node.js", "Azure Service Bus", "MongoDB", "Confluent Kafka", "Azure Functions", "Event-Driven Architecture"],
  },
  {
    name: "ARCH — Performance & Stability",
    subtitle: "Load-Time Diagnosis, Crash Reduction & Promotion",
    category: "Performance Engineering",
    accentColor: "#3FDBC7",
    badge: null,
    description:
      "Joined a lean 3-person team weeks after promotion to stabilize a live, production-critical platform whose frequent crashes were directly eroding the client's profit margins and billing accuracy.",
    impactStats: [
      { value: "2 min → 30s", label: "landing page load time" },
      { value: "60+ → 10–15", label: "API calls per page load" },
      { value: "5–10 → ~4", label: "daily incident reports" },
      { value: "6 mo", label: "plan-to-production cycle" },
    ],
    sections: [
      {
        label: "Performance Diagnosis",
        icon: "🔍",
        points: [
          "Diagnosed root cause of ~2-minute landing page loads: unhandled role-based data logic was firing 60+ API calls and 100+ client database (cube) calls on every load. Redesigned request logic to fire only role-relevant calls (down to 10–15), cutting load time to ~30 seconds despite heavy live-data dependency.",
          "Resolved recurring module crashes from unstabilized source data by introducing database schema validation, backend sanitization, and reduced frontend data handling — cutting daily incident reports from 5–10 to ~4.",
        ],
      },
      {
        label: "Delivery & Recognition",
        icon: "🏆",
        points: [
          "Proposed the fix independently, solo-implemented it end-to-end, then led team-wide production testing given business-critical stakes — delivered across a 6-month cycle from planning through client approval to production release.",
          "Recognized with internal appreciation, a promotion, and a strong appraisal for directly improving the client's cost efficiency and profit margins.",
        ],
      },
    ],
    tags: ["React", "Node.js", "Cube.js", "MongoDB", "Performance Optimization", "Root Cause Analysis"],
  },
  {
    name: "DDi Gamification Platform",
    subtitle: "Multi-tenant Engagement Platform — Frontend Ownership",
    category: "Multi-tenant UI",
    accentColor: "#a78bfa",
    badge: null,
    description:
      "A badges-and-leaderboard platform to keep employees, vendors, and buyers engaged — inherited mid-build after the founding architect left, and taken solo from setup to production across 3 tenants on a shared backend.",
    impactStats: [
      { value: "35%", label: "lift in user participation" },
      { value: "95%", label: "Vitest test coverage" },
      { value: "3", label: "tenants, 1 shared backend" },
      { value: "5 mo", label: "setup to production" },
    ],
    sections: [
      {
        label: "Ownership & Architecture",
        icon: "🏗️",
        points: [
          "Took full ownership of the entire frontend build after the founding architect departed post-setup, delivering a multi-tenant gamification platform (3 tenants, 1 shared backend service) for employees, vendors, and buyers.",
          "Applied architectural lessons from ARCH/MonARCh to avoid tight coupling from the outset; used AI-assisted development tooling and Vitest to reach 95% overall test coverage.",
          "Reached UAT within 2 months and shipped to production over a 5-month cycle; received formal client appreciation for delivery quality and impact.",
        ],
      },
      {
        label: "Product Features",
        icon: "🎮",
        points: [
          "Built a badges/achievements/leaderboard engine with role-scoped data views (individual vs. admin/super-admin visibility), driving 35% growth in user participation.",
          "Engineered an animation-heavy, responsive Next.js UI — including layered avatar/podium rendering with precise z-index and color-blend handling — across mobile, tablet, laptop, and 4K displays.",
          "Built a complex multi-select, cross-organization filtering system and a proxy-backed PDF export feature; implemented dynamic UI theming and configuration by user role, region, and achievement level on top of the platform's multi-tenant architecture.",
        ],
      },
    ],
    tags: ["Next.js", "Tailwind CSS", "Vitest", "Multi-tenant UI", "AI-assisted dev", "Node.js"],
  },
  {
    name: "Self-Service Data Onboarding Portal",
    subtitle: "Replacing a 1-Week Manual Process with Seconds",
    category: "Developer Tooling",
    accentColor: "#34d399",
    badge: null,
    description:
      "Built to eliminate a week-long manual plant onboarding process — covering asset mappings, locations, parent assets, use cases, devices, sensor mappings, dashboards, and KPIs — down to seconds after approval.",
    impactStats: [
      { value: "1 week → secs", label: "plant onboarding time" },
      { value: "5 mo", label: "dev-to-production cycle" },
      { value: "100%", label: "rollback capability" },
      { value: "0", label: "manual data entry errors" },
    ],
    sections: [
      {
        label: "Portal & Validation Engine",
        icon: "🗂️",
        points: [
          "Built a self-service onboarding portal under lead guidance to replace a ~1-week manual plant onboarding process — reducing onboarding to seconds after approval.",
          "Designed a rules-based, downloadable Excel import template and validation engine that flagged errors and required double-confirmation before writing directly to production data.",
        ],
      },
      {
        label: "Safety-First Architecture",
        icon: "🛡️",
        points: [
          "Built safety-first architecture: logged raw sheet data, processed output, and pre-change database backups to enable rollback given the tool's direct write access to the live database.",
          "Delivered over a 5-month cycle (3 months development, 2 months testing) given the complexity of business-logic validation and direct database risk.",
        ],
      },
    ],
    tags: ["React", "Node.js", "MongoDB", "Excel Import", "Schema Validation", "Safety Architecture"],
  },
  {
    name: "Brainwave",
    subtitle: "Internal HR Referral Portal & Resume Builder",
    category: "Internal Product",
    accentColor: "#F2B84B",
    badge: "Internal Project",
    description:
      "An internal HR platform that unified recruiter workflows, employee referral management, and resume building into a single product — built as part of a focused Full Stack placement training program.",
    impactStats: [
      { value: "End-to-end", label: "recruiter workflow coverage" },
      { value: "Peer collab", label: "shared full stack ownership" },
      { value: "Selected", label: "for direct client placement" },
      { value: "Live", label: "resume builder with export" },
    ],
    sections: [
      {
        label: "Platform Features",
        icon: "🧩",
        points: [
          "Contributed core features to a recruiter-facing workflow module — covering candidate pipeline tracking, referral submission, and status updates across the hiring lifecycle.",
          "Built and integrated an employee referral engine that replaced ad-hoc email chains, letting staff submit, track, and receive updates on referrals through a single structured interface.",
          "Developed a resume builder tool that helped employees generate structured, role-ready resumes — reducing time spent formatting and improving submission quality for client placements.",
        ],
      },
      {
        label: "Team & Recognition",
        icon: "🎓",
        points: [
          "Collaborated closely with a peer engineer, dividing ownership across frontend and backend surfaces while maintaining shared code quality standards throughout the build.",
          "Selected for a dedicated Full Stack Web Development training cohort — recognising readiness for direct placement on a live, revenue-generating client project.",
        ],
      },
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Full Stack Training"],
  },
];
