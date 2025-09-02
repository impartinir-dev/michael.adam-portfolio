import { createRouter, createWebHashHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import Projects from '../components/Projects.vue'
import Resume from '../components/Resume.vue'
import ContactForm from '../components/ContactForm.vue'
import Login from '../components/Login.vue'

const routes = [
  { path: '/', name: 'AboutMe', component: AboutMe },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/contact', name: 'ContactForm', component: ContactForm },
  { path: '/login', name: 'Login', component: Login }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
