export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/about-us" },
};

export default function AboutRedirectLayout({ children }) {
  return children;
}
