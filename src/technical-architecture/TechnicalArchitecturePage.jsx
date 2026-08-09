import "./technical-architecture.scss";

const technologies = [
  "Astro",
  "React",
  "TypeScript",
  "Headless CMS",
  "REST / SDK",
  "Google Calendar API",
  "Google Cloud",
  "SSR",
];

const ownership = [
  ["Frontend system", "Page architecture, responsive UI, component system, and interactive React islands."],
  ["Integration layer", "Typed adapters, domain models, guarded data access, and server API routes."],
  ["Booking engine", "Availability calculation, calendar conflict checks, slot locking, event creation, and confirmation flow."],
];

const tradeoffs = [
  {
    marker: "A",
    title: "Fully custom application",
    detail: "Maximum product control, but a custom admin, CMS, forms stack, and operations layer would also need to be built and maintained.",
    tags: ["full control", "high backend scope"],
  },
  {
    marker: "B",
    title: "Traditional site builder",
    detail: "Simple day-to-day management, but less control over frontend architecture, component behavior, and custom application logic.",
    tags: ["easy management", "limited flexibility"],
  },
  {
    marker: "✓",
    title: "Hybrid headless architecture",
    detail: "A code-owned frontend backed by managed content and business services: full UI control without rebuilding an operations dashboard.",
    tags: ["chosen", "balanced ownership"],
    chosen: true,
  },
];

const bookingSteps = [
  ["01", "Configuration", "Load scheduling rules and service constraints"],
  ["02", "Request", "Collect scheduling context and requested date"],
  ["03", "Candidates", "Generate slots from configured time windows"],
  ["04", "Busy query", "Fetch current Calendar busy periods"],
  ["05", "Normalization", "Map external ranges to domain intervals"],
  ["06", "Conflict filter", "Remove overlapping or ineligible slots"],
  ["07", "Presentation", "Return verified availability to the UI"],
  ["08", "Validation", "Validate the submitted booking payload"],
  ["09", "Revalidation", "Query availability again on the server"],
  ["10", "Reservation", "Acquire a deterministic per-slot lock"],
  ["11", "Event write", "Create the Calendar event"],
  ["12", "Notification", "Trigger the confirmation workflow"],
];

const engineeringConcerns = [
  ["Conflict detection", "Busy periods are checked against every calendar configured to block availability."],
  ["Race protection", "A deterministic per-slot reservation prevents two near-simultaneous requests from claiming the same appointment."],
  ["Dynamic scheduling", "Business hours, closures, lead time, and booking horizon are applied before a slot is offered."],
  ["Configuration-driven rules", "Hours, services, and calendar destinations flow through one reusable scheduling engine."],
  ["Trusted execution", "Calendar credentials and appointment creation remain behind server routes, never in browser code."],
];

const decisions = [
  ["Astro instead of a full SPA", "Content-heavy pages stay server rendered. React is reserved for interactions that benefit from client state."],
  ["Headless instead of a custom admin", "Operators retain a mature management interface while the public experience remains custom coded."],
  ["Adapters instead of raw SDK calls", "External response formats stay isolated from page components and map into predictable domain types."],
  ["Google Calendar instead of a scheduling suite", "The workflow required focused direct booking, so Calendar provides a lightweight scheduling source of truth."],
  ["Configuration instead of hardcoding", "Services, hours, pricing, locations, and content can change without editing presentation code."],
];

const stack = [
  ["Frontend", ["Astro", "React", "TypeScript", "Semantic HTML", "Scoped Sass / CSS"]],
  ["Architecture", ["Server-side rendering", "React islands", "Typed adapters", "Domain models", "Server API routes"]],
  ["Managed services", ["Headless CMS", "Forms / CRM", "Article publishing", "Analytics", "Cloud hosting", "CDN / SSL"]],
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

function FlowArrow({ label }) {
  return (
    <div className="ta-flow-arrow" aria-hidden="true">
      {label && <span>{label}</span>}
      <i />
    </div>
  );
}

function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <header className="ta-section-heading">
      <div className="ta-section-index mono" aria-hidden="true">{index}</div>
      <div>
        <p className="ta-eyebrow mono">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="ta-section-lede">{description}</p>}
      </div>
    </header>
  );
}

