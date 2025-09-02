<template>
  <section class="projects section">
    <div class="container">
      <h1 class="title">Selected Projects</h1>
      <p class="text-muted" style="margin-bottom: 24px;">A few highlights showcasing performance, UX, and clean architecture.</p>
      <div class="grid">
        <article class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-content">
            <h2>{{ project.title }}</h2>
            <p class="text-muted">{{ project.description }}</p>
            <a :href="project.link" target="_blank" rel="noopener" class="button">View Project</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 'spdyn',
          title: 'Securepoint — spdyn.de (Aug 2024 – Present)',
          description: 'Full‑stack work on Securepoint\'s dynamic DNS platform. Vue 2 frontend, PHP (Laravel) backend, MariaDB.',
          link: 'https://spdyn.de'
        },
        {
          id: 'portfolio',
          title: 'Portfolio Website (Dec 2024)',
          description: 'This portfolio site built with Vue 3 + Vite, glassmorphism design, Supabase contact form, and GitHub Pages deployment.',
          link: 'https://github.com/impartinir-dev/michael.adam-portfolio'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title { color: var(--primary); font-size: 2rem; margin-bottom: 8px; }
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.project-card {
  grid-column: span 6;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.1);
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
  transition: transform .2s ease, box-shadow .2s ease;
}
.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(600px 240px at -10% -10%, rgba(230,57,70,0.15), transparent 60%);
  opacity: 0;
  transition: opacity .2s ease;
  pointer-events: none;
}
.project-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,0.45); }
.project-card:hover::before { opacity: 1; }
.project-content { position: relative; z-index: 1; padding: 24px; }
.project-content h2 { margin: 0 0 8px; }

@media (max-width: 900px) {
  .project-card { grid-column: span 12; }
}
</style>
