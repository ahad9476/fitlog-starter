"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";

type Tab = "plan" | "saved";
type SortKey = "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const { plan, saved, markDone, removeFromPlan, removeFromSaved, isLoaded } =
    usePlan();
  const [tab, setTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const rawList = tab === "plan" ? plan : saved;
  const list = useMemo(
    () => [...rawList].sort((a, b) => (b[sortBy] || 0) - (a[sortBy] || 0)),
    [rawList, sortBy]
  );

  const totals = plan.reduce(
    (acc, w) => ({
      minutes: acc.minutes + (w.duration || 0),
      calories: acc.calories + (w.calories || 0),
    }),
    { minutes: 0, calories: 0 }
  );

  return (
    <main className="mx-auto max-w-4xl px-4 md:px-8 py-12">
      <h1 className="font-display uppercase text-3xl md:text-4xl font-bold">
        My Plan
      </h1>
      <p className="text-muted mt-2">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics - single panel, 3 columns divided by lines */}
      <div className="mt-8 bg-surface border border-border rounded-xl2 grid grid-cols-3 divide-x divide-border">
        <Metric label="Exercises" value={plan.length} />
        <Metric label="Minutes" value={totals.minutes} />
        <Metric label="Calories" value={totals.calories} />
      </div>

      {/* Tabs (segmented control) + Sort By */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
        <div className="inline-flex bg-surface border border-border rounded-full p-1">
          {(["plan", "saved"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                tab === t
                  ? "bg-surface2 text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              {t === "plan" ? "Today's Plan" : "Saved"}
            </button>
          ))}
        </div>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
            className="appearance-none bg-surface border border-border text-white text-sm rounded-full pl-4 pr-9 py-2 focus:outline-none focus:border-accent"
          >
            <option value="duration">Sort By: Duration</option>
            <option value="calories">Sort By: Calories</option>
            <option value="rating">Sort By: Rating</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>
      </div>

      {/* List */}
      <div className="mt-6 space-y-3">
        {!isLoaded ? (
          <p className="text-muted text-sm py-10 text-center">
            Loading workouts…
          </p>
        ) : list.length === 0 ? (
          <EmptyState />
        ) : (
          list.map((item) => (
            <PlanWorkoutCard
              key={item.id}
              item={item}
              tab={tab}
              onMarkDone={tab === "plan" ? markDone : undefined}
              onRemove={tab === "plan" ? removeFromPlan : removeFromSaved}
            />
          ))
        )}
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-6 text-center sm:text-left">
      <p className="text-sm text-muted mb-2">{label}</p>
      <p className="text-3xl font-display font-bold text-white">{value}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16 border border-dashed border-border rounded-xl2">
      <h3 className="font-display uppercase text-xl font-bold">
        Nothing Here Yet
      </h3>
      <p className="text-muted text-sm mt-2 max-w-xs mx-auto">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 bg-accent text-black font-bold px-6 py-3 rounded-full hover:opacity-90 transition"
      >
        Go to workouts
      </Link>
    </div>
  );
}