function TerminalBar({ title }) {
  return (
    <div className="ta-terminal-bar">
      <span className="ta-dot ta-dot--red" />
      <span className="ta-dot ta-dot--yellow" />
      <span className="ta-dot ta-dot--green" />
      <span className="ta-terminal-title mono">{title}</span>
    </div>
  );
}

function Node({ eyebrow, title, items, tone = "default", className = "" }) {
  return (
    <div className={`ta-node ta-node--${tone} ${className}`}>
      <p className="ta-node-eyebrow mono">{eyebrow}</p>
      <h3>{title}</h3>
      {items && (
        <ul>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}

function Pipeline({ steps, label }) {
  return (
    <div className="ta-pipeline" role="img" aria-label={label}>
      {steps.map((step, index) => (
        <div className="ta-pipeline-fragment" key={step}>
          <div className="ta-pipeline-step mono">{step}</div>
          {index < steps.length - 1 && <span className="ta-pipeline-arrow" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}

function TechnicalArchitecturePage() {
  return (
    <div className="technical-architecture">
      <a className="ta-skip-link" href="#architecture-content">Skip to architecture</a>

      <header className="ta-topbar">
        <div className="ta-brand mono">
          <span className="ta-brand-prompt">thang@portfolio</span>
          <span className="ta-brand-path">:~/projects$</span>
          <span>open healthcare-booking-system</span>
        </div>
      </header>

      <main id="architecture-content">
        <section className="ta-hero" aria-labelledby="architecture-title">
          <div className="ta-hero-copy">
            <p className="ta-kicker mono"><span>production_system</span> / architecture</p>
            <h1 id="architecture-title">
              Production Web Application
              <span>Technical Architecture</span>
            </h1>
            <p className="ta-hero-lede">
              A custom Astro application combining a server-rendered frontend, headless content infrastructure,
              managed business services, and a direct Google Calendar booking system.
            </p>
            <div className="ta-badges" aria-label="Project technologies">
              {technologies.map((technology) => <span className="mono" key={technology}>{technology}</span>)}
            </div>
          </div>

          <div className="ta-hero-visual" aria-label="Architecture summary">
            <TerminalBar title="architecture.system" />
            <div className="ta-hero-terminal">
              <p className="mono"><span className="ta-prompt">$</span> describe --layers</p>
              <div className="ta-mini-stack">
                <div><span>01</span><strong>Custom frontend</strong><small>Astro · React · TypeScript</small></div>
                <i aria-hidden="true" />
                <div><span>02</span><strong>Typed integration layer</strong><small>Adapters · Models · Server routes</small></div>
                <i aria-hidden="true" />
                <div><span>03</span><strong>Managed + external services</strong><small>Content · Forms · Calendar · Email</small></div>
              </div>
              <p className="ta-terminal-status mono"><span>●</span> production / operational</p>
            </div>
          </div>

          <div className="ta-snapshot" aria-label="Project snapshot">
            <div><strong>Production</strong><span>customer-facing application</span></div>
            <div><strong>Typed</strong><span>integration boundary</span></div>
            <div><strong>SSR</strong><span>content-first delivery</span></div>
            <div><strong>Direct</strong><span>calendar-connected booking</span></div>
          </div>
        </section>

        <section className="ta-section ta-overview" aria-labelledby="overview-title">
          <SectionHeading
            index="01"
            eyebrow="Project overview"
            title="A custom production application with a practical operating model."
            description="The project replaces a conventional builder-led frontend while preserving straightforward content and operations management."
          />
          <div className="ta-overview-grid">
            <div className="ta-prose">
              <p>
                I rebuilt an existing production website as a custom application, with Astro and TypeScript owning the
                page structure, responsive user experience, and integration logic.
              </p>
              <p>
                The central architectural requirement was to separate the custom presentation layer from frequently
                changing content and operational records managed outside the codebase.
              </p>
              <p>
                The resulting headless system separates presentation from operations. The frontend remains fully custom,
                while managed content and business services are consumed through SDKs and APIs.
              </p>
            </div>
            <aside className="ta-ownership" aria-label="Personal engineering ownership">
              <p className="ta-card-label mono">personally_engineered</p>
              {ownership.map(([title, detail], index) => (
                <div className="ta-ownership-item" key={title}>
                  <span className="mono">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="ta-section" aria-labelledby="problem-title">
          <SectionHeading
            index="02"
            eyebrow="The architectural problem"
            title="Custom frontend without sacrificing business manageability."
            description="The design needed to resolve a real product tradeoff—not merely choose a frontend framework."
          />
          <div className="ta-tradeoff-grid">
            {tradeoffs.map((tradeoff) => (
              <article className={`ta-tradeoff-card ${tradeoff.chosen ? "is-chosen" : ""}`} key={tradeoff.title}>
                <div className="ta-tradeoff-top">
                  <span className="ta-tradeoff-marker mono">{tradeoff.marker}</span>
                  {tradeoff.chosen && <span className="ta-chosen-label mono">chosen architecture</span>}
                </div>
                <h3>{tradeoff.title}</h3>
                <p>{tradeoff.detail}</p>
                <div className="ta-mini-tags">
                  {tradeoff.tags.map((tag) => <span className="mono" key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="ta-principle mono">
            <span className="ta-principle-prompt">decision://</span>
            Code owns the experience. Managed services own routine business operations.
          </div>
        </section>

        <section className="ta-section" id="system-architecture" aria-labelledby="system-title">
          <SectionHeading
            index="03"
            eyebrow="System architecture"
            title="A thin, typed boundary between the UI and external systems."
            description="Pages consume stable application models rather than coupling presentation logic to third-party response formats."
          />
          <div className="ta-architecture-shell">
            <TerminalBar title="system-map.html" />
            <div className="ta-architecture-map" role="img" aria-label="System architecture from browser through the Astro application and typed integration layer to managed business and external services">
              <Node eyebrow="Request" title="Browser / visitor" items={["Server-rendered HTML", "Interactive booking and forms"]} tone="visitor" />
              <FlowArrow label="HTTPS" />
              <Node eyebrow="Application" title="Astro frontend" items={["SSR pages", "React islands", "TypeScript components", "Responsive UI"]} tone="frontend" />
              <FlowArrow label="typed calls" />
              <Node eyebrow="Boundary" title="Integration + data layer" items={["API adapters", "Domain models", "Guarded fallbacks", "Server routes"]} tone="adapter" />
              <div className="ta-branch" aria-hidden="true"><i /><span /><i /></div>
              <div className="ta-service-grid">
                <Node eyebrow="Managed business platform" title="Content + operations" items={["Headless CMS", "Forms and CRM", "Articles", "Analytics", "Hosting / CDN / SSL"]} tone="managed" />
                <Node eyebrow="External services" title="Scheduling + delivery" items={["Google Calendar API", "Google Cloud", "Confirmation email workflow"]} tone="external" />
              </div>
            </div>
          </div>
        </section>

        <section className="ta-section" aria-labelledby="frontend-title">
          <SectionHeading
            index="04"
            eyebrow="Frontend architecture"
            title="Mostly server rendered, selectively interactive."
            description="The application uses client-side JavaScript where state is valuable rather than turning every page into a single-page application."
          />
          <div className="ta-three-grid">
            <article className="ta-technology-card">
              <span className="ta-tech-number mono">01 / framework</span>
              <h3>Astro</h3>
              <p>Server-rendered pages fit a content-heavy production site and keep the default delivery model centered on HTML.</p>
              <code>output: &quot;server&quot;</code>
            </article>
            <article className="ta-technology-card">
              <span className="ta-tech-number mono">02 / interaction</span>
              <h3>React islands</h3>
              <p>Client-side state is isolated to experiences such as the booking wizard and custom forms.</p>
              <code>client:load / client:only</code>
            </article>
            <article className="ta-technology-card">
              <span className="ta-tech-number mono">03 / contracts</span>
              <h3>TypeScript</h3>
              <p>Domain types and API contracts make external integrations more predictable and safer to evolve.</p>
              <code>external → adapter → model</code>
            </article>
          </div>
          <div className="ta-render-model">
            <div>
              <p className="ta-card-label mono">render_model</p>
              <h3>HTML first</h3>
              <p>Content pages are rendered on the server and delivered as complete documents.</p>
            </div>
            <span className="mono" aria-hidden="true">+</span>
            <div>
              <p className="ta-card-label mono">interaction_model</p>
              <h3>Islands where useful</h3>
              <p>Focused React components hydrate only the interactive parts of the page.</p>
            </div>
            <span className="mono" aria-hidden="true">=</span>
            <div className="is-result">
              <p className="ta-card-label mono">application</p>
              <h3>Content + application behavior</h3>
              <p>A server-rendered site that can still support rich, stateful workflows.</p>
            </div>
          </div>
        </section>

        <section className="ta-section" aria-labelledby="data-title">
          <SectionHeading
            index="05"
            eyebrow="Headless data architecture"
            title="Content and presentation can change independently."
            description="The frontend owns how information is presented; managed services own the frequently changing business records."
          />
          <div className="ta-ownership-split">
            <article>
              <p className="ta-card-label mono">code_owns</p>
              <h3>Customer experience</h3>
              <ul>
                <li>Page structure and components</li>
                <li>Responsive styling and interaction</li>
                <li>Application and booking logic</li>
                <li>API integration boundaries</li>
              </ul>
            </article>
            <div className="ta-split-divider mono" aria-hidden="true">⇄</div>
            <article>
              <p className="ta-card-label mono">managed_services_own</p>
              <h3>Business content</h3>
              <ul>
                <li>Structured content records</li>
                <li>Scheduling configuration</li>
                <li>Publishing and form submissions</li>
                <li>Operational records</li>
              </ul>
            </article>
          </div>

          <div className="ta-adapter-feature">
            <div className="ta-adapter-copy">
              <p className="ta-card-label mono">adapter_pattern</p>
              <h3>Pages never need to understand raw external responses.</h3>
              <p>
                SDK and API data is translated once at the integration boundary. Astro pages and React components then
                consume stable domain objects that match the needs of the application.
              </p>
              <ul>
                <li>Isolates vendor-specific response formats</li>
                <li>Reduces coupling in presentation components</li>
                <li>Centralizes fallback and error handling</li>
                <li>Creates predictable, typed application contracts</li>
              </ul>
            </div>
            <div className="ta-adapter-diagram" role="img" aria-label="External SDK and API data flows through typed adapters into domain models and then Astro pages and components">
              <span className="mono">External SDK / API</span>
              <i aria-hidden="true" />
              <span className="mono is-highlight">Typed adapter layer</span>
              <i aria-hidden="true" />
              <span className="mono">Domain models</span>
              <i aria-hidden="true" />
              <span className="mono">Astro pages / components</span>
            </div>
          </div>
          <p className="ta-inline-note mono"><span>benefit:</span> routine business updates do not require frontend source changes or a new application release.</p>
        </section>

        <section className="ta-section ta-booking" aria-labelledby="booking-title">
          <SectionHeading
            index="06"
            eyebrow="Custom booking system"
            title="A direct scheduling workflow built around Google Calendar."
            description="Instead of embedding a generic scheduling widget, I built a custom workflow that validates availability against Google Calendar through trusted server routes."
          />

          <div className="ta-booking-summary">
            <div>
              <p className="ta-card-label mono">scheduling_source_of_truth</p>
              <h3>Google Calendar</h3>
              <p>Fresh busy periods determine which appointment times can be offered and where confirmed events are created.</p>
            </div>
            <div className="ta-booking-summary-arrow mono" aria-hidden="true">⇄</div>
            <div>
              <p className="ta-card-label mono">custom_application_layer</p>
              <h3>Booking engine</h3>
              <p>Availability rules, lead time, slot locking, validation, and confirmations stay under application control.</p>
            </div>
          </div>

          <ol className="ta-booking-flow" aria-label="Twelve-step appointment booking flow">
            {bookingSteps.map(([number, title, detail]) => (
              <li key={number}>
                <span className="ta-step-number mono">{number}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </li>
            ))}
          </ol>

          <div className="ta-concerns">
            {engineeringConcerns.map(([title, detail], index) => (
              <article key={title}>
                <span className="mono">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ta-section" aria-labelledby="content-title">
          <SectionHeading
            index="07"
            eyebrow="Content + business integrations"
            title="Custom interfaces on top of managed workflows."
            description="Publishing and lead capture remain simple for the business while the public-facing experience stays consistent with the custom frontend."
          />
          <div className="ta-integration-grid">
            <article className="ta-integration-card">
              <p className="ta-card-label mono">managed_article_publishing</p>
              <h3>Content publishing</h3>
              <p>Editors can publish content without developer involvement. The frontend queries the external content service and renders listing and detail routes.</p>
              <Pipeline
                label="Business dashboard publishes through the content API to Astro article listing and detail pages"
                steps={["Business dashboard", "Content API", "Astro frontend", "/articles", "/articles/[slug]"]}
              />
            </article>
            <article className="ta-integration-card">
              <p className="ta-card-label mono">forms_and_crm</p>
              <h3>Contact workflow</h3>
              <p>A custom form posts through a trusted server route into managed forms and contact infrastructure while preserving the application’s UI.</p>
              <Pipeline
                label="Custom form submits through a server API route to forms and CRM services and the business dashboard"
                steps={["Custom form", "Server API", "Forms service", "CRM", "Business dashboard"]}
              />
            </article>
          </div>
        </section>

        <section className="ta-section ta-security" aria-labelledby="security-title">
          <SectionHeading
            index="08"
            eyebrow="Privacy + security"
            title="Trusted integrations stay on the server."
          />
          <div className="ta-security-grid">
            <div className="ta-security-terminal">
              <TerminalBar title="security.boundary" />
              <div>
                <p className="mono"><span>allow</span> public content reads</p>
                <p className="mono"><span>allow</span> validated form requests</p>
                <p className="mono"><span className="is-private">protect</span> calendar credentials</p>
                <p className="mono"><span className="is-private">protect</span> privileged operations</p>
                <p className="mono"><span className="is-private">exclude</span> PII from analytics events</p>
              </div>
            </div>
            <ul className="ta-security-list">
              <li><strong>Server-only credentials.</strong> API secrets and trusted service access are never shipped in browser bundles.</li>
              <li><strong>Controlled write paths.</strong> Booking and contact operations cross validated server endpoints.</li>
              <li><strong>Analytics minimization.</strong> Booking and form payloads are not intentionally written to analytics; events avoid personal information.</li>
              <li><strong>Isolated integrations.</strong> API-specific details live behind adapters and server modules rather than leaking into UI code.</li>
            </ul>
          </div>
        </section>

        <section className="ta-section" aria-labelledby="decisions-title">
          <SectionHeading
            index="09"
            eyebrow="Engineering decisions"
            title="Deliberate tradeoffs matched to the product."
          />
          <div className="ta-decisions-grid">
            {decisions.map(([title, detail], index) => (
              <article key={title}>
                <span className="mono">ADR-{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ta-section" aria-labelledby="stack-title">
          <SectionHeading
            index="10"
            eyebrow="Technology stack"
            title="Tools organized by architectural responsibility."
          />
          <div className="ta-stack-grid">
            {stack.map(([category, items]) => (
              <article key={category}>
                <p className="ta-card-label mono">{category.toLowerCase().replaceAll(" ", "_")}</p>
                <h3>{category}</h3>
                <ul>
                  {items.map((item) => <li className="mono" key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="ta-section ta-outcome" aria-labelledby="outcome-title">
          <div className="ta-outcome-card">
            <div className="ta-outcome-copy">
              <p className="ta-eyebrow mono">11 / result</p>
              <h2 id="outcome-title">Custom application control. Managed operational convenience.</h2>
              <p>
                The final product combines a custom customer-facing experience with managed infrastructure. Content,
                forms, and scheduling configuration remain decoupled from presentation code, while the frontend and
                booking logic are engineered as typed application layers.
              </p>
              <p>
                The scheduling flow checks fresh Calendar availability, filters conflicts, revalidates submissions, and
                creates events through protected server-side integrations.
              </p>
            </div>
            <ul className="ta-outcome-list">
              {outcomes.map((outcome) => <li key={outcome}><span aria-hidden="true">✓</span>{outcome}</li>)}
            </ul>
          </div>
        </section>
      </main>

      <footer className="ta-footer">
        <p className="mono"><span>thang@portfolio</span>:~/projects$ status --complete</p>
      </footer>
    </div>
  );
}

export default TechnicalArchitecturePage;
