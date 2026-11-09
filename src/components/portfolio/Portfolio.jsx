import Contact from "../contact/Contact";
import { LayerDiagram, StepFlow } from "../diagrams/Diagrams";
import { about, navItems, profile, projects, resumeUrl, skills, socials } from "../../config/portfolio";
import "./portfolio.scss";

const headingId = (project) => `project-${project.id}`;

const ProjectLinks = ({ project }) => (
  <ul className="project-links">
    {project.details && (
      <li>
        <a className="text-link" href={project.details}>Case study</a>
      </li>
    )}
    {project.demo ? (
      <li>
        <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
          {project.demoLabel || "Live demo"}
        </a>
      </li>
    ) : (
      <li className="project-pending">Demo coming soon</li>
    )}
    {project.github && (
      <li>
        <a className="text-link" href={project.github} target="_blank" rel="noreferrer">Source code</a>
      </li>
    )}
  </ul>
);

const Project = ({ project }) => (
  <article className="project" aria-labelledby={headingId(project)}>
    <div className="project-text">
      <h3 id={headingId(project)}>{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      {project.flow && <StepFlow steps={project.flow} label={`How ${project.title} works`} />}
      <p className="project-stack">
        <span className="visually-hidden">Built with: </span>
        {project.technologies.join(", ")}
      </p>
      <ProjectLinks project={project} />
    </div>

    {project.img ? (
      <div className="project-media">
        <img src={project.img} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
      </div>
    ) : (
      <div className="project-media project-media--diagram">
        <LayerDiagram
          layers={project.layers}
          services={project.services}
          label={`${project.title} architecture: frontend, typed adapters, then outside services`}
        />
      </div>
    )}
  </article>
);

const Portfolio = () => (
  <div className="portfolio">
    <a className="skip-link" href="#main">Skip to content</a>

    <div className="page">
      <header className="intro">
        <nav className="intro-nav" aria-label="Main">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
            </li>
          </ul>
        </nav>

        <h1 className="intro-name">{profile.name}</h1>

        <div className="intro-body">
          <p className="intro-role">
            {profile.role}
            <span>{profile.location}</span>
          </p>
          <div>
            <p className="intro-lede">{profile.lede}</p>
            <p className="intro-status">{profile.status}</p>
            <div className="intro-actions">
              <a className="button button--primary" href={`mailto:${socials.email}`}>Email me</a>
              <a className="button button--quiet" href={resumeUrl} target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
            </div>
          </div>
          <img
            className="intro-portrait"
            src="/ThangTa.png"
            alt="Portrait of Thang Ta"
            width="1180"
            height="1180"
          />
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="section" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <div className="about-text">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">
                Read my full resume (PDF)
              </a>
            </p>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <h2 id="work-heading">Selected work</h2>
          <div className="work-list">
            {projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          <div className="skills">
            {skills.map((group) => (
              <div className="skill-group" key={group.group}>
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <Contact />
        </section>
      </main>

      <footer className="site-foot">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <ul>
          <li><a href={socials.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={`mailto:${socials.email}`}>Email</a></li>
        </ul>
      </footer>
    </div>
  </div>
);

export default Portfolio;
