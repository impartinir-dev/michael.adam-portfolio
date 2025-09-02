<template>
  <section class="hero">
    <div class="container hero-inner">
      <h1 class="headline">Cloud‑first developer building reliable, scalable services</h1>
      <p class="subtext text-muted">I design and ship cloud‑native backends with PHP (Laravel), automate with CI/CD, and integrate performant UIs when needed.</p>
      <div class="cta">
        <router-link to="/projects" class="button">View Projects</router-link>
        <router-link to="/contact" class="button secondary">Contact Me</router-link>
      </div>
    </div>
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  position: relative;
  padding: 120px 0 80px;
  overflow: hidden;
}
.hero-inner { text-align: center; }
.headline { font-size: 3rem; line-height: 1.1; margin-bottom: 12px; }
.subtext { max-width: 680px; margin: 0 auto 24px; }
.cta { display: flex; justify-content: center; gap: 12px; }

.bg-blob {
  position: absolute;
  width: 60vw;
  height: 60vw;
  filter: blur(60px);
  opacity: 0.5;
  z-index: -1;
}
.blob-1 {
  background: radial-gradient(circle at 30% 30%, rgba(230,57,70,0.5), rgba(230,57,70,0) 60%);
  top: -20%; left: -10%; animation: float1 12s ease-in-out infinite;
}
.blob-2 {
  background: radial-gradient(circle at 70% 50%, rgba(245,158,11,0.45), rgba(245,158,11,0) 60%);
  bottom: -30%; right: -10%; animation: float2 14s ease-in-out infinite;
}
@keyframes float1 { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(20px) } }
@keyframes float2 { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-25px) } }

@media (max-width: 640px) {
  .headline { font-size: 2rem; }
}
</style> 