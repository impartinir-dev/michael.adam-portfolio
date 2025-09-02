<template>
  <section class="section">
    <div class="container">
      <div class="card" style="max-width: 520px; margin: 0 auto; padding: 32px;">
        <h1 style="color: var(--primary); margin-bottom: 20px;">Login</h1>
        <form @submit.prevent="submitLogin" class="form">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" required />
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required />
          <button type="submit" class="button" :disabled="loading">{{ loading ? 'Logging in...' : 'Login' }}</button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { getSupabase } from '../lib/supabaseClient'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      errorMessage: ''
    }
  },
  methods: {
    async submitLogin() {
      this.loading = true
      this.errorMessage = ''
      try {
        const supabase = getSupabase()
        const { error } = await supabase.auth.signInWithPassword({ email: this.email, password: this.password })
        if (error) throw error
        alert('Login successful')
        this.email = ''
        this.password = ''
      } catch (error) {
        this.errorMessage = 'Invalid credentials'
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
.form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.12);
  font-size: 1rem;
  background-color: rgba(255,255,255,0.04);
  color: #eee;
}
.form input:focus {
  outline: none;
  border-color: rgba(230,57,70,0.5);
  box-shadow: 0 0 0 4px rgba(230,57,70,0.18);
}
.button:disabled { opacity: 0.7; cursor: not-allowed; }
.error-message { color: #f44336; font-weight: bold; margin-top: 8px; }
</style>
