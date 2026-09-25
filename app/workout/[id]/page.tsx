import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutDetailClient from "@/components/WorkoutDetailClient";

export default async function WorkoutDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const workout = await getWorkoutById(params.id);

  if (!workout) {
    notFound(); // renders app/not-found.tsx
  }

  return <WorkoutDetailClient workout={workout} />;
}
