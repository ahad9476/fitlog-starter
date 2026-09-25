"use client";

import Link from "next/link";
import { Clock, Flame, Star, CheckCircle2, X } from "lucide-react";
import { PlanItem } from "@/lib/types";

export default function PlanWorkoutCard({
  item,
  tab,
  onMarkDone,
  onRemove,
}: {
  item: PlanItem;
  tab: "plan" | "saved";
  onMarkDone?: (id: string | number) => void;
  onRemove: (id: string | number) => void;
}) {
  return (
    <div className="flex items-center gap-4 bg-surface border border-border rounded-xl2 p-3">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 rounded-lg object-cover shrink-0"
      />

      <div className="flex-1 min-w-0">
        <h3
          className={`font-display uppercase font-semibold truncate ${
            item.done ? "line-through text-muted" : "text-white"
          }`}
        >
          {item.name}
        </h3>
        <p className="text-xs text-muted truncate">{item.equipment}</p>
        <div className="flex items-center gap-3 text-xs text-muted mt-1">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {item.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={12} /> {item.calories} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={12} /> {item.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link
          href={`/workout/${item.id}`}
          className="text-xs font-semibold border border-border rounded-full px-3 py-1.5 hover:border-accent"
        >
          View Details
        </Link>
        {tab === "plan" && onMarkDone && (
          <button
            onClick={() => onMarkDone(item.id)}
            className="inline-flex items-center gap-1.5 bg-accent text-black text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            <CheckCircle2 size={14} />
            Mark as Done
          </button>
        )}
        <button
          onClick={() => onRemove(item.id)}
          title="Remove"
          className="p-2 rounded-full border border-border hover:border-red-400 text-muted hover:text-red-400"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}