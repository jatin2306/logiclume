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
  const baseStyles = "font-semibold rounded-md transition hover:brightness-110 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
    secondary: "bg-[var(--color-secondary)] text-white",
    accent: "bg-[var(--color-accent)] text-[var(--color-on-primary)]",
    outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
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
