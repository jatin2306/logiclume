"use client";

import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";

const initialFormState = { name: "", email: "", phone: "", message: "" };

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
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name *"
          className="nav-mega-contact-input"
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Work email *"
          className="nav-mega-contact-input"
          autoComplete="email"
        />
      </div>
      <div className="nav-mega-contact-row nav-mega-contact-row-tight">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone / WhatsApp *"
          className="nav-mega-contact-input"
          autoComplete="tel"
        />
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Brief summary *"
          className="nav-mega-contact-input"
        />
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
        <Send size={14} aria-hidden="true" />
        Submit inquiry
        <ArrowRight size={14} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
    </form>
  );

  if (fieldsOnly) {
    return <div className="nav-mega-contact-form-card nav-mega-contact-form-card--flat">{form}</div>;
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
