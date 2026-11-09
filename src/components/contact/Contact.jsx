import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socials } from "../../config/portfolio";
import "./contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ykv012d",
        "template_e0s34eo",
        formRef.current,
        "h6SEcqgKHUxxLVWhw"
      )
      .then(
        () => {
          setStatus("sent");
          formRef.current.reset();
        },
        (err) => {
          setStatus("error");
          console.error("EmailJS Error:", err);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-direct">
        <p className="contact-note">Email is the fastest way to reach me. I usually reply within a day.</p>
        <a className="contact-email text-link" href={`mailto:${socials.email}`}>{socials.email}</a>
        <dl className="contact-details">
          <div>
            <dt>Phone</dt>
            <dd><a className="text-link" href={`tel:${socials.phone.replace(/\s/g, "")}`}>{socials.phone}</a></dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{socials.location}</dd>
          </div>
          <div>
            <dt>Elsewhere</dt>
            <dd>
              <a className="text-link" href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              {", "}
              <a className="text-link" href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
            </dd>
          </div>
        </dl>
      </div>

      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" type="text" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" type="email" name="email" autoComplete="email" required />
        </div>
        <div className="field field--wide">
          <label htmlFor="c-msg">Message <span>optional</span></label>
          <textarea id="c-msg" name="message" rows={6} placeholder="A role, a project, or a question" />
        </div>
        <div className="form-actions">
          <button className="button button--primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending" : "Send message"}
          </button>
          <p className={`form-status form-status--${status}`} role="status" aria-live="polite">
            {status === "sent" && "Message sent. Thanks for reaching out."}
            {status === "error" && (
              <>
                Your message did not send. Try again, or email me at{" "}
                <a className="text-link" href={`mailto:${socials.email}`}>{socials.email}</a>.
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
