# Vert Jump — Multi-Profile Training App

Full-featured training app. Load programs from Excel or build them in-app, track every session, log jump tests, see progress graphs, get progressive-overload recommendations, and support multiple people on one phone.

## Features
- **Profiles** — each person has their own program + logs
- **Today** — runs the right session for the weekday; log every set; per-exercise overload recommendations; swap any exercise
- **Calendar** — tap any past date to backfill or edit a session
- **Progress** — strength & jump-test charts, plus trend analysis (progressing / stalling / regressing). Charts export as PNG.
- **Build** — full in-app program builder. Edit days, sections, exercises. Export the program to Excel to share it.
- **Exercise Library** — browse 90+ exercises by body part (Back → Vertical Pull → Pull-Up), each with equipment and cues. Add to today, free lift, the builder, or use as a swap source.
- **1RM Calculator** — estimate 1RM + working percentages with rep targets
- **Free Lift** — build a custom session from scratch, save and reuse it
- **Tests** — log vertical, broad jump, 5-10-5, RSI, maxes, bodyweight, etc.
- **Exercise swap** — on any exercise, get equipment-based alternatives; choose "just today" or "whole program"
- **Export** — session logs + jump tests to Excel via the native Android share sheet (with an export history log)

## Setup (no coding)
1. Create a **public GitHub repo**
2. Upload everything in this folder (keep folder structure incl. `.github`)
3. Actions tab builds the APK automatically (~3–5 min)
4. Download `vert-jump.apk` from Releases on your phone and install

## Program format
The app reads a sheet named `Program` with columns:
`Day | Type | Day Title | Section | Exercise | Sets | Reps | Notes`
Type values: `lift` `plyo` `practice` `rest`. Use the program template xlsx as a starting point.

## Note
Debug-signed APK — installs fine for personal use. Logged data lives on the phone; export periodically to back up.
