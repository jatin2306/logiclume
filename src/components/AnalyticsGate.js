"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { CONSENT_CHANGE, readConsent } from "../lib/cookieConsent";

export default function AnalyticsGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(Boolean(readConsent()?.analytics));
    sync();
    window.addEventListener(CONSENT_CHANGE, sync);
    return () => window.removeEventListener(CONSENT_CHANGE, sync);
  }, []);

  if (!enabled) return null;
  return <Analytics />;
}
