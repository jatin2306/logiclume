import Link from "next/link";
import Image from "next/image";
import "./brand-lockup.css";

const LETTERS = Array.from("TECHNOLOGIES");

export default function BrandLockup({ className = "", ...props }) {
  return (
    <Link
      href="/"
      className={`brand-lockup ${className}`.trim()}
      aria-label="LogicLume Technologies home"
      {...props}
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={447}
        height={442}
        className="brand-lockup-mark"
        priority
        unoptimized
      />
      <span className="brand-lockup-word">
        <span className="brand-lockup-name">LogicLume</span>
        <span className="brand-lockup-sub" aria-label="Technologies">
          {LETTERS.map((letter, index) => (
            <span key={`${letter}-${index}`} aria-hidden="true">
              {letter}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}
