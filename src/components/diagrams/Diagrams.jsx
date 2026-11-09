import "./diagrams.scss";

export const StepFlow = ({ steps, label }) => (
  <ol className="step-flow" aria-label={label}>
    {steps.map((step) => (
      <li key={step}>{step}</li>
    ))}
  </ol>
);

export const Chain = ({ steps, label }) => (
  <ol className="chain" aria-label={label}>
    {steps.map((step) => (
      <li key={step}>{step}</li>
    ))}
  </ol>
);

export const LayerDiagram = ({ layers, services, label, size = "compact" }) => (
  <figure className={`layers layers--${size}`} aria-label={label}>
    <ol className="layers-stack">
      {layers.map((layer) => (
        <li className="layer" key={layer.title}>
          <strong>{layer.title}</strong>
          {layer.detail && <span>{layer.detail}</span>}
          {layer.items && (
            <ul>
              {layer.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li className="layers-services">
        <ul>
          {services.map((service) => {
            const item = typeof service === "string" ? { title: service } : service;
            return (
              <li className="layer" key={item.title}>
                <strong>{item.title}</strong>
                {item.detail && <span>{item.detail}</span>}
                {item.items && (
                  <ul>
                    {item.items.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </li>
    </ol>
  </figure>
);
