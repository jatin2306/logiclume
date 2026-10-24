"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";
import SiteContainer from "./SiteContainer";
import { allOffices } from "@/data/offices";
import "./contact-page.css";

const initialFormState = { name: "", email: "", phone: "", budget: "", message: "" };

const budgetOptions = [
  { value: "", label: "Select Budget Range" },
  { value: "5k-25k", label: "$5K - $25K" },
  { value: "25k-50k", label: "$25K - $50K" },
  { value: "50k-100k", label: "$50K - $100K" },
  { value: "100k+", label: "$100K+" },
];

const helpOptions = [
  "Web Development", "Mobile App", "UI/UX Design",
  "E-Commerce", "AI Solutions", "Digital Marketing",
];

export default function ContactForm({ embedded = false }) {
  const [formData, setFormData] = useState(initialFormState);
  const [selectedHelp, setSelectedHelp] = useState([]);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "idle", message: "" });
  };

  const toggleHelp = (item) => {
    setSelectedHelp((prev) =>
      prev.includes(item) ? prev.filter((h) => h !== item) : [...prev, item]
    );
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

    setStatus({ type: "success", message: "Thank you! Your inquiry has been received. We'll contact you within 24 hours." });
    setFormData(initialFormState);
    setSelectedHelp([]);
  };

  const content = (
    <>
        <header className="contact-page-head">
          <span className="section-label-orange">Contact Us</span>
          <h1 id={embedded ? "contact-modal-title" : undefined}>
            Let&apos;s chat about your{" "}
            <span className="text-[var(--color-primary)]">next big idea</span>
          </h1>
          <p className="contact-page-lead">
            Tell us about your project and our team will get back to you with a tailored plan.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl card-elevated contact-form-shell contact-page-shell">
          <div className="contact-page-grid">
            <div className="contact-info-panel">
              <div>
                <h2>Ready to transform your business?</h2>
                <p className="contact-page-aside-copy">
                  Whether you need a website, mobile app, or complete digital transformation —
                  we&apos;re here to help.
                </p>

                <div className="contact-page-details">
                  {[
                    { icon: Phone, label: "Call Us", value: "+91 9758403169", href: "tel:+919758403169" },
                    { icon: Mail, label: "Email", value: "info@deopersindia.com", href: "mailto:info@deopersindia.com" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="contact-page-detail">
                      <Icon size={18} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">{label}</p>
                        <a href={href} className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition mt-0.5 block font-medium">
                          {value}
                        </a>
                      </div>
                    </div>
                  ))}

                  <div className="contact-page-detail">
                    <MapPin size={18} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        Global offices
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[var(--color-text)] leading-snug">
                        {allOffices
                          .map((office) =>
                            office.id === "noida"
                              ? "India (HQ)"
                              : office.id === "usa"
                                ? "USA"
                                : "United Kingdom"
                          )
                          .join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel bg-white">
              <header className="contact-form-panel-head">
                <span className="contact-form-panel-icon" aria-hidden="true">
                  <Send size={20} />
                </span>
                <div>
                  <p className="contact-form-panel-kicker">Primary contact</p>
                  <h3 className="contact-form-panel-title">Send your inquiry</h3>
                  <p className="contact-form-panel-sub">
                    All fields marked * are required. We respond within one business day.
                  </p>
                </div>
              </header>
              <form onSubmit={handleSubmit} className="contact-form-panel-form" noValidate>
                <div className="grid sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="sr-only">Full name (required)</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      autoComplete="name"
                      required
                      aria-required="true"
                      className="w-full rounded-xl input-brand px-5 py-4 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email address (required)</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      autoComplete="email"
                      required
                      aria-required="true"
                      className="w-full rounded-xl input-brand px-5 py-4 text-sm"
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="sr-only">Phone number (required)</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      autoComplete="tel"
                      required
                      aria-required="true"
                      className="w-full rounded-xl input-brand px-5 py-4 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Budget range (optional)</span>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-xl input-brand px-5 py-4 text-sm text-[var(--color-text-muted)]"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <fieldset className="border-0 p-0 m-0">
                  <legend className="text-sm font-medium text-[var(--color-text)] mb-3">
                    Where do you need help? (optional)
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {helpOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleHelp(item)}
                        aria-pressed={selectedHelp.includes(item)}
                        className={`rounded-full px-4 py-2 text-xs font-medium transition min-h-[2.5rem] ${
                          selectedHelp.includes(item)
                            ? "bg-[var(--color-primary)] text-white shadow-sm"
                            : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-blue)] border border-[var(--color-border)]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="sr-only">Project details (required)</span>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project... *"
                    required
                    aria-required="true"
                    className="contact-page-message w-full rounded-xl input-brand px-5 py-4 text-sm resize-none"
                  />
                </label>

                {status.message ? (
                  <div
                    role={status.type === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="contact-page-submit group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] font-semibold text-white transition hover:shadow-lg hover:shadow-[rgba(245,130,32,0.25)]"
                >
                  <Send size={18} />
                  Submit Inquiry
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
    </>
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
