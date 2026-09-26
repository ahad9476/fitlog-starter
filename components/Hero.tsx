import { ArrowDownCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center rounded-2xl bg-[#15171D]">
      <div>
        <p className="text-accent text-xs font-bold tracking-[0.2em] mb-3">
          WORKOUT LIBRARY
        </p>
        <h1 className="font-display uppercase text-4xl md:text-6xl font-bold leading-tight text-white">
          Train With Intent.Log
          <br />
           Every Set.
        </h1>
        <p className="mt-5 text-muted max-w-lg">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it 
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-black font-bold px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Browse Workouts
          
        </a>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src="/images/banner.png"
          alt="Workout illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}
