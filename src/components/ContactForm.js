"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SiteContainer from "./SiteContainer";
import "./contact-page.css";

const initialFormState = { name: "", email: "", phone: "", service: "", message: "" };

const channels = [
  {
    id: "phone",
    icon: Phone,
    label: "Call the team",
    detail: "Weekdays, 10:00–19:00 IST. A project lead picks up.",
    value: "+91 92052 10930",
    href: "tel:+919205210930",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email the team",
    detail: "Share a brief, a deck, or a link. We read every note.",
    value: "info@logiclume.com",
    href: "mailto:info@logiclume.com",
  },
  {
    id: "office",
    icon: MapPin,
    label: "Noida office",
    detail: "Product engineering team, on the ground in India.",
    value: "Noida, India",
  },
];

const nextSteps = [
  { title: "Share the brief", text: "Product, timeline, and what you need built." },
  { title: "Reply within 24 hours", text: "A real person, not an autoresponder." },
  { title: "Plan and team", text: "Scope, stack, and who would build it." },
];

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile App" },
  { value: "design", label: "UI/UX Design" },
  { value: "commerce", label: "E-Commerce" },
  { value: "ai", label: "AI Solutions" },
  { value: "marketing", label: "Digital Marketing" },
];

export default function ContactForm({ embedded = false }) {
  const introRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    const intro = introRef.current;
    const form = formRef.current;
    if (!intro || !form) return undefined;

    const syncFromForm = () => {
      const maxForm = form.scrollHeight - form.clientHeight;
      const maxIntro = intro.scrollHeight - intro.clientHeight;
      intro.scrollTop = maxForm > 0 ? (form.scrollTop / maxForm) * maxIntro : 0;
    };

    const onIntroWheel = (event) => {
      if (event.target.closest("a, button")) return;
      form.scrollTop += event.deltaY;
      event.preventDefault();
    };

    form.addEventListener("scroll", syncFromForm, { passive: true });
    intro.addEventListener("wheel", onIntroWheel, { passive: false });
    return () => {
      form.removeEventListener("scroll", syncFromForm);
      intro.removeEventListener("wheel", onIntroWheel);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "success", message: "Thank you! Your inquiry has been received. We'll contact you within 24 hours." });
    setFormData(initialFormState);
  };

  const content = (
    <div className="contact-split">
      <div className="contact-split-intro" ref={introRef}>
        <span className="contact-split-badge">
          <i aria-hidden />
          Start a project
        </span>
        <h1 id={embedded ? "contact-modal-title" : undefined}>
          Let&apos;s build your digital future
        </h1>
        <p>
          Tell us what you want to launch. Or reach the team directly — phone, email, and
          office are listed here.
        </p>
        <ul className="contact-split-channels">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <li key={channel.id}>
                <span className="contact-split-channel-icon" aria-hidden>
                  <Icon size={16} />
                </span>
                <div>
                  <strong>{channel.label}</strong>
                  <p>{channel.detail}</p>
                  {channel.href ? (
                    <a href={channel.href}>{channel.value}</a>
                  ) : (
                    <span className="contact-split-channel-value">{channel.value}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="contact-split-next">
          <p className="contact-split-next-label">What happens next</p>
          <ol className="contact-split-steps">
          {nextSteps.map((step, index) => (
            <li key={step.title}>
              <span>{index + 1}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        </div>
      </div>

      <form className="contact-split-form" ref={formRef} onSubmit={handleSubmit} noValidate>
        <div className="contact-split-form-head">
          <h2>Tell us about the project</h2>
          <p>Name, a way to reach you, and a short note are enough to start.</p>
        </div>
        <label>
          <span>Your name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            autoComplete="name"
            required
            aria-required="true"
          />
        </label>
        <label>
          <span>Your phone</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            autoComplete="tel"
            required
            aria-required="true"
          />
        </label>
        <label>
          <span>Your email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="email"
            required
            aria-required="true"
          />
        </label>
        <label>
          <span>Services</span>
          <select name="service" value={formData.service} onChange={handleChange}>
            {serviceOptions.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="contact-split-message">
          <span>Project details</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What are you building, and when do you want to start?"
            rows={4}
          />
        </label>

        {status.message ? (
          <p
            role={status.type === "error" ? "alert" : "status"}
            className={`contact-split-status contact-split-status--${status.type}`}
          >
            {status.message}
          </p>
        ) : null}

        <div className="contact-split-form-foot">
          <p>We reply within 24 hours. Your note stays with the LogicLume team.</p>
          <button type="submit" className="contact-split-submit">
            Send message
          </button>
        </div>
      </form>
    </div>
  );

  if (embedded) {
    return <div className="contact-embed">{content}</div>;
  }

  return (
    <section className="contact-page">
      <SiteContainer className="contact-page-inner">{content}</SiteContainer>
    </section>
  );
}
