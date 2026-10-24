"use client";

import { useEffect } from "react";

/** Fit the inquiry form to the viewport; hide the site footer on this route. */
export default function ContactUsLayout({ children }) {
  useEffect(() => {
    document.documentElement.classList.add("dp-contact-route");
    return () => document.documentElement.classList.remove("dp-contact-route");
  }, []);

  return children;
}
