<template>
  <div class="contact-page">
    <div class="contact-bg-text">CONTACT</div>

    <div class="contact-container">
      <div class="contact-left">
        <div class="contact-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <span>Contact</span>
        </div>

        <h1 class="contact-title">Get in touch</h1>
        <p class="contact-subtitle">Have questions or ready to transform your business with AI automation?</p>

        <div class="contact-cards">
          <a href="mailto:letheanseourn05@gmail.com" class="contact-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
            </div>
            <div class="card-content">
              <h3>Email us</h3>
              <p>letheanseourn05@gmail.com</p>
            </div>
            <button class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </a>

          <a href="tel:+855968118930" class="contact-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div class="card-content">
              <h3>Call us</h3>
              <p>(855) 968118930</p>
            </div>
            <button class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </a>

          <div class="contact-card" @click="showMap = true">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div class="card-content">
              <h3>Our location</h3>
              <p>BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh</p>
            </div>
            <button class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </div>
        </div>

        <div class="social-links">
          <a href="https://www.instagram.com/lethean.seourn/" class="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@lethean.seourn" class="social-link" target="_blank">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M16.75 1.5c.3 2.1 1.7 3.8 3.95 4.1v3.2c-1.55.15-3-.3-4.4-1.15v7.45c0 2.05-.7 3.8-2.1 5.1-1.45 1.3-3.15 1.95-5.15 1.95A8.05 8.05 0 0 1 4 19.85c-1.3-1.4-2-3.1-2-5.1 0-1.95.7-3.65 2-5.05 1.3-1.4 3-2.1 5-2.1.55 0 1.1.05 1.65.2v3.35c-.5-.2-1-.3-1.55-.3-1.1 0-2 .35-2.75 1.1-.75.7-1.1 1.6-1.1 2.7 0 1.1.35 2 1.1 2.75.75.75 1.65 1.1 2.75 1.1 1.15 0 2.05-.35 2.8-1.1.75-.8 1.1-1.75 1.1-2.85V1.5h3.15Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/lethean-seourn-bb0940344/" class="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="contact-right">
        <!-- Contact Form -->
        <div v-if="!showMap" class="form-container">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="Name" class="form-input"
                :class="{ 'error': errors.name }" @blur="validateField('name')" />
              <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="Email" class="form-input"
                :class="{ 'error': errors.email }" @blur="validateField('email')" />
              <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <input type="text" v-model="form.telegram" placeholder="Telegram (optional)" class="form-input"
                @blur="validateField('telegram')" />
              <span class="error-message" v-if="errors.telegram">{{ errors.telegram }}</span>
            </div>

            <div class="form-group">
              <textarea v-model="form.message" placeholder="Message" class="form-textarea" rows="5"
                :class="{ 'error': errors.message }" @blur="validateField('message')"></textarea>
              <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
            </div>

            <div class="form-options">
              <label class="checkbox-container">
                <input type="checkbox" v-model="form.subscribe">
                <span class="checkmark"></span>
                Subscribe to our newsletter
              </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting" class="spinner"></span>
              <span v-else>Submit</span>
            </button>

            <div v-if="formStatus" :class="['form-status', formStatus.type]">
              {{ formStatus.message }}
            </div>
          </form>

          <div class="form-footer">
            <p class="privacy-text">
              By submitting this form, you agree to our
              <a href="#">Privacy Policy</a> and
              <a href="#">Terms of Service</a>.
            </p>
          </div>
        </div>

        <!-- Map View -->
        <div v-else class="map-container">
          <div class="map-header">
            <h2>Our Location</h2>
            <button @click="showMap = false" class="back-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>

          <div class="map-embed">
            <iframe
              src="https://www.google.com/maps?q=BP+511,+Phum+Tropeang+Chhuk+(Borey+Sorla)+Sangtak,+Street+371,+Phnom+Penh&output=embed"
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>

          <div class="map-info">
            <div class="info-item">
              <div class="info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3>Address</h3>
                <p>BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>(855) 968118930</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>letheanseourn05@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="copied" class="copy-notification">
      {{ copiedMessage }} copied to clipboard!
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const form = reactive({
  name: '',
  email: '',
  telegram: '',
  message: '',
  subscribe: false
})

