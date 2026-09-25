export default function Footer() {
  return (
    <footer className="bg-[#090A0D] border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="FitLog" className="h-6 w-6" />
          <span className="font-display uppercase text-white font-semibold tracking-wide">
            FitLog
          </span>
        </div>
        <p className="text-xs text-muted text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
