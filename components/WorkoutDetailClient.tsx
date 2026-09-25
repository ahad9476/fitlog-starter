"use client";

import { PlusCircle, Bookmark } from "lucide-react";
import { Workout } from "@/lib/types";
import { usePlan } from "@/context/PlanContext";

const specLabels: { key: keyof Workout; label: string }[] = [
  { key: "equipment", label: "EQUIPMENT" },
  { key: "difficulty", label: "DIFFICULTY" },
  { key: "sets", label: "SETS" },
  { key: "reps", label: "REPS" },
  { key: "duration", label: "DURATION" },
  { key: "calories", label: "CALORIES" },
  { key: "rating", label: "RATING" },
];

export default function WorkoutDetailClient({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved } = usePlan();

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 grid md:grid-cols-2 gap-10">
      {/* Left: image */}
      <div className="bg-surface border border-border rounded-xl2 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: details */}
      <div>
        <h1 className="font-display uppercase text-3xl md:text-4xl font-bold">
          {workout.name}
        </h1>
        <p className="text-muted mt-3">{workout.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {workout.category?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-bold bg-surface2 text-muted px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Key specs panel */}
        <div className="mt-6 bg-[#1E2330] border-border rounded-xl2 divide-y divide-border">
          {specLabels.map(({ key, label }) => (
            <div key={label} className="flex justify-between px-4 py-3 text-sm">
              <span className="text-muted">{label}</span>
              <span className="text-white font-medium">{String(workout[key])}</span>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-6">
          <h2 className="font-display uppercase text-lg font-semibold mb-3">
            Instructions
          </h2>
          <ol className="space-y-3">
            {workout.instructions?.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted">
                <span className="shrink-0 h-6 w-6 text-muted text-xs font-bold flex items-center justify-center">
                  {i + 1}.
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => addToPlan(workout)}
            className="inline-flex items-center gap-2 bg-accent text-black font-bold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            <PlusCircle size={18} />
            Add to today&apos;s plan
          </button>
          <button
            onClick={() => addToSaved(workout)}
            className="inline-flex items-center gap-2 border border-border text-white font-bold px-6 py-3 rounded-full hover:border-accent transition"
          >
            <Bookmark size={18} />
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}
