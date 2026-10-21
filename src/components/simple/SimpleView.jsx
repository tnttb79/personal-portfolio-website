import ScrollTopButton from "../scrolltop/ScrollTopButton";
import Contact from "../sections/Contact";
import { profile, socials, about, skills, projects, resumeUrl } from "../../config/portfolio";
import "./simple.scss";

const Project = ({ project }) => (
  <details className="work-entry">
    <summary>
      <span className="work-thumbnail" aria-hidden="true">
        {project.img ? <img src={project.img} alt="" loading="lazy" /> : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 3h6v6H9zM2 15h6v6H2zM16 15h6v6h-6zM12 9v3M5 15v-3h14v3" stroke="currentColor" strokeWidth="1.4" /></svg>
        )}
      </span>
      <h3>{project.title}</h3>
      <span className="work-toggle" aria-hidden="true"><span /><span /></span>
    </summary>
    <div className="work-detail">
      <div className="work-preview">
        {project.visual === "architecture" ? (
          <div className="work-architecture" role="img" aria-label="Frontend, integration layer, and managed services architecture diagram">
            <span>Astro + React</span>
            <i aria-hidden="true">↓</i>
            <span>Typed adapters</span>
            <i aria-hidden="true">↓</i>
            <div><span>Headless CMS</span><span>Calendar API</span></div>
          </div>
        ) : <img src={project.img} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />}
      </div>
      <p className="work-description">{project.desc}</p>
      <ul className="work-technologies" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <div className="work-links">
        {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.demoLabel || "Live demo"}: ${project.title}`}>{project.demoLabel || "Live demo"}</a> : <span>Demo coming soon</span>}
        {project.details && <a href={project.details} target="_blank" rel="noreferrer" aria-label={`Technical details: ${project.title}`}>Technical details</a>}
        {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub: ${project.title}`}>GitHub</a>}
      </div>
    </div>
  </details>
);

const SimpleView = ({ onExit }) => (
  <div className="simple" id="top">
    <a className="simple-skip" href="#main-content">Skip to content</a>
    <div className="simple-layout">
      <header className="simple-sidebar">
        <div className="simple-identity">
          <a href="#top" className="simple-name"><h1>{profile.name}</h1></a>
          <p className="simple-role">{profile.role}</p>
          <p className="simple-location">{socials.location}</p>
          <p className="simple-status">maybe open to work</p>
        </div>
        <nav className="simple-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="simple-sidebar-links">
          <a className="simple-resume" href={resumeUrl} target="_blank" rel="noreferrer">Resume <span>PDF</span></a>
          <div className="simple-socials">
            <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${socials.email}`}>Email</a>
          </div>
        </div>
      </header>

      <main id="main-content" className="simple-content" tabIndex={-1}>
        <div className="simple-intro">
          <p className="simple-lead">{profile.blurb}</p>
          <p className="simple-focus">{profile.stack.join(", ")}</p>
        </div>

        <section className="simple-section simple-work" id="projects" aria-labelledby="work-heading">
          <div className="simple-section-head">
            <h2 id="work-heading">Projects</h2>
            <p>Open a project for the full details.</p>
          </div>
          <div className="work-index">
            {projects.map((project) => <Project project={project} key={project.id} />)}
          </div>
        </section>

        <section className="simple-section" id="about" aria-labelledby="about-heading">
          <div className="simple-section-head"><h2 id="about-heading">About</h2></div>
          <div className="simple-prose">
            <img className="simple-portrait" src="/about.png" alt="Illustration of Thang Ta" width="1024" height="1024" loading="lazy" />
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="simple-section" id="skills" aria-labelledby="skills-heading">
          <div className="simple-section-head"><h2 id="skills-heading">Skills</h2></div>
          <div className="simple-skills">
            {skills.map((group) => (
              <div className="skill-block" key={group.group}>
                <h3>{group.group}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="simple-section simple-contact" id="contact" aria-labelledby="contact-heading">
          <div className="simple-section-head"><h2 id="contact-heading">Contact</h2></div>
          <p className="simple-contact-note">The fastest way to reach me is email. I usually reply within a day.</p>
          <Contact variant="simple" />
        </section>

        <footer className="simple-foot">
          <span>© {new Date().getFullYear()} {profile.name}. Thanks for visiting.</span>
          <button type="button" onClick={onExit}>Terminal view</button>
        </footer>
      </main>
    </div>
    <ScrollTopButton variant="simple" />
  </div>
);

export default SimpleView;
