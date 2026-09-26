# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of
workouts, load them into today's plan or save them for later, and track your
session totals as you go.

## Description

FitLog lets a user browse a library of twelve lifts, open a detail page for
full instructions and stats, add a lift to today's plan (max 5) or save it
for later, and track live totals for exercises, minutes, and calories on the
My Plan page — all persisted in the browser so nothing is lost on refresh.

## Technologies Used

- **Next.js 14** (App Router) — routing, server-side data fetching
- **React 18** — UI components, context for shared state
- **TypeScript** — type safety
- **Tailwind CSS** — styling and responsive layout
- **react-hot-toast** — toast notifications
- **lucide-react** — icons
- **localStorage** — client-side persistence of the plan/saved lists

## Features

1. Responsive workout library with a live sort dropdown (Duration / Calories / Rating)
2. Workout detail pages with full instructions, key specs, and add-to-plan / save actions
3. Live navbar badges showing the number of items in today's plan and saved list
4. My Plan page with tabs, live metrics (exercises / minutes / calories), mark-as-done and remove actions
5. Plan and Saved lists persist across page reloads via localStorage
6. Custom 404 page and a loading state while workout data is fetched


Open http://localhost:3000

## Live Link

_(fill in after deployment)_

## GitHub Repository Link

(https://github.com/ahad9476/fitlog-starter.git)
