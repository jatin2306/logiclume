import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) {
  const baseStyles =
    "font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md shadow-[rgba(17,17,17,0.28)]",
    secondary:
      "bg-[var(--color-dark)] text-white hover:bg-[var(--color-dark-elevated)]",
    accent:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] shadow-md shadow-[rgba(17,17,17,0.32)]",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-surface-blue)]",
    "outline-light":
      "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      return (
        <a href={href} className={buttonStyles} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
