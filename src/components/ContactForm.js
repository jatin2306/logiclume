"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function HomeContact() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Please fill in all the fields before submitting." });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({
      type: "success",
      message: "Thank you! Your inquiry has been received. We’ll contact you soon.",
    });
    setFormData(initialFormState);
  };

  return (
    <section className="py-5 bg-slate-50">
      <div className="container-fluid mx-auto px-4 lg:px-8">

        <div className="overflow-hidden rounded-[32px] bg-white shadow-xl border border-slate-200">

          <div className="grid lg:grid-cols-2">

            {/* Left Side */}

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-10 lg:p-14 text-white">

              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />

              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                Contact Us
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight">
                Let's Build Your
                <span className="block text-orange-400">
                  Next Digital Project
                </span>
              </h2>

              <p className="mt-6 text-blue-100 leading-8">
                Need a website, mobile application, custom software, or
                digital marketing? Our experts are ready to help your
                business grow.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                  <Phone size={22} />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-sm text-blue-100">
                      +91 9758403169
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                  <Mail size={22} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-blue-100">
                      info@deopersindia.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                  <MapPin size={22} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-blue-100">
                      4/126 Palm Olympia Greater Noida (201306)
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="p-8 lg:p-12">

              <h3 className="text-3xl font-bold text-slate-900">
                Request a Free Consultation
              </h3>

              <p className="mt-3 text-slate-600">
                Fill out the form and our team will contact you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-600 focus:bg-white"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-600 focus:bg-white"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-600 focus:bg-white"
                />

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-600 focus:bg-white resize-none"
                />

                {status.message ? (
                  <div
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
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Send Inquiry

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}