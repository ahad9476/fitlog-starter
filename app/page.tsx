import Hero from "@/components/Hero";
import LibraryGrid from "@/components/LibraryGrid";
import { getAllWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getAllWorkouts();

  return (
    <main>
      <Hero />
      <LibraryGrid workouts={workouts} />
    </main>
  );
}
