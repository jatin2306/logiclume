export default function SectionHeading({
  title,
  description,
  centered = true,
  className = "",
  twoColor = false,
  coloredWords = 1,
}) {
  const alignmentClass = centered
    ? "text-center items-center"
    : "text-left items-start";

  // Split title into two parts for multi-color effect
  const getTitleParts = () => {
    if (!twoColor || !title) return { main: title, accent: "" };

    const words = title.split(" ");
    if (words.length <= coloredWords) return { main: title, accent: "" };

    const accentWords = words.splice(-coloredWords);
    const mainText = words.join(" ");
    return { main: mainText, accent: accentWords.join(" ") };
  };

  const { main, accent } = getTitleParts();

  return (
    <div
      className={`flex flex-col ${alignmentClass} mb-2 md:mb-6 w-full ${className}`}
    >
      {/* Title */}
      {title && (
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-2 w-full">
          <span className="text-[var(--color-black)]">{main}</span>
          {accent && <span className="text-[var(--color-primary)]"> {accent}</span>}
        </h2>
      )}

      {/* Description */}
      {description && (
        <div className="flex flex-col gap-4 w-full">
          {Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm md:text-base text-gray-600 leading-6 md:leading-7"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-sm md:text-base text-gray-600 leading-6 md:leading-7">
              {description}
            </p>
          )}
        </div>
      )}

    </div>
  );
}