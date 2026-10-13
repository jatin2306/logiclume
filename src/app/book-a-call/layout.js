"use client";

import { useEffect } from "react";

/** Full-viewport booking: hide site footer so Cal embed fits one screen. */
export default function BookCallRouteLayout({ children }) {
  useEffect(() => {
    document.documentElement.classList.add("dp-book-call-route");
    return () => document.documentElement.classList.remove("dp-book-call-route");
  }, []);

  return children;
}
