# Cloud Sync Setup (free) — Dylan's Training App

Accounts + cloud sync run on Firebase's free Spark plan. This covers personal/family
use many times over. ~5 minutes, no coding.

The app works fully as a guest without this. Setting it up just adds optional
sign-in so data is backed up and synced across devices.

## 1. Create a Firebase project
1. Go to https://console.firebase.google.com → "Add project".
2. Name it anything (e.g. "dylans-workout"). You can disable Google Analytics.

## 2. Add a Web App
1. In the project, click the web icon `</>` ("Add app" → Web).
2. Give it a nickname, click "Register app".
3. It shows a `firebaseConfig = { apiKey: "...", ... }` block. Keep this open.

## 3. Enable sign-in methods
1. Left menu → Build → Authentication → "Get started".
2. Sign-in method tab → enable **Email/Password**.
3. Also enable **Google** (pick a support email when asked).

## 4. Create the database
1. Left menu → Build → Firestore Database → "Create database".
2. Choose a location, start in **production mode**.
3. Go to the **Rules** tab, replace everything with the contents of
   `firestore.rules` (included in this project), and Publish.
   This makes each account only able to read/write its own data.

## 5. Paste your config into the app
1. Open `www/index.html`, find `const FIREBASE_CONFIG = {`.
2. Replace the empty values with the ones from step 2:
   apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId.
3. Save, push to GitHub. The Android + Pages builds pick it up automatically.

## 6. Authorize your domains (for Google sign-in)
1. Authentication → Settings → Authorized domains.
2. Add your GitHub Pages domain (e.g. `yourname.github.io`).
   `localhost` is already allowed for testing.

## Done
- Open the app → More → ☁️ "Sign in to sync" → create an account or use Google.
- First sign-in uploads your current on-device data.
- After that, every change syncs automatically; signing in on another device pulls it down.

## Notes
- The config values are NOT secrets — they're safe in a public repo. Security is
  enforced by the Firestore rules (each user sees only their own data).
- Google sign-in works in the web app (iPhone/desktop). In the Android APK,
  if the Google popup misbehaves, use email/password.
- One account stores ALL your in-app profiles together.
