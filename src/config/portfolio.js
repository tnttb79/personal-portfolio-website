// Single source of truth for portfolio content.
// Edit here to update the site — components read from this config.

export const profile = {
  name: "Thang Ta",
  user: "thang",
  host: "portfolio",
  role: "AI Engineer & Software Developer",
  tagline: "AI engineering & full-stack software",
  stack: ["AI Agents", "RAG", "LLM Evals", "React", "TypeScript", ".NET", "Python", "Cloud"],
  blurb:
    "I build AI-powered tools and full-stack apps, turning complex ideas into practical, easy-to-use software.",
};

export const resumeUrl = "/Thang_Ta_Resume.pdf";

export const socials = {
  email: "tanguyentruongthang@gmail.com",
  phone: "+1 623 272 2430",
  location: "Phoenix, Arizona",
  linkedin: "https://www.linkedin.com/in/thang-ta-a68660240/",
  github: "https://github.com/tnttb79",
};

// Navigation: clickable for everyone, with an equivalent terminal command.
export const navItems = [
  { label: "about", href: "#about", command: "about" },
  { label: "skills", href: "#skills", command: "skills" },
  { label: "projects", href: "#projects", command: "projects" },
  { label: "resume", href: resumeUrl, command: "resume", external: true },
  { label: "contact", href: "#contact", command: "contact" },
];

export const about = {
  command: "cat about.md",
  paragraphs: [
    "Hey, I'm Thang, an AI Engineer and Software Developer who enjoys building things from idea to working product. I'm drawn to the intersection of AI, software engineering, and thoughtful design.",
    "I care about clean architecture, useful details, and learning by building. This portfolio is where I share projects and ideas I'm excited about. Outside of coding, I enjoy learning languages and playing soccer.",
  ],
};

export const experience = [
  {
    period: "2023 to present",
    title: "Full-stack Developer",
    focus: "self-directed / project work",
    points: [
      "Built full-stack web applications with React, TypeScript, .NET Core, Node.js, and SQL Server.",
      "Designed REST APIs, auth flows (JWT / HttpOnly cookies), and relational data models with EF Core.",
      "Containerized services with Docker and shipped demos to cloud hosting.",
    ],
  },
  {
    period: "2021 to 2023",
    title: "Data → Software transition",
    focus: "foundations",
    points: [
      "Started with SQL and Python for data analysis and automation.",
      "Moved into web development: JavaScript, the MERN stack, and component-driven UI.",
      "Self-taught full-stack engineering through hands-on builds.",
    ],
  },
];

// Grouped for a `skills --grouped` tree view.
export const skills = [
  {
    group: "AI Engineering",
    items: [
      "LLMs / RAG / AI Agents",
      "LangChain / LangGraph / LangSmith",
      "MCP / AWS Bedrock",
      "Embeddings / Vector Search",
      "LLM Evals",
    ],
  },
  {
    group: "Languages & Frameworks",
    items: [
      "C# / ASP.NET Core",
      "Python / FastAPI",
      "TypeScript / JavaScript / Node.js",
      "React / Next.js / React Native",
      "Java / Spring Boot",
    ],
  },
  {
    group: "APIs, Data & Messaging",
    items: [
      "REST / GraphQL",
      "Kafka / RabbitMQ",
      "SQL Server / PostgreSQL",
      "MongoDB / Redis / Snowflake",
      "EF Core",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS / Azure",
      "Docker / Kubernetes / AKS",
      "Azure DevOps / GitHub Actions / Jenkins",
      "CI/CD / Git",
    ],
  },
];

