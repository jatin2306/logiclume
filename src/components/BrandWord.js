import "./brand-lockup.css";

export default function BrandWord({ className = "" }) {
  return (
    <span className={`brand-word ${className}`.trim()} aria-label="Webologyx">
      web<span className="brand-word-o">O</span>logyx
    </span>
  );
}
