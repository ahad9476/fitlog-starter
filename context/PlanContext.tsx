"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import toast from "react-hot-toast";
import { PlanItem, Workout } from "@/lib/types";

interface PlanContextType {
  plan: PlanItem[];
  saved: PlanItem[];
  addToPlan: (w: Workout) => void;
  addToSaved: (w: Workout) => void;
  markDone: (id: string | number) => void;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
  isLoaded: boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

const PLAN_KEY = "fitlog_plan";
const SAVED_KEY = "fitlog_saved";
const PLAN_CAP = 5;

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<PlanItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage once, on first mount in the browser.
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_KEY);
      const storedSaved = localStorage.getItem(SAVED_KEY);
      if (storedPlan) setPlan(JSON.parse(storedPlan));
      if (storedSaved) setSaved(JSON.parse(storedSaved));
    } catch (e) {
      console.error("Could not read FitLog data from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Persist on every change (only after the initial load, so we don't
  // overwrite saved data with an empty array on first render).
  useEffect(() => {
    if (isLoaded) localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan, isLoaded]);

  useEffect(() => {
    if (isLoaded) localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved, isLoaded]);

  function addToPlan(w: Workout) {
    if (plan.some((p) => p.id === w.id)) {
      toast("Already in today's plan");
      return;
    }
    if (plan.length >= PLAN_CAP) {
      toast.error("Today's plan is full (5 lifts max)");
      return;
    }
    setPlan((prev) => [...prev, { ...w, done: false }]);
    toast.success("Added to today's plan");
  }

  function addToSaved(w: Workout) {
    if (saved.some((s) => s.id === w.id)) {
      toast("Already saved");
      return;
    }
    setSaved((prev) => [...prev, { ...w }]);
    toast.success("Saved for later");
  }

  function markDone(id: string | number) {
    setPlan((prev) =>
      prev.map((p) => (p.id === id ? { ...p, done: !p.done } : p))
    );
    toast.success("Marked as done");
  }

  function removeFromPlan(id: string | number) {
    setPlan((prev) => prev.filter((p) => p.id !== id));
    toast("Removed from plan");
  }

  function removeFromSaved(id: string | number) {
    setSaved((prev) => prev.filter((s) => s.id !== id));
    toast("Removed from saved");
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        markDone,
        removeFromPlan,
        removeFromSaved,
        isLoaded,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}
