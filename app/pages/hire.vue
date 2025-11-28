<template>
  <div>
    <h1>Hire Me</h1>
    <p>This is the hire me page content.</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission logic here
  alert('Form submitted! Thank you for your message.')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
}
textarea {
  min-height: 100px;
}
.submit-btn {
  padding: 0.5rem 1rem;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.submit-btn:hover {
  background-color: #333;
}
</style>