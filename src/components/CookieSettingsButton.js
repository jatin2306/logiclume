"use client";

import { openCookieSettings } from "../lib/cookieConsent";

export default function CookieSettingsButton() {
  return (
    <button type="button" className="site-footer-cookie" onClick={openCookieSettings}>
      Cookies
    </button>
  );
}
