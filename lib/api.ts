import { Workout } from "./types";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

// Fetches every workout for the Home page library grid.
export async function getAllWorkouts(): Promise<Workout[]> {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch workouts: ${res.status}`);
  }
  const data = await res.json();
  // If the API wraps the array in a key (e.g. { data: [...] }), unwrap it here:
  // return data.data as Workout[];
  return data as Workout[];
}

// Fetches a single workout for the Detail page.
export async function getWorkoutById(id: string): Promise<Workout | null> {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  return data as Workout;
}
