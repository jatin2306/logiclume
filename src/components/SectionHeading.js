export default function SectionHeading({
  title,
  description,
  label,
  centered = true,
  className = "",
  twoColor = false,
  coloredWords = 1,
  dark = false,
  compact = false,
}) {
  const alignmentClass = centered
    ? "text-center items-center"
    : "text-left items-start";

  const getTitleParts = () => {
    if (!twoColor || !title) return { main: title, accent: "" };

    const words = title.split(" ");
    if (words.length <= coloredWords) return { main: title, accent: "" };

    const accentWords = words.splice(-coloredWords);
    const mainText = words.join(" ");
    return { main: mainText, accent: accentWords.join(" ") };
  };

  const { main, accent } = getTitleParts();

  const titleColor = dark ? "text-white" : "text-[var(--color-text)]";
  const descColor = dark ? "text-[var(--color-text-muted-dark)]" : "text-[var(--color-text-muted)]";
  const labelClass = dark ? "section-label-dark" : "section-label-light";

  return (
    <div
      className={`flex flex-col ${alignmentClass} mb-2 md:mb-6 w-full ${className}`}
    >
      {label && (
        <span className={`${labelClass} mb-4`}>{label}</span>
      )}

      {title && (
        <h2
          className={`font-display font-bold leading-[1.15] w-full ${titleColor} ${
            compact
              ? "text-xl sm:text-2xl lg:text-[clamp(1.5rem,2.4vw,2rem)] mb-2 sm:mb-3"
              : "text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(2rem,3.5vw,2.75rem)] mb-4"
          }`}
        >
          <span>{main}</span>
          {accent && (
            <span className={dark ? " text-gradient" : " text-[var(--color-accent)]"}>
              {" "}{accent}
            </span>
          )}
        </h2>
      )}

      {description && (
        <div className={`flex flex-col w-full ${compact ? "gap-2 sm:gap-2.5" : "gap-4"}`}>
          {Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <p
                key={index}
                className={`${compact ? "text-sm sm:text-[0.9375rem]" : "text-base md:text-lg"} ${descColor} leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className={`${compact ? "text-sm sm:text-[0.9375rem]" : "text-base md:text-lg"} ${descColor} leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
