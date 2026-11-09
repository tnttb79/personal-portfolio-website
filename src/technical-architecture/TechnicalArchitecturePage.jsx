import { Chain, LayerDiagram } from "../components/diagrams/Diagrams";
import { projects } from "../config/portfolio";
import "./technical-architecture.scss";

const project = projects.find((entry) => entry.details === "/healthcare-booking-system/");

const technologies = ["Astro", "React", "TypeScript", "Headless CMS", "REST and SDKs", "Google Calendar API", "Google Cloud", "SSR"];

const ownership = [
  ["Frontend system", "Page architecture, responsive UI, the component system and interactive React islands."],
  ["Integration layer", "Typed adapters, domain models, guarded data access and server API routes."],
  ["Booking engine", "Availability calculation, calendar conflict checks, slot locking, event creation and the confirmation flow."],
];

const options = [
  {
    title: "Fully custom application",
    detail: "Full product control, but a custom admin, CMS, forms stack and operations layer would also need to be built and maintained.",
  },
  {
    title: "Traditional site builder",
    detail: "Simple day-to-day management, but less control over frontend architecture, component behavior and custom application logic.",
  },
  {
    title: "Hybrid headless architecture",
    detail: "A code-owned frontend backed by managed content and business services: full UI control without rebuilding an operations dashboard.",
    chosen: true,
  },
];

const frontendChoices = [
  ["Astro", "Server-rendered pages suit a content-heavy production site and keep delivery centered on HTML.", 'output: "server"'],
  ["React islands", "Client-side state is limited to experiences such as the booking wizard and custom forms.", "client:load / client:only"],
  ["TypeScript", "Domain types and API contracts make external integrations more predictable and safer to change.", "external → adapter → model"],
];

const bookingSteps = [
  ["Configuration", "Load scheduling rules and service constraints"],
  ["Request", "Collect scheduling context and the requested date"],
  ["Candidates", "Generate slots from configured time windows"],
  ["Busy query", "Fetch current Calendar busy periods"],
  ["Normalization", "Map external ranges to domain intervals"],
  ["Conflict filter", "Remove overlapping or ineligible slots"],
  ["Presentation", "Return verified availability to the UI"],
  ["Validation", "Validate the submitted booking payload"],
  ["Revalidation", "Query availability again on the server"],
  ["Reservation", "Acquire a deterministic per-slot lock"],
  ["Event write", "Create the Calendar event"],
  ["Notification", "Trigger the confirmation workflow"],
];

const engineeringConcerns = [
  ["Conflict detection", "Busy periods are checked against every calendar configured to block availability."],
  ["Race protection", "A deterministic per-slot reservation stops two near-simultaneous requests from claiming the same appointment."],
  ["Dynamic scheduling", "Business hours, closures, lead time and booking horizon are applied before a slot is offered."],
  ["Configuration-driven rules", "Hours, services and calendar destinations flow through one reusable scheduling engine."],
  ["Trusted execution", "Calendar credentials and appointment creation stay behind server routes, never in browser code."],
];

const security = [
  ["Server-only credentials.", "API secrets and trusted service access are never shipped in browser bundles."],
  ["Controlled write paths.", "Booking and contact operations go through validated server endpoints."],
  ["Analytics minimization.", "Booking and form payloads are not written to analytics, and events avoid personal information."],
  ["Isolated integrations.", "API-specific details live behind adapters and server modules instead of leaking into UI code."],
];

const decisions = [
  ["Astro instead of a full SPA", "Content-heavy pages stay server rendered. React is reserved for interactions that benefit from client state."],
  ["Headless instead of a custom admin", "Operators keep a mature management interface while the public experience stays custom coded."],
  ["Adapters instead of raw SDK calls", "External response formats stay isolated from page components and map into predictable domain types."],
  ["Google Calendar instead of a scheduling suite", "The workflow needed focused direct booking, so Calendar is a lightweight scheduling source of truth."],
  ["Configuration instead of hardcoding", "Services, hours, pricing, locations and content can change without editing presentation code."],
];

const stack = [
  ["Frontend", ["Astro", "React", "TypeScript", "Semantic HTML", "Scoped Sass and CSS"]],
  ["Architecture", ["Server-side rendering", "React islands", "Typed adapters", "Domain models", "Server API routes"]],
  ["Managed services", ["Headless CMS", "Forms and CRM", "Article publishing", "Analytics", "Cloud hosting", "CDN and SSL"]],
  ["External APIs", ["Google Calendar API", "Google Cloud", "Email confirmation workflow", "Third-party SDKs"]],
];

