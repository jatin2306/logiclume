"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";
import SiteContainer from "./SiteContainer";

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

export default function ContactForm() {
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

  return (
    <section className="home-section section-light">
      <SiteContainer>
        <div className="text-center mb-12">
          <span className="section-label-orange mb-4">Contact Us</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-[var(--color-text)]">
            Let&apos;s chat about your{" "}
            <span className="text-[var(--color-primary)]">next big idea</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Tell us about your project and our team will get back to you with a tailored plan.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl card-elevated shadow-xl">
          <div className="grid lg:grid-cols-5">
            {/* Light blue info panel */}
            <div className="lg:col-span-2 relative overflow-hidden card-accent-blue p-10 lg:p-12">
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[rgba(245,130,32,0.1)] rounded-full blur-[80px]" />

              <div className="relative">
                <h3 className="font-display text-2xl font-bold text-[var(--color-text)]">
                  Ready to transform your business?
                </h3>
                <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                  Whether you need a website, mobile app, or complete digital transformation —
                  we&apos;re here to help.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    { icon: Phone, label: "Call Us", value: "+91 9758403169", href: "tel:+919758403169" },
                    { icon: Mail, label: "Email", value: "info@deopersindia.com", href: "mailto:info@deopersindia.com" },
                    { icon: MapPin, label: "Location", value: "4/126 Palm Olympia, Greater Noida 201306" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 rounded-2xl bg-white border border-[rgba(21,101,192,0.1)] p-4 shadow-sm">
                      <Icon size={20} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition mt-1 block font-medium">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-[var(--color-text)] mt-1 font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-8 lg:p-12 bg-white">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" className="w-full rounded-xl input-brand px-5 py-4 text-sm" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" className="w-full rounded-xl input-brand px-5 py-4 text-sm" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" className="w-full rounded-xl input-brand px-5 py-4 text-sm" />
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full rounded-xl input-brand px-5 py-4 text-sm text-[var(--color-text-muted)]">
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="text-sm font-medium text-[var(--color-text)] mb-3">Where do you need help?</p>
                  <div className="flex flex-wrap gap-2">
                    {helpOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleHelp(item)}
                        className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                          selectedHelp.includes(item)
                            ? "bg-[var(--color-primary)] text-white shadow-sm"
                            : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-blue)] border border-[var(--color-border)]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project... *" className="w-full rounded-xl input-brand px-5 py-4 text-sm resize-none" />

                {status.message && (
                  <div className={`rounded-xl border px-4 py-3 text-sm ${status.type === "success" ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"}`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] py-4 font-semibold text-white transition hover:shadow-lg hover:shadow-[rgba(245,130,32,0.25)]"
                >
                  <Send size={18} />
                  Submit Inquiry
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
