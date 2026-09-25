"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const { plan, saved, markDone, removeFromPlan, removeFromSaved, isLoaded } =
    usePlan();
  const [tab, setTab] = useState<Tab>("plan");

  const list = tab === "plan" ? plan : saved;

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

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <Metric label="Exercises" value={plan.length} />
        <Metric label="Minutes" value={totals.minutes} />
        <Metric label="Calories" value={totals.calories} />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-10 border-b border-border">
        {(["plan", "saved"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide border-b-2 -mb-px transition-colors ${
              tab === t
                ? "border-accent text-white"
                : "border-transparent text-muted hover:text-white"
            }`}
          >
            {t === "plan" ? "Today's Plan" : "Saved"}
          </button>
        ))}
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
    <div className="bg-surface border border-border rounded-xl2 p-4 text-center">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-muted uppercase tracking-wide mt-1">
        {label}
      </p>
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
