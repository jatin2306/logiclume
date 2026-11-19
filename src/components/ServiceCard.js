import { ArrowRight } from "lucide-react";

const badgeClass = {
  blue: "icon-badge-blue",
  orange: "icon-badge-orange",
};

export default function ServiceCard({
  icon: Icon,
  number,
  title,
  description,
  features = [],
  badge = "blue",
}) {
  return (
    <div className="group home-card p-5 relative overflow-hidden">
      <span className="absolute right-5 top-5 text-5xl font-black text-[var(--color-surface-blue)] group-hover:text-[rgba(139,44,245,0.12)] transition">
        {number}
      </span>

      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${badgeClass[badge]} shadow-md`}>
        <Icon size={22} />
      </div>

      <h3 className="text-lg font-bold text-[var(--color-text)]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {features.slice(0, 3).map((item) => (
          <span
            key={item}
            className="rounded-full bg-[var(--color-surface-blue)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
        <span className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition">
          Learn More
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface)] transition group-hover:bg-[var(--color-accent)] group-hover:text-white">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}
