import { useId } from "react";
import "./pre-ai-stamp.scss";

const PreAiStamp = () => {
  const tipId = useId();

  return (
    <div className="pre-ai-stamp" tabIndex={0} aria-describedby={tipId}>
      <span className="stamp-title">Certified Pre-AI Code</span>
      <span className="stamp-sub">Hand-coded while learning &middot; 2019&ndash;2022</span>
      <span className="stamp-tooltip" role="tooltip" id={tipId}>
        Built from scratch before I used AI coding tools. Just documentation, debugging, and lots of
        trial and error.
      </span>
    </div>
  );
};

export default PreAiStamp;
