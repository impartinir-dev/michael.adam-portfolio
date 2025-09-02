# Michael Adam — Portfolio

A cloud‑first developer portfolio built with Vue 3 + Vite, styled with a dark/glass theme. Includes a contact form with email functionality using EmailJS and GitHub Pages deployment.

## Tech stack
- Frontend: Vue 3, Vite, Vue Router
- Styling: CSS variables, glassmorphism
- Email Service: EmailJS (for GitHub Pages compatibility)
- Database: Supabase (Postgres) - optional backup
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
- EmailJS account (for email functionality)
- A Supabase project (optional - for database backup)

## Environment
Create `portfolio-website/.env` with:
```
# Supabase Configuration (optional - for database backup)
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# EmailJS Configuration (required for email functionality)
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key
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
- **Important**: Add your EmailJS credentials as GitHub Secrets for deployment
- See `GITHUB_PAGES_SETUP.md` for detailed deployment instructions

## EmailJS Setup (Required)
1. Create account at [EmailJS.com](https://www.emailjs.com/)
2. Set up email service (Gmail, Outlook, etc.)
3. Create email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Add credentials to your `.env` file

## Supabase setup (Optional - for database backup)
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
