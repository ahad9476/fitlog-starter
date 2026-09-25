"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Workout } from "@/lib/types";
import WorkoutCard from "./WorkoutCard";

type SortKey = "duration" | "calories" | "rating";

export default function LibraryGrid({ workouts }: { workouts: Workout[] }) {
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const sorted = useMemo(() => {
    return [...workouts].sort((a, b) => b[sortBy] - a[sortBy]);
    // using descending order; switch to (a[sortBy] - b[sortBy]) for ascending
  }, [workouts, sortBy]);

  return (
    <section id="library" className="mx-auto max-w-7xl px-4 md:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display uppercase text-3xl font-bold text-white">
            The Library
          </h2>
          <p className="text-muted text-sm mt-1">
            Twelve lifts covering every major muscle group.
          </p>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((w) => (
          <WorkoutCard key={w.id} workout={w} />
        ))}
      </div>
    </section>
  );
}
