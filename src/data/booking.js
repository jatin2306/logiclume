const DEFAULT_CAL_BOOKING_URL =
  "https://cal.com/jatin-logiclume-call/30min?overlayCalendar=true";

/** Booking page URL from env (query params like overlayCalendar=true are preserved) */
export const CAL_BOOK_URL =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_CAL_BOOKING_URL?.trim()) ||
  DEFAULT_CAL_BOOKING_URL;

/** Iframe src — same event URL with Cal inline embed flags */
export function getCalEmbedUrl(bookUrl = CAL_BOOK_URL) {
  try {
    const url = new URL(bookUrl);
    url.searchParams.set("embed", "true");
    url.searchParams.set("overlayCalendar", "true");
    return url.toString();
  } catch {
    return "https://cal.com/jatin-logiclume-call/30min?embed=true&overlayCalendar=true";
  }
}

export const CAL_BOOK_EMBED_URL = getCalEmbedUrl(CAL_BOOK_URL);

export const BOOK_CONSULTANT = {
  role: "Senior Business Consultant",
  photo: null,
  tagline:
    "Pick a time that works for you — we'll talk through goals, delivery, and sensible next steps.",
  topics: [
    "Scope, timeline & priorities",
    "Dedicated teams & delivery model",
    "Budget and sensible next steps",
  ],
};
