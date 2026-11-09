// Single source of truth for portfolio content.
// Edit here to update the site — components read from this config.

export const profile = {
  name: "Thang Ta",
  role: "AI Engineer & Software Developer",
  location: "Phoenix, Arizona",
  lede: "I build AI agents, retrieval systems and the full-stack applications they run in, from first idea to a working product.",
  status: "Open to conversations about AI engineering and full-stack roles.",
};

export const resumeUrl = "/Thang_Ta_Resume.pdf";

export const socials = {
  email: "tanguyentruongthang@gmail.com",
  phone: "+1 623 272 2430",
  location: "Phoenix, Arizona",
  linkedin: "https://www.linkedin.com/in/thang-ta-a68660240/",
  github: "https://github.com/tnttb79",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm an AI engineer and software developer. I started out with SQL and Python for data analysis and automation, moved into web development, and now build AI-powered tools and full-stack applications from idea to working product.",
    "I care about clean architecture and the small details that make software easier to use. This site is where I share the projects I'm proudest of. Outside of work I learn languages and play soccer.",
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
    title: "Data to software transition",
    focus: "foundations",
    points: [
      "Started with SQL and Python for data analysis and automation.",
      "Moved into web development: JavaScript, the MERN stack, and component-driven UI.",
      "Self-taught full-stack engineering through hands-on builds.",
    ],
  },
];

export const skills = [
  {
    group: "AI engineering",
    items: [
      "LLMs, RAG and AI agents",
      "LangChain, LangGraph, LangSmith",
      "MCP and AWS Bedrock",
      "Embeddings and vector search",
      "LLM evals",
    ],
  },
  {
    group: "Languages and frameworks",
    items: [
      "C# and ASP.NET Core",
      "Python and FastAPI",
      "TypeScript, JavaScript, Node.js",
      "React, Next.js, React Native",
      "Java and Spring Boot",
    ],
  },
  {
    group: "APIs, data and messaging",
    items: [
      "REST and GraphQL",
      "Kafka and RabbitMQ",
      "SQL Server and PostgreSQL",
      "MongoDB, Redis, Snowflake",
      "EF Core",
    ],
  },
  {
    group: "Cloud and DevOps",
    items: [
      "AWS and Azure",
      "Docker, Kubernetes, AKS",
      "Azure DevOps, GitHub Actions, Jenkins",
      "CI/CD and Git",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Cross-Origin Iframe Auth",
    img: "/authIframeConsumer.png",
    desc:
      "A two-origin sign-in flow for an embeddable chat widget. The API key never reaches the browser, and the widget ends up with its own secure session.",
    flow: [
      "The consumer app keeps the API key on its server",
      "It requests a short-lived embed token",
      "The token reaches the producer iframe through postMessage",
      "The producer exchanges it for an HttpOnly session cookie",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "SQLite", "JWT", "HttpOnly cookies", "postMessage", "Render"],
    demo: "https://auth-iframe-consumer.onrender.com",
    github: "https://github.com/tnttb79/auth-related/tree/main/iframe-auth",
  },
  {
    id: 7,
    title: "Agent Skills Factory",
    img: "/agentSkillsFactory.png",
    desc:
      "A personal library of reusable Agent Skills. Each skill is written once against the open standard and works across supported coding-agent harnesses without tool-specific assumptions.",
    flow: [
      "Write a skill once against the open Agent Skills standard",
      "Keep it portable, with no harness-specific assumptions",
      "Publish it through skills.sh",
      "Install it into any project that uses a supported harness",
    ],
    technologies: ["Agent Skills", "skills.sh", "AI developer tooling", "Open standard", "Cross-harness", "Portable workflows"],
    demo: "https://www.skills.sh/tnttb79/tnttb79-skills",
    demoLabel: "View on skills.sh",
    github: "https://github.com/tnttb79/tnttb79-skills",
  },
  {
    id: 2,
    title: "Healthcare Practice Website and Booking System",
    layers: [
      { title: "Astro and React frontend", detail: "Server-rendered pages with interactive islands" },
      { title: "Typed adapters", detail: "One boundary between the UI and outside services" },
    ],
    services: ["Headless CMS", "Google Calendar API"],
    desc:
      "A production website for a healthcare practice that I designed, built and launched. Content is managed in a headless CMS, and a custom booking system checks Google Calendar before it confirms an appointment.",
    technologies: ["Astro", "React", "TypeScript", "SSR", "Headless CMS", "Google Calendar API", "Google Cloud"],
    demo: "https://www.marinholyhillacu.com/",
    demoLabel: "Live site",
    details: "/healthcare-booking-system/",
    github: "https://github.com/tnttb79/astro-headless-cms",
  },
  {
    id: 3,
    title: "Spotify Clone",
    img: "/spotifyClone.png",
    desc:
      "A music app with genre browsing, top charts, artist pages, location-based songs and search, built on the Spotify public API through RapidAPI.",
    technologies: ["React", "TailwindCSS", "Redux", "Axios", "RapidAPI", "React Router", "Swiper"],
    demo: "https://spotify-clone-bqgr.onrender.com",
    github: "https://github.com/tnttb79/Spotify-Clone-Full-stack_07_03-08_01",
  },
  {
    id: 4,
    title: "Social App",
    img: "/socialApp.png",
    desc:
      "A full-stack app where people create, edit, delete, comment on and like posts with image uploads, with sign-up, sign-in and sign-out built in.",
    technologies: ["React", "TailwindCSS", "MongoDB", "Express", "Redux", "JWT", "React Router"],
    demo: "https://my-memories-uf61.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-MyGallery-fullstack-MERN-app",
  },
  {
    id: 5,
    title: "Admin Dashboard",
    img: "/adminDashboard.png",
    desc:
      "A front-end admin dashboard with several chart types, interactive data tables, a flexible data grid and a calendar, in light and dark modes.",
    technologies: ["React", "Material-UI", "React Router", "Nivo Charts", "Formik", "Yup", "FullCalendar"],
    demo: "https://admin-dashboard-8hz5.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-dashboar-frontend_5_15-6_29",
  },
  {
    id: 6,
    title: "Application Management",
    img: "/ApplicationManagement.png",
    desc:
      "A full-stack app for tracking job applications and resumes, built with React, .NET Core and SQL Server. It is in active development; authentication and deployment come next.",
    technologies: ["React", "TypeScript", "Material-UI", ".NET Core 8", "SQL Server", "Docker Compose", "EF Core"],
    demo: null,
    github: "https://github.com/tnttb79/ResumeMgtWebAPIDotNet",
  },
];
