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
    "font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md shadow-[rgba(21,101,192,0.25)]",
    secondary:
      "bg-[var(--color-dark)] text-white hover:bg-[var(--color-dark-elevated)]",
    accent:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] shadow-md shadow-[rgba(245,130,32,0.3)]",
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
