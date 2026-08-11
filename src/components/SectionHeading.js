export default function SectionHeading({
  title,
  description,
  label,
  centered = true,
  className = "",
  twoColor = false,
  coloredWords = 1,
  dark = false,
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
        <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-4 w-full ${titleColor}`}>
          <span>{main}</span>
          {accent && (
            <span className={dark ? " text-gradient" : " text-[var(--color-accent)]"}>
              {" "}{accent}
            </span>
          )}
        </h2>
      )}

      {description && (
        <div className="flex flex-col gap-4 w-full">
          {Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base md:text-lg ${descColor} leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className={`text-base md:text-lg ${descColor} leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