const errors = reactive({
  name: '',
  email: '',
  telegram: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = ref(null)
const copied = ref(false)
const copiedMessage = ref('')
const showMap = ref(false)

const validateField = (field) => {
  switch (field) {
    case 'name':
      if (!form.name.trim()) {
        errors.name = 'Name is required'
      } else {
        errors.name = ''
      }
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email.trim()) {
        errors.email = 'Email is required'
      } else if (!emailRegex.test(form.email)) {
        errors.email = 'Please enter a valid email'
      } else {
        errors.email = ''
      }
      break
    case 'telegram':
      // Optional field, but validate format if provided
      if (form.telegram.trim() && !form.telegram.trim().startsWith('@')) {
        errors.telegram = 'Telegram username should start with @'
      } else {
        errors.telegram = ''
      }
      break
    case 'message':
      if (!form.message.trim()) {
        errors.message = 'Message is required'
      } else if (form.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters'
      } else {
        errors.message = ''
      }
      break
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('telegram')
  validateField('message')

  return !errors.name && !errors.email && !errors.telegram && !errors.message
}

const copyToClipboard = (text, type) => {
  navigator.clipboard.writeText(text)
  copied.value = true

  switch (type) {
    case 'email':
      copiedMessage.value = 'Email address'
      break
    case 'phone':
      copiedMessage.value = 'Phone number'
      break
    case 'location':
      copiedMessage.value = 'Address'
      break
  }

  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const sendToTelegram = async (formData) => {
  const botToken = '8159518345:AAHjGgQxFE9iv5zArnuW8rI0NJu-K2UF5xk'
  const chatId = '7866260721'

  const telegramInfo = formData.telegram ? `\n<b>Telegram:</b> ${formData.telegram}` : ''

  const message = `
    <b>New Contact Form Submission</b>
    <b>Name:</b> ${formData.name}
    <b>Email:</b> ${formData.email}
    ${telegramInfo}
    <b>Message:</b> ${formData.message}
    <b>Subscribe to newsletter:</b> ${formData.subscribe ? 'Yes' : 'No'}
  `

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML'
    })
  })

  if (!response.ok) {
    throw new Error('Failed to send message to Telegram')
  }

  return response.json()
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  formStatus.value = null

  try {
    await sendToTelegram(form)

    formStatus.value = {
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.'
    }

    // Reset form
    Object.keys(form).forEach(key => {
      if (key !== 'subscribe') {
        form[key] = ''
      } else {
        form[key] = false
      }
    })
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'Something went wrong. Please try again later.'
    }
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style scoped>
.contact-page {
  min-height: 70vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d1a14 100%);
  padding: 3rem 4rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
}

.contact-bg-text {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.03);
  letter-spacing: 0.05em;
  pointer-events: none;
  user-select: none;
  line-height: 1;
  z-index: 0;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-left {
  display: flex;
  flex-direction: column;
}

.contact-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  width: fit-content;
  margin-bottom: 1.5rem;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.contact-subtitle {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
  max-width: 320px;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  flex-shrink: 0;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 0.25rem 0;
}

.card-content p {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.4;
}

.card-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.card-arrow:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: translateY(-2px);
}

.contact-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.form-container {
  width: 100%;
  max-width: 380px;
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.form-group {
  width: 100%;
  position: relative;
}

.form-input,
.form-textarea {
  width: 100%;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
  font-size: 0.875rem;
  color: #ffffff;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus,
.form-textarea:focus {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(25, 25, 25, 0.9);
}

.form-input.error,
.form-textarea.error {
  border-color: #ef4444;
}

.form-textarea {
  resize: none;
  min-height: 120px;
}

.error-message {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
}

.form-options {
  margin: 0.25rem 0;
}

.checkbox-container {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  position: relative;
  padding-left: 1.5rem;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.checkbox-container:hover input~.checkmark {
  background-color: rgba(255, 255, 255, 0.15);
}

.checkbox-container input:checked~.checkmark {
  background-color: #ffffff;
  border-color: #ffffff;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid #0a0a0a;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-container input:checked~.checkmark:after {
  display: block;
}

.submit-btn {
  width: 100%;
  background: #ffffff;
  color: #0a0a0a;
  border: none;
  border-radius: 0.75rem;
  padding: 0.875rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.spinner {
  display: inline-block;
  width: 0.875rem;
  height: 0.875rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: #0a0a0a;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.form-status {
  margin-top: 0.75rem;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.form-status.success {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.form-status.error {
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.form-footer {
  margin-top: 1rem;
  width: 100%;
}

.privacy-text {
  font-size: 0.6875rem;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.5;
}

.privacy-text a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: underline;
  transition: color 0.2s ease;
}

.privacy-text a:hover {
  color: rgba(255, 255, 255, 0.9);
}

/* Map Container Styles */
.map-container {
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.map-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.map-embed {
  width: 100%;
  height: 250px;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.map-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.info-item h3 {
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 0.25rem 0;
}

.info-item p {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.4;
}

.copy-notification {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(16, 185, 129, 0.9);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  z-index: 1000;
  animation: slideUp 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 900px) {
  .contact-page {
    padding: 2rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .contact-bg-text {
    font-size: 6rem;
  }

  .form-container,
  .map-container {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .contact-page {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-bg-text {
    font-size: 4rem;
  }

  .social-links {
    justify-content: center;
  }

  .map-embed {
    height: 200px;
  }
}
</style>