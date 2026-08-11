export default function SiteContainer({ children, className = "", containerClassName = "", inner = true }) {
  return (
    <div className="site-wrap">
      <div className={`site-container ${containerClassName}`.trim()}>
        {inner ? (
          <div className={`site-container-inner ${className}`.trim()}>{children}</div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
