"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import {
  CONSENT_EVENT,
  readConsent,
  writeConsent,
} from "../lib/cookieConsent";
import "./cookie-consent.css";

export default function CookieConsent() {
  const titleId = useId();
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState(null);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const current = readConsent();
    setConsent(current);
    setAnalytics(Boolean(current?.analytics));
    setReady(true);

    const open = () => {
      const latest = readConsent();
      setAnalytics(Boolean(latest?.analytics));
      setPreferences(true);
    };

    window.addEventListener(CONSENT_EVENT, open);
    return () => window.removeEventListener(CONSENT_EVENT, open);
  }, []);

  if (!ready) return null;
  if (consent && !preferences) return null;

  function acceptAll() {
    setConsent(writeConsent({ analytics: true }));
    setAnalytics(true);
    setPreferences(false);
  }

  function rejectOptional() {
    setConsent(writeConsent({ analytics: false }));
    setAnalytics(false);
    setPreferences(false);
  }

  function savePreferences() {
    setConsent(writeConsent({ analytics }));
    setPreferences(false);
  }

  return (
    <div className="cookie-consent" role="dialog" aria-labelledby={titleId}>
      <div className="cookie-consent-card">
        <div className="cookie-consent-copy">
          <p id={titleId} className="cookie-consent-title">
            Cookies
          </p>
          <p>
            We use a cookie to remember this choice. Analytics cookies run only if you allow them.{" "}
            <Link href="/privacy-policy">Privacy</Link>
          </p>
        </div>

        {preferences ? (
          <fieldset className="cookie-consent-options">
            <legend className="sr-only">Cookie categories</legend>
            <label className="cookie-consent-option">
              <input type="checkbox" checked disabled readOnly />
              <span>
                <strong>Essential</strong>
                <small>Stores your cookie choice on this browser.</small>
              </span>
            </label>
            <label className="cookie-consent-option">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span>
                <strong>Analytics</strong>
                <small>Helps us see which pages are used. Off until you allow it.</small>
              </span>
            </label>
          </fieldset>
        ) : null}

        <div className="cookie-consent-actions">
          {preferences ? (
            <>
              <button type="button" className="cookie-consent-ghost" onClick={() => setPreferences(false)}>
                Back
              </button>
              <button type="button" className="cookie-consent-accept" onClick={savePreferences}>
                Save
              </button>
            </>
          ) : (
            <>
              <button type="button" className="cookie-consent-text" onClick={() => setPreferences(true)}>
                Customize
              </button>
              <button type="button" className="cookie-consent-ghost" onClick={rejectOptional}>
                Reject
              </button>
              <button type="button" className="cookie-consent-accept" onClick={acceptAll}>
                Accept
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
