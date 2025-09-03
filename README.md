# Michael Adam — Portfolio

A cloud‑first developer portfolio built with Vue 2 + Vite, styled with a dark/glass theme. Includes a contact form using EmailJS and GitHub Pages deployment.

## Tech stack
- Frontend: Vue 2, Vite, Vue Router
- Styling: CSS variables, glassmorphism
- Contact form: EmailJS (email service)
- Deployment: GitHub Pages via Actions

## Project structure
```
portfolio-website/
  src/
    components/       # Hero, AboutMe, Projects, Resume, ContactForm, Login
    router/           # Vue Router (hash history for Pages)
    main.js           # mounts app + imports global styles
    style.css         # theme variables, utilities, layout helpers
  vite.config.js      # base: './' for Pages
```

## Prerequisites
- Node.js 20+ (required for Vite 7+)

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


## Contact Form Setup (EmailJS)
1. Go to [emailjs.com](https://emailjs.com) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Replace the placeholder values in `src/components/ContactForm.vue`:
   - `YOUR_SERVICE_ID` with your EmailJS service ID
   - `YOUR_TEMPLATE_ID` with your email template ID
   - `YOUR_PUBLIC_KEY` with your EmailJS public key


## Editing guidelines
- Keep components aligned with the `style.css` variables/utilities
- Use hash routes for Pages compatibility (`createWebHashHistory`)

## Notable content
- About/Resume reflect cloud‑first focus (CI/CD, Laravel)
- Projects include Securepoint — spdyn.de (Vue 2, Laravel, MariaDB)

## License
Personal portfolio. No redistribution without permission.
