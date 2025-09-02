# Michael Adam — Portfolio

A cloud‑first developer portfolio built with Vue 2 + Vite, styled with a dark/glass theme. Includes a contact form using Supabase and GitHub Pages deployment.

## Tech stack
- Frontend: Vue 2, Vite, Vue Router
- Styling: CSS variables, glassmorphism
- Backend (contact form): Supabase (Postgres)
- Auth: Supabase Email/Password (optional)
- Deployment: GitHub Pages via Actions

## Project structure
```
portfolio-website/
  src/
    components/       # Hero, AboutMe, Projects, Resume, ContactForm, Login
    router/           # Vue Router (hash history for Pages)
    lib/supabaseClient.js
    main.js           # mounts app + imports global styles
    style.css         # theme variables, utilities, layout helpers
  vite.config.js      # base: './' for Pages
```

## Prerequisites
- Node.js 18+ (recommended 20)
- A Supabase project (only needed for Contact/Login)

## Environment
Create `portfolio-website/.env` with:
```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Run locally
```powershell
cd portfolio-website
npm install
npm run dev
```
Dev server: http://localhost:5173

## Build
```powershell
cd portfolio-website
npm run build
npm run preview
```

## Deployment (GitHub Pages)
- Workflow: `.github/workflows/deploy.yml`
- Push to `main` → builds `dist` and publishes to Pages
- Ensure Pages is enabled in repo settings (Source: GitHub Actions)

## Supabase setup (Contact form)
Create table `contact_messages`:
```sql
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now()
);
```
Optional RLS (allow anonymous inserts only):
```sql
alter table public.contact_messages enable row level security;
create policy anon_insert on public.contact_messages
for insert to anon with check (true);
```

## Editing guidelines
- Keep components aligned with the `style.css` variables/utilities
- Use hash routes for Pages compatibility (`createWebHashHistory`)

## Notable content
- About/Resume reflect cloud‑first focus (Docker, CI/CD, Laravel)
- Projects include Securepoint — spdyn.de (Vue 2, Laravel, MariaDB)

## License
Personal portfolio. No redistribution without permission.
