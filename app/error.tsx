"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <AlertTriangle className="text-accent" size={48} />
      <h1 className="font-display uppercase text-2xl font-bold mt-4">
        Something Went Wrong
      </h1>
      <p className="text-muted text-sm mt-2 max-w-sm">
        We couldn&apos;t load this page — it might be a temporary issue with
        the workout data. Try again, or head back home.
      </p>

      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        <button
          onClick={reset}
          className="bg-accent text-black font-bold px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border border-border text-white font-bold px-6 py-3 rounded-full hover:border-accent transition"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}