const outcomes = [
  "Production deployment",
  "Custom responsive frontend",
  "Dynamic CMS-driven content",
  "Headless integration architecture",
  "Custom direct booking",
  "Google Calendar synchronization",
  "Managed article publishing",
  "Configuration-driven scheduling",
  "Forms and CRM integration",
  "Server-side trusted operations",
];

const Section = ({ id, title, lede, children }) => (
  <section className="section" aria-labelledby={id}>
    <h2 id={id}>{title}</h2>
    <div className="ta-body">
      {lede && <p className="ta-lede">{lede}</p>}
      {children}
    </div>
  </section>
);

const DefinitionList = ({ items, className = "" }) => (
  <dl className={`ta-defs ${className}`}>
    {items.map(([term, detail]) => (
      <div key={term}>
        <dt>{term}</dt>
        <dd>{detail}</dd>
      </div>
    ))}
  </dl>
);

function TechnicalArchitecturePage() {
  return (
    <div className="technical-architecture">
      <a className="skip-link" href="#architecture-content">Skip to content</a>

      <div className="page">
        <header className="ta-intro">
          <nav aria-label="Breadcrumb" className="ta-back">
            <a href="/#work">Thang Ta</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Case study</span>
          </nav>
          <h1>Healthcare practice website and booking system</h1>
          <div className="ta-intro-body">
            <p className="ta-intro-meta">
              Technical architecture
              <span>{technologies.join(", ")}</span>
            </p>
            <div>
              <p className="ta-intro-lede">
                A custom Astro application that combines a server-rendered frontend, headless content, managed business
                services and a direct Google Calendar booking system.
              </p>
              {project && (
                <p className="ta-intro-links">
                  <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Visit the live site</a>
                  <a className="text-link" href={project.github} target="_blank" rel="noreferrer">Source code</a>
                </p>
              )}
            </div>
          </div>
        </header>

        <main id="architecture-content" tabIndex={-1}>
          <Section id="overview-title" title="Overview">
            <div className="ta-split">
              <div className="ta-prose">
                <p>
                  I rebuilt an existing production website as a custom application. Astro and TypeScript own the page
                  structure, the responsive experience and the integration logic.
                </p>
                <p>
                  The main requirement was to keep the custom presentation layer separate from content and operational
                  records that change often and are managed outside the codebase.
                </p>
                <p>
                  The result is a headless system. The frontend stays fully custom, while content and business services
                  are consumed through SDKs and APIs.
                </p>
              </div>
              <div>
                <h3 className="ta-subhead">What I built</h3>
                <DefinitionList items={ownership} />
              </div>
            </div>
          </Section>

          <Section
            id="problem-title"
            title="The tradeoff"
            lede="The practice needed a custom frontend without giving up easy day-to-day management. Three approaches were on the table."
          >
            <ul className="ta-options">
              {options.map((option) => (
                <li className={option.chosen ? "is-chosen" : undefined} key={option.title}>
                  <h3>
                    {option.title}
                    {option.chosen && <span className="ta-tag">Chosen</span>}
                  </h3>
                  <p>{option.detail}</p>
                </li>
              ))}
            </ul>
            <blockquote className="ta-principle">
              <p>Code owns the experience. Managed services own routine business operations.</p>
            </blockquote>
          </Section>

          <Section
            id="system-title"
            title="System architecture"
            lede="A thin, typed boundary sits between the UI and external systems, so pages work with stable application models instead of third-party response formats."
          >
            <div className="ta-diagram">
              <LayerDiagram
                size="full"
                label="System architecture: the browser talks to the Astro frontend, which calls a typed integration layer, which reaches managed business services and external services"
                layers={[
                  { title: "Browser", items: ["Server-rendered HTML", "Interactive booking and forms"] },
                  { title: "Astro frontend", items: ["SSR pages", "React islands", "TypeScript components", "Responsive UI"] },
                  { title: "Integration and data layer", items: ["API adapters", "Domain models", "Guarded fallbacks", "Server routes"] },
                ]}
                services={[
                  { title: "Content and operations", items: ["Headless CMS", "Forms and CRM", "Articles", "Analytics", "Hosting, CDN, SSL"] },
                  { title: "Scheduling and delivery", items: ["Google Calendar API", "Google Cloud", "Confirmation email"] },
                ]}
              />
            </div>
          </Section>

          <Section
            id="frontend-title"
            title="Frontend"
            lede="Mostly server rendered, selectively interactive. Client-side JavaScript is used only where state adds value."
          >
            <dl className="ta-defs ta-defs--code">
              {frontendChoices.map(([term, detail, code]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>
                    {detail}
                    <code>{code}</code>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="ta-note">
              Content pages are rendered on the server and delivered as complete documents. Focused React components
              hydrate only the interactive parts, so the site still supports rich, stateful workflows.
            </p>
          </Section>

          <Section
            id="data-title"
            title="Headless data"
            lede="Content and presentation can change independently. The frontend decides how information is shown; managed services hold the business records that change often."
          >
            <div className="ta-columns">
              <div>
                <h3 className="ta-subhead">Code owns</h3>
                <ul className="ta-list">
                  <li>Page structure and components</li>
                  <li>Responsive styling and interaction</li>
                  <li>Application and booking logic</li>
                  <li>API integration boundaries</li>
                </ul>
              </div>
              <div>
                <h3 className="ta-subhead">Managed services own</h3>
                <ul className="ta-list">
                  <li>Structured content records</li>
                  <li>Scheduling configuration</li>
                  <li>Publishing and form submissions</li>
                  <li>Operational records</li>
                </ul>
              </div>
            </div>

            <h3 className="ta-subhead ta-gap">Adapters at the boundary</h3>
            <p className="ta-prose-single">
              SDK and API data is translated once at the integration boundary. Astro pages and React components then work
              with stable domain objects, so vendor formats, fallbacks and error handling live in one place.
            </p>
            <Chain
              label="Data flows from the external SDK or API through typed adapters into domain models and then into Astro pages and components"
              steps={["External SDK or API", "Typed adapter", "Domain model", "Astro pages and components"]}
            />
            <p className="ta-note">Routine business updates do not need frontend code changes or a new release.</p>
          </Section>

          <Section
            id="booking-title"
            title="Booking system"
            lede="Instead of embedding a generic scheduling widget, I built a booking flow that checks availability against Google Calendar through trusted server routes."
          >
            <DefinitionList
              className="ta-defs--pair"
              items={[
                ["Google Calendar", "The source of truth. Fresh busy periods decide which times can be offered, and confirmed events are created there."],
                ["Booking engine", "Availability rules, lead time, slot locking, validation and confirmations stay under application control."],
              ]}
            />

            <h3 className="ta-subhead ta-gap">From request to confirmed appointment</h3>
            <ol className="ta-steps">
              {bookingSteps.map(([title, detail]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </li>
              ))}
            </ol>

            <h3 className="ta-subhead ta-gap">What makes it reliable</h3>
            <DefinitionList items={engineeringConcerns} />
          </Section>

          <Section
            id="content-title"
            title="Content and forms"
            lede="Publishing and lead capture stay simple for the business, while the public pages stay consistent with the custom frontend."
          >
            <div className="ta-columns">
              <div>
                <h3 className="ta-subhead">Article publishing</h3>
                <p className="ta-small">
                  Editors publish without a developer. The frontend queries the content service and renders listing and
                  detail routes.
                </p>
                <Chain
                  label="The business dashboard publishes through the content API to the Astro frontend and its article routes"
                  steps={["Business dashboard", "Content API", "Astro frontend", "/articles/[slug]"]}
                />
              </div>
              <div>
                <h3 className="ta-subhead">Contact form</h3>
                <p className="ta-small">
                  A custom form posts through a trusted server route into managed forms and contact tools, keeping the
                  site&apos;s own UI.
                </p>
                <Chain
                  label="The custom form submits through a server API route to the forms service, the CRM and the business dashboard"
                  steps={["Custom form", "Server API", "Forms service", "CRM"]}
                />
              </div>
            </div>
          </Section>

          <Section id="security-title" title="Privacy and security" lede="Trusted integrations stay on the server.">
            <DefinitionList items={security} />
          </Section>

          <Section id="decisions-title" title="Key decisions">
            <DefinitionList items={decisions} />
          </Section>

          <Section id="stack-title" title="Stack">
            <div className="ta-stack">
              {stack.map(([category, items]) => (
                <div key={category}>
                  <h3 className="ta-subhead">{category}</h3>
                  <ul className="ta-list">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="outcome-title" title="Result">
            <div className="ta-prose">
              <p>
                The finished product pairs a custom customer-facing experience with managed infrastructure. Content, forms
                and scheduling configuration are decoupled from presentation code, and the frontend and booking logic are
                built as typed application layers.
              </p>
              <p>
                The booking flow checks fresh Calendar availability, filters conflicts, revalidates submissions and creates
                events through protected server-side integrations.
              </p>
            </div>
            <ul className="ta-list ta-list--two">
              {outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </Section>
        </main>

        <footer className="ta-foot">
          <a className="text-link" href="/#work">Back to all work</a>
        </footer>
      </div>
    </div>
  );
}

export default TechnicalArchitecturePage;
