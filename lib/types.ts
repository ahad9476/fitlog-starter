// NOTE: The exact JSON key names below are my best guess from the README's
// wording (duration, calories, rating, category, equipment, instructions...).
// Open https://api.abcz.workers.dev/api/fitlog in your browser FIRST,
// look at the real JSON, and rename any field below to match exactly.
// This is the single most important step before writing any component.

export interface Workout {
  id: string | number;
  name: string;                 // "BARBELL BENCH PRESS"
  image: string;                // illustration URL
  category: string[];           // ["Chest", "Arms"]
  equipment: string;            // "Barbell, Bench"
  duration: number;             // minutes, e.g. 25
  calories: number;             // e.g. 180
  rating: number;                // e.g. 4.8
  difficulty: string;           // "Intermediate"
  sets: number;                 // 4
  reps: string;                 // "6-8"
  description: string;          // subtitle / detail paragraph
  instructions: string[];       // 4 ordered steps
}

// What a workout looks like once the user adds it to a plan / saved list
export interface PlanItem extends Workout {
  done?: boolean;
}
