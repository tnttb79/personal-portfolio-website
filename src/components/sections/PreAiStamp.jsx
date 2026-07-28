import { useId } from "react";
import "./pre-ai-stamp.scss";

const PreAiStamp = () => {
  const tipId = useId();

  return (
    <div className="pre-ai-stamp" tabIndex={0} aria-describedby={tipId}>
      <span className="stamp-ring stamp-ring-outer" aria-hidden="true" />
      <span className="stamp-ring stamp-ring-inner" aria-hidden="true" />
      <span className="stamp-era">Pre-AI Era</span>
      <span className="stamp-title">
        <span className="stamp-star" aria-hidden="true">
          ★
        </span>
        <span className="stamp-title-text">Certified 100% AI-Free</span>
        <span className="stamp-star" aria-hidden="true">
          ★
        </span>
      </span>
      <span className="stamp-divider" aria-hidden="true" />
      <span className="stamp-sub">No Artificial Intelligence Added</span>
      <span className="stamp-vintage">2019&ndash;2022</span>
      <span className="stamp-tooltip" role="tooltip" id={tipId}>
        Made with human intelligence, documentation, and naturally occurring bugs.
      </span>
    </div>
  );
};

export default PreAiStamp;
