<template>
  <section class="section">
    <div class="container">
      <div class="card" style="max-width: 720px; margin: 0 auto; padding: 32px;">
        <h1 style="color: var(--primary); margin-bottom: 20px;">Contact Me</h1>
        <form @submit.prevent="submitForm" class="form">
          <label for="name">Name</label>
          <input id="name" v-model="form.name" type="text" required />

          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" required />

          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="5" required></textarea>

          <button type="submit" class="button" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }}</button>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactForm',
  data() {
    return {
      form: { name: '', email: '', message: '' },
      loading: false,
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async submitForm() {
      this.loading = true
      this.successMessage = ''
      this.errorMessage = ''
      
      try {
        // EmailJS configuration - replace with your actual values
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        console.log('EmailJS Service ID:', serviceId)
        console.log('EmailJS Template ID:', templateId)
        console.log('EmailJS Public Key:', publicKey)

        if (!serviceId || !templateId || !publicKey) {
          throw new Error('Missing EmailJS environment variables')
        }
        
        const templateParams = {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
          to_name: 'Michael Adam'
        }
        
        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        
        this.successMessage = 'Message sent successfully! I\'ll get back to you soon.'
        this.form = { name: '', email: '', message: '' }
      } catch (error) {
        console.error('EmailJS error:', error)
        this.errorMessage = 'Failed to send message. Please try again later.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}
.form input,
.form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.12);
  font-size: 1rem;
  background-color: rgba(255,255,255,0.04);
  color: #eee;
}
.form input:focus,
.form textarea:focus {
  outline: none;
  border-color: rgba(230,57,70,0.5);
  box-shadow: 0 0 0 4px rgba(230,57,70,0.18);
}
.button:disabled { opacity: 0.7; cursor: not-allowed; }
.success-message { color: #4caf50; font-weight: bold; margin-top: 8px; }
.error-message { color: #f44336; font-weight: bold; margin-top: 8px; }
</style>