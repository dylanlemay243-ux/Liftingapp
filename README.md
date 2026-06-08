# Vert Jump — Multi-Profile Training App

Load your .xlsx program, track sessions, log jump tests. Supports multiple profiles (each person gets their own program + logs).

## Setup (5 min, no coding)

1. Create a **public GitHub repo** (github.com → + → New repository)
2. Upload **everything in this folder** (keep folder structure — the `.github` folder must come along)
3. Go to the **Actions** tab — the build starts automatically (~3–5 min)
4. When it finishes, go to **Releases** on the right of your repo page
5. Download `vert-jump.apk` **on your phone**, tap it, allow install from this source

Every push to main triggers a new build and release.

## Loading your program

In the app: tap a profile → Me tab → **Load program from .xlsx**  
Pick your tracker spreadsheet. It reads the **"Program"** sheet (the clean data sheet added to your tracker).

## Creating programs for different people

Anyone can build their own xlsx with a "Program" sheet using the same column format:
`Day | Type | Day Title | Section | Exercise | Sets | Reps | Notes`

Type values: `lift` `plyo` `practice` `rest`

## Note on the APK

This is a debug-signed APK — installs fine for personal use, not Play Store ready.
If the first build errors, check the Actions log and raise an issue.
