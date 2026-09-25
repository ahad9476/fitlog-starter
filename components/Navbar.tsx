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
    <header className="sticky top-0 z-50 bg-[#000000] backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo.png" alt="FitLog" className="h-8 w-8" />
          <span className="font-display text-lg tracking-wide text-white hidden sm:inline">
            FITLOG
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${active ? "text-accent hover:bg-[#1A2312] px-3 py-1 rounded" : "text-muted hover:bg-[#1A2312] px-3 py-1 rounded"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/my-plan" className="flex items-center gap-2 ">
            <span className="text-sm font-semibold text-white">Plan</span>
            <span className="h-6 w-6 flex items-center justify-center bg-accent text-black text-xs font-bold rounded-full">
              {plan.length}
            </span>
          </Link>
          <Link
            href="/my-plan" className="flex items-center gap-2 ">
            <span className="text-sm font-semibold text-white">Saved</span>
            <span className="h-6 w-6 flex items-center justify-center  rounded-full border border-white text-xs font-bold">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
