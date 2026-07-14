import "@/lib/theme.css";

export default function Loader({ size = "md", color = "primary" }) {
    const sizeClasses = {
        sm: "h-5",
        md: "h-10",
        lg: "h-15",
    };

    const dotSizeClasses = {
        sm: "w-2 h-2",
        md: "w-3.5 h-3.5",
        lg: "w-5 h-5",
    };

    const colorVar = color === "primary" 
        ? "var(--color-primary)" 
        : color === "secondary" 
        ? "var(--color-secondary)"
        : color === "accent"
        ? "var(--color-accent)"
        : color === "on-primary"
        ? "var(--color-on-primary)"
        : color === "primary-light"
        ? "var(--color-primary-light)"
        : "var(--color-primary)";

    return (
        <div className={`flex items-center justify-center gap-2 ${sizeClasses[size]}`}>
            <div 
                className={`rounded-full animate-bounce ${dotSizeClasses[size]}`} 
                style={{ backgroundColor: colorVar, animationDelay: "-0.32s" }}
            />
            <div 
                className={`rounded-full animate-bounce ${dotSizeClasses[size]}`} 
                style={{ backgroundColor: colorVar, animationDelay: "-0.16s" }}
            />
            <div 
                className={`rounded-full animate-bounce ${dotSizeClasses[size]}`} 
                style={{ backgroundColor: colorVar }}
            />
        </div>
    );
}
