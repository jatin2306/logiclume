"use client";

import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";

const initialFormState = { name: "", email: "", phone: "", message: "" };

function Field({ id, label, children }) {
  return (
    <div className="nav-mega-contact-field">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

export default function NavContactMegaForm({ onNavigate, compactLinkHref = "#contact", fieldsOnly = false }) {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({
      type: "success",
      message: "Thank you! We'll contact you within 24 hours.",
    });
    setFormData(initialFormState);
  };

  const form = (
    <form onSubmit={handleSubmit} className="nav-mega-contact-fields">
      <div className="nav-mega-contact-row nav-mega-contact-row-tight">
        <Field id="nav-contact-name" label="Full name *">
          <input
            type="text"
            id="nav-contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="nav-mega-contact-input"
            autoComplete="name"
          />
        </Field>
        <Field id="nav-contact-email" label="Work email *">
          <input
            type="email"
            id="nav-contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="nav-mega-contact-input"
            autoComplete="email"
          />
        </Field>
      </div>
      <div className="nav-mega-contact-row nav-mega-contact-row-tight">
        <Field id="nav-contact-phone" label="Phone / WhatsApp *">
          <input
            type="tel"
            id="nav-contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 …"
            className="nav-mega-contact-input"
            autoComplete="tel"
          />
        </Field>
        <Field id="nav-contact-message" label="Project summary *">
          <input
            type="text"
            id="nav-contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Web app, MVP, redesign…"
            className="nav-mega-contact-input"
          />
        </Field>
      </div>

      {status.message && (
        <p
          className={`nav-mega-contact-status ${
            status.type === "success"
              ? "nav-mega-contact-status-success"
              : "nav-mega-contact-status-error"
          }`}
          role="status"
        >
          {status.message}
        </p>
      )}

      <button type="submit" className="nav-mega-contact-submit group">
        <Send size={16} aria-hidden="true" />
        Submit inquiry
        <ArrowRight size={16} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
    </form>
  );

  if (fieldsOnly) {
    return (
      <div className="nav-mega-contact-form-card nav-mega-contact-form-card--hero">
        <header className="nav-mega-contact-form-head">
          <span className="nav-mega-contact-form-head-icon" aria-hidden="true">
            <Send size={18} />
          </span>
          <div>
            <p className="nav-mega-contact-form-kicker">Primary contact</p>
            <h4 className="nav-mega-contact-form-title">Send your inquiry</h4>
          </div>
        </header>
        {form}
      </div>
    );
  }

  return (
    <div className="nav-mega-contact-form-inner">
      <div className="nav-mega-contact-form-card">{form}</div>
      <footer className="nav-mega-contact-footer">
        <a href={compactLinkHref} className="nav-mega-contact-full-link" onClick={onNavigate}>
          Full contact page
          <ArrowRight size={12} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
