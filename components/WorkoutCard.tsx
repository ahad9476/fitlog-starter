import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/lib/types";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group bg-surface border border-border rounded-xl2 overflow-hidden hover:border-accent transition-colors flex flex-col"
    >
      <div className="aspect-square bg-surface2 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap gap-1">
          {workout.category?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-bold tracking-wide bg-surface2 text-muted px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display uppercase text-white font-semibold leading-snug">
          {workout.name}
        </h3>

        <p className="text-xs text-muted">{workout.equipment}</p>

        <div className="mt-auto flex items-center gap-4 text-xs text-muted pt-2">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} /> {workout.calories} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} /> {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
