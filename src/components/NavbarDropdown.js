import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarDropdown({ title, items, isActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const path = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 px-3 py-2 font-semibold whitespace-nowrap transition
          ${isActive ? "text-[var(--color-secondary)]" : "text-gray-900 hover:text-[var(--color-secondary)]"}
        `}
      >
        {title} <span className="flex xl:hidden">▾</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[220px] max-w-xs z-50">
          {items.map((item) => {
            const itemIsActive = path === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 whitespace-nowrap transition
                    ${
                      itemIsActive
                        ? "text-[var(--color-secondary)] font-semibold bg-[var(--color-secondary)]/10"
                        : "text-gray-700 hover:bg-[var(--color-secondary)]/10"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
