"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard({
  imageSrc,
  title,
  category,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-md">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 text-white transition duration-500 group-hover:translate-y-0">

        <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold">
          {category}
        </span>

        <h3 className="mt-3 text-xl font-bold">
          {title}
        </h3>

        <button className="mt-5 flex items-center gap-2 text-sm font-semibold">
          View Project
          <ArrowUpRight size={16} />
        </button>

      </div>

    </div>
  );
}