import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  number,
  title,
  description,
  features = [],
  color,
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Number */}
      <span className="absolute right-5 top-5 text-5xl font-black text-slate-100 group-hover:text-orange-100 transition">
        {number}
      </span>

      {/* Icon */}
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}
      >
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {features.slice(0, 3).map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

        <span className="text-sm font-semibold text-blue-600 group-hover:text-orange-500 transition">
          Learn More
        </span>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-orange-500 group-hover:text-white">
          <ArrowRight size={16} />
        </div>

      </div>
    </div>
  );
}