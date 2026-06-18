# Dylan's Training App

Full-featured training app with a dashboard-first mobile UI. Load programs from Excel or build them in-app, track every session, log jump tests, see progress graphs, get progressive-overload recommendations, and support multiple people on one phone.

## Features
- **Profiles** — each person has their own program + logs; the intro tour appears only after entering a profile and only once per profile
- **Today dashboard** — runs the right session for the weekday; shows next move, completion, quick actions, per-exercise overload recommendations, and exercise swaps. Layout controls are simplified.
- **Calendar** — tap any past date to backfill or edit a session
- **Progress** — strength & jump-test charts, plus trend analysis (progressing / stalling / regressing). Charts export as PNG.
- **Build** — full in-app program builder plus API-powered weekly-plan and game-aware season-plan generators. Export the program to Excel to share it.
- **Exercise Library** — browse 90+ exercises by body part (Back → Vertical Pull → Pull-Up), each with equipment and cues. Add to today, free lift, the builder, or use as a swap source.
- **Training AI Coach** — API-powered training-only coach; it does not answer app/menu support questions
- **1RM Calculator** — estimate 1RM + working percentages with rep targets
- **Free Lift** — build a custom session from scratch, save and reuse it
- **Tests** — cleaner tabbed test logger for jumps, strength, body, wellness, and custom metrics
- **Exercise swap** — on any exercise, get equipment-based alternatives; choose "just today" or "whole program"
- **Export** — session logs + tests to Excel via the native Android share sheet (with an export history log)

## Setup (no coding)
1. Create a **public GitHub repo**
2. Upload everything in this folder (keep folder structure incl. `.github`)
3. Actions tab builds the APK automatically (~3–5 min)
4. Download `dylans-training-app.apk` from Releases on your phone and install

## Program format
The app reads a sheet named `Program` with columns:
`Day | Type | Day Title | Section | Exercise | Sets | Reps | Notes`
Type values: `lift` `plyo` `practice` `rest`. Use the program template xlsx as a starting point.

## Note
Debug-signed APK — installs fine for personal use. Logged data lives on the phone; export periodically to back up.