export const projects = [
  {
    id: 1,
    slug: "iframe-auth",
    type: "dir",
    title: "Cross-Origin Iframe Auth",
    img: "/authIframeConsumer.png",
    desc:
      "A two-origin authentication demo for an embeddable chat widget. The consumer app keeps the API key server-side, requests a short-lived embed token, passes it to the producer iframe via postMessage, and the producer exchanges it for an HttpOnly session cookie.",
    technologies: ["Next.js", "TypeScript", "Prisma", "SQLite", "JWT", "HttpOnly Cookies", "postMessage", "Render"],
    demo: "https://auth-iframe-consumer.onrender.com",
    github: "https://github.com/tnttb79/auth-related/tree/main/iframe-auth",
  },
  {
    id: 7,
    slug: "agent-skills-factory",
    type: "dir",
    title: "Agent Skills Factory",
    img: "/agentSkillsFactory.png",
    desc:
      "A personal skills factory for authoring generic, reusable Agent Skills once against the open standard and installing them into other projects through skills.sh. Built around disciplined, portable authoring so the same skills work across supported coding-agent harnesses without leaking tool-specific assumptions.",
    technologies: ["Agent Skills", "skills.sh", "AI Developer Tooling", "Open Standard", "Cross-Harness", "Portable Workflows"],
    demo: "https://www.skills.sh/tnttb79/tnttb79-skills",
    github: "https://github.com/tnttb79/tnttb79-skills",
  },
  {
    id: 2,
    slug: "healthcare-booking-system",
    type: "dir",
    title: "Healthcare Practice Website & Booking System",
    visual: "architecture",
    desc:
      "Designed, developed, and launched a production website for a healthcare practice using Astro, React, and TypeScript, with headless content management and a custom Google Calendar-integrated appointment booking system.",
    technologies: ["Astro", "React", "TypeScript", "SSR", "Headless CMS", "Google Calendar API", "Google Cloud"],
    demo: "https://www.marinholyhillacu.com/",
    details: null,
    github: "https://github.com/tnttb79/astro-headless-cms",
  },
  {
    id: 3,
    slug: "spotify-clone",
    type: "dir",
    title: "Spotify Clone",
    img: "/spotifyClone.png",
    desc:
      "A vibrant music app featuring diverse genres, top charts, and artist pages. Uses the Spotify public API via RapidAPI, with location-based songs and an intuitive search experience.",
    technologies: ["React", "TailwindCSS", "Redux", "Axios", "RapidAPI", "React Router", "Swiper"],
    demo: "https://spotify-clone-bqgr.onrender.com",
    github: "https://github.com/tnttb79/Spotify-Clone-Full-stack_07_03-08_01",
  },
  {
    id: 4,
    slug: "social-app",
    type: "dir",
    title: "Social App",
    img: "/socialApp.png",
    desc:
      "A full-stack app where users create, edit, delete, comment on, and like posts with image uploads. Includes a complete authentication system: sign-in, sign-up, and log-out.",
    technologies: ["React", "TailwindCSS", "MongoDB", "Express", "Redux", "JWT", "React Router"],
    demo: "https://my-memories-uf61.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-MyGallery-fullstack-MERN-app",
  },
  {
    id: 5,
    slug: "admin-dashboard",
    type: "dir",
    title: "Admin Dashboard",
    img: "/adminDashboard.png",
    desc:
      "A front-end admin dashboard with diverse chart types, interactive data tables, and a flexible data grid. Sleek UI with light and dark modes for optimal viewing.",
    technologies: ["React", "Material-UI", "React Router", "Nivo Charts", "Formik", "Yup", "FullCalendar"],
    demo: "https://admin-dashboard-8hz5.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-dashboar-frontend_5_15-6_29",
  },
  {
    id: 6,
    slug: "application-management",
    type: "dir",
    title: "Application Management",
    img: "/ApplicationManagement.png",
    desc:
      "A modern full-stack app for managing job applications and resumes. Built with React, .NET Core, and SQL Server, with a polished dark/light theme. Currently in active development; auth and deployment are upcoming.",
    technologies: ["React", "TypeScript", "Material-UI", ".NET Core 8", "SQL Server", "Docker Compose", "EF Core"],
    demo: null,
    github: "https://github.com/tnttb79/ResumeMgtWebAPIDotNet",
  },
];
