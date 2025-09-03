<template>
  <section class="section">
    <div class="container about-grid">
      <div class="intro">
        <h1 class="title">Hi, I'm Michael Adam</h1>
        <p class="text-muted">
          Cloud‑first developer in Ausbildung (FIAE) at Securepoint. I design and deliver
          scalable services with PHP (Laravel) and automate deployments with CI/CD. I build
          clean frontends with Vue 2 + Vite when needed, and focus on reliability and DX.
        </p>
        <div class="stack">
          <span class="chip">Laravel</span>
          <span class="chip">PHP</span>
          <span class="chip">CI/CD</span>
          <span class="chip">Vue 2</span>
          <span class="chip">Vite</span>
          <span class="chip">TypeScript</span>
          <span class="chip">JavaScript</span>
          <span class="chip">HTML</span>
          <span class="chip">CSS</span>
          <span class="chip">Python</span>
        </div>
        <div class="actions">
          <router-link to="/projects" class="button">See my work</router-link>
          <router-link to="/contact" class="button secondary">Get in touch</router-link>
        </div>
      </div>
      <div class="panel card">
        <div class="panel-inner">
          <h3>Currently</h3>
          <p class="text-muted">Apprenticeship (FIAE) at Securepoint GmbH, focused on cloud‑native patterns and automation.</p>
          <h3 style="margin-top: 16px;">Highlights</h3>
          <ul class="bullets">
            <li>Cloud‑oriented backend design with Laravel</li>
            <li>CI/CD pipelines</li>
            <li>Clean, maintainable TypeScript/Vue 2 frontends</li>
            <li>Strong fundamentals: HTML, CSS, JS, TS, Python</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
.about-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 24px; }
.title { color: var(--primary); font-size: 2rem; margin-bottom: 8px; }
.stack { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 18px; }
.chip { padding: 6px 10px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); font-size: .9rem; }
.actions { display: flex; gap: 10px; }
.panel { border-radius: 16px; }
.panel-inner { padding: 24px; }
.bullets { list-style: none; padding-left: 0; margin: 8px 0 0; }
.bullets li { margin: 6px 0; }
@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }
</style>
