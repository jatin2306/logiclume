/** LogicLume mark. */
const LOGO_W = 447;
const LOGO_H = 442;
const MARK_VIEW = "0 0 447 442";

export default function BrandLogoMark({ className = "", size = "hero" }) {
  return (
    <div className={`dp-brand-mark dp-brand-mark--${size} ${className}`.trim()} aria-hidden="true">
      <svg
        className="dp-brand-mark-svg"
        viewBox={MARK_VIEW}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <image
          href="/images/logo-mark.png"
          x="0"
          y="0"
          width={LOGO_W}
          height={LOGO_H}
          preserveAspectRatio="xMinYMid meet"
        />
      </svg>
    </div>
  );
}
