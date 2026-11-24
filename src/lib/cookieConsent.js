export const CONSENT_COOKIE = "webologyx_consent";
export const CONSENT_EVENT = "webologyx:cookie-settings";
export const CONSENT_CHANGE = "webologyx:consent-change";

const MAX_AGE = 60 * 60 * 24 * 180;

export function readConsent() {
  if (typeof document === "undefined") return null;
  const row = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${CONSENT_COOKIE}=`));
  if (!row) return null;

  try {
    const value = JSON.parse(decodeURIComponent(row.slice(CONSENT_COOKIE.length + 1)));
    if (!value || value.v !== 1) return null;
    return { essential: true, analytics: Boolean(value.analytics) };
  } catch {
    return null;
  }
}

export function writeConsent({ analytics }) {
  const value = {
    v: 1,
    essential: true,
    analytics: Boolean(analytics),
    t: Date.now(),
  };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CONSENT_CHANGE));
  return { essential: true, analytics: Boolean(analytics) };
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
