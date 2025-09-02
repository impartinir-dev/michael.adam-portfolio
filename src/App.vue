<template>
  <div id="app" class="app-container">
    <header class="site-header">
      <nav class="navbar container">
        <div class="brand">Michael Adam</div>
        <div class="links">
          <router-link to="/" class="nav-link" exact>About Me</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/resume" class="nav-link">Resume</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app-container {
  color: #eee;
  min-height: 100vh;
}

.site-header { position: sticky; top: 0; z-index: 20; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 16px 24px;
  margin-top: 12px;
  border-radius: 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
}

.brand { font-weight: 700; letter-spacing: .2px; }
.links { display: flex; gap: 16px; }
.nav-link {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 10px;
  transition: color .2s ease, background .2s ease;
}
.nav-link:hover { color: white; background: rgba(255,255,255,0.08); }
.nav-link.router-link-exact-active { color: white; background: rgba(230,57,70,0.20); }

@media (max-width: 700px) {
  .links { gap: 8px; }
}
</style>
