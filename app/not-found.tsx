import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="font-display text-accent text-6xl font-bold">404</p>
      <h1 className="font-display uppercase text-2xl font-bold mt-4">
        Page Not Found
      </h1>
      <p className="text-muted text-sm mt-2 max-w-xs">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 bg-accent text-black font-bold px-6 py-3 rounded-full hover:opacity-90 transition"
      >
        Go back home
      </Link>
    </main>
  );
}
