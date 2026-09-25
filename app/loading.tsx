export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-muted text-sm">Loading workouts…</p>
      </div>
    </div>
  );
}
