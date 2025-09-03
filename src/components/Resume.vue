<template>
  <section class="section">
    <div class="container">
      <div class="card" style="max-width: 1000px; margin: 0 auto; padding: 32px;">
        <h1 style="color: var(--primary); margin-bottom: 20px;">Resume — Michael Adam</h1>

        <div class="grid">
          <div class="col">
            <h2>Professional Summary</h2>
            <p class="text-muted">
              Cloud‑first developer apprentice (Fachinformatiker Anwendungsentwicklung) at Securepoint GmbH, Lüneburg (2023–Present).
              I design and deliver scalable services with PHP (Laravel), containerize with Docker, automate with CI/CD,
              and integrate modern UIs with Vue 2 + Vite when needed.
            </p>

            <h2>Skills</h2>
            <ul class="bullets">
              <li><strong>Cloud & DevOps</strong>: Docker, CI/CD (GitHub Actions)</li>
              <li><strong>Backend</strong>: PHP, Laravel</li>
              <li><strong>Frontend</strong>: Vue 2, Vite, Vue Router</li>
              <li><strong>Languages</strong>: TypeScript, JavaScript, HTML5, CSS3</li>
              <li><strong>Other</strong>: Git, MS Office, Java (advanced)</li>
            </ul>

            <h2>Languages</h2>
            <ul class="bullets">
              <li>German (native), English, French, Russian</li>
            </ul>
          </div>

          <div class="col">
            <h2>Experience</h2>
            <ul class="timeline">
              <li>
                <div class="when">2023 – Present</div>
                <div class="what"><strong>Securepoint GmbH</strong>, Lüneburg — Ausbildung Fachinformatiker Anwendungsentwicklung<br/>
                  Current work: <a href="https://spdyn.de" target="_blank" rel="noopener">spdyn.de</a> (dynamic DNS platform) — Full‑stack with Vue 2 frontend, PHP (Laravel) backend, MariaDB.
                </div>
              </li>
              <li>
                <div class="when">2020 – 2021</div>
                <div class="what"><strong>Bugenhagen Berufsbildungswerk</strong> — Initial Ausbildung as Fachinformatiker Anwendungsentwicklung, paused due to health reasons </div>
              </li>
              <li>
                <div class="when">07/2018 – 11/2018</div>
                <div class="what">Minijob, NP‑Markt — Customer service and store operations.</div>
              </li>
              <li>
                <div class="when">09/2015 – 12/2015</div>
                <div class="what">Aushilfsjob, EDEKA — Sales support and logistics.</div>
              </li>
              <li>
                <div class="when">04/2014</div>
                <div class="what">Two‑week internship, MediaMarkt (Computer Department) — Tech sales support.</div>
              </li>
            </ul>

            <h2>Education</h2>
            <ul class="timeline">
              <li>
                <div class="when">04/2016 – 01/2019</div>
                <div class="what">Schulischer Teil der Fachhochschulreife — Heinrich‑Büssing‑Schule, Braunschweig</div>
              </li>
              <li>
                <div class="when">08/2013 – 07/2015</div>
                <div class="what">Wilhelm‑Raabe‑Schule, Lüneburg</div>
              </li>
              <li>
                <div class="when">07/2008 – 06/2013</div>
                <div class="what">Mittlere Reife — Deutsche Schule Toulouse</div>
              </li>
            </ul>

            <h2>Certifications & Interests</h2>
            <ul class="bullets">
              <li>Cisco Routing and Switching — Semester 1</li>
              <li>Programming small games (Java)</li>
            </ul>
          </div>
        </div>

        <div style="margin-top: 24px; display: flex; gap: 12px;">
          <button @click="downloadResume" class="button">Download Resume</button>
          <router-link to="/contact" class="button secondary">Get in touch</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Resume',
  methods: {
    downloadResume() {
      const repoName = '/michael.adam-portfolio/'
      const base = process.env.BASE_URL || repoName
      const link = document.createElement('a')
      link.href = base + 'resume/Michael_Adam_CV.pdf'
      link.download = 'Michael_Adam_CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>

<style scoped>
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.col h2 { margin: 12px 0 8px; }
.bullets { list-style: none; padding-left: 0; margin: 0; }
.bullets li { margin: 6px 0; }
.timeline { list-style: none; padding-left: 0; margin: 0; }
.timeline li { margin: 10px 0; }
.when { font-weight: 600; color: var(--muted); }
.what { margin-top: 2px; }
@media (max-width: 820px) { .grid { grid-template-columns: 1fr; } }
</style>
