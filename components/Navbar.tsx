"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

const links = [
  { href: "/", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="sticky top-0 z-50 bg-[#1E1E1E] backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo - left */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo.png" alt="FitLog" className="h-8 w-8" />
          <span className="font-display text-lg tracking-wide text-white hidden sm:inline">
            FITLOG
          </span>
        </Link>

        {/* Nav links - middle (hidden on very small screens, add a burger menu if you need one) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Badges - right */}
        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="px-3 py-1 rounded-full bg-accent text-black text-xs font-bold"
          >
            Plan {plan.length}
          </Link>
          <Link
            href="/my-plan"
            className="px-3 py-1 rounded-full border border-border text-xs font-bold text-white"
          >
            Saved {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}
