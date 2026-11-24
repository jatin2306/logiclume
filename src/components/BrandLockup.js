import Link from "next/link";
import "./brand-lockup.css";

export default function BrandLockup({ className = "", ...props }) {
  return (
    <Link
      href="/"
      className={`brand-lockup ${className}`.trim()}
      aria-label="Webologyx Technologies home"
      {...props}
    >
      <img
        src="/images/logo-wordmark.png"
        alt=""
        width={284}
        height={56}
        className="brand-lockup-mark"
        draggable="false"
      />
    </Link>
  );
}
