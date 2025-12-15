<!-- <template>
  <div class="hire-container">
    
    <header class="page-header">
      <h1 class="system-title">𝕳𝖎𝖗𝖊_𝕸𝖊_𝕻𝖗𝖔𝖙𝖔𝖈𝖔𝖑</h1>
      <p class="system-subtitle">STATUS: AVAILABLE // INITIATE_COMMUNICATION</p>
    </header>

    <div class="contact-grid">
      
      <aside class="contact-info">
        <div class="info-card">
          <h3 class="card-label">DIRECT_CHANNELS</h3>
          
          <div class="channel-list">
            <a href="mailto:letheanseourn05@gmail.com" class="channel-item">
              <div class="icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </div>
              <div class="channel-details">
                <span class="label">EMAIL_ADDRESS</span>
                <span class="value">letheanseourn05@gmail.com</span>
              </div>
              <span class="arrow">→</span>
            </a>

            <a href="tel:+855968118930" class="channel-item">
              <div class="icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div class="channel-details">
                <span class="label">PHONE_LINE</span>
                <span class="value">+855 968 118 930</span>
              </div>
              <span class="arrow">→</span>
            </a>

            <div class="channel-item clickable" @click="showMap = true">
              <div class="icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="channel-details">
                <span class="label">BASE_LOCATION</span>
                <span class="value">Phnom Penh, Cambodia</span>
              </div>
              <span class="arrow">→</span>
            </div>
          </div>
        </div>

        <div class="social-bar">
          <a href="https://www.instagram.com/lethean.seourn/" target="_blank" class="social-btn">INSTAGRAM</a>
          <a href="https://www.tiktok.com/@lethean.seourn" target="_blank" class="social-btn">TIKTOK</a>
          <a href="https://www.linkedin.com/in/lethean-seourn-bb0940344/" target="_blank" class="social-btn">LINKEDIN</a>
        </div>
      </aside>

      <main class="form-interface">
        
        <div v-if="!showMap" class="terminal-form-wrapper">
          <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="terminal-title">message_input.exe</span>
          </div>

          <form class="contact-form" @submit.prevent="submitForm">
            
            <div class="form-row">
              <div class="input-group">
                <label>NAME_ID</label>
                <input type="text" v-model="form.name" placeholder="Enter identification..." 
                  :class="{ 'error': errors.name }" @blur="validateField('name')" />
                <span class="error-msg" v-if="errors.name">{{ errors.name }}</span>
              </div>
              
              <div class="input-group">
                <label>CONTACT_MAIL</label>
                <input type="email" v-model="form.email" placeholder="user@domain.com" 
                  :class="{ 'error': errors.email }" @blur="validateField('email')" />
                <span class="error-msg" v-if="errors.email">{{ errors.email }}</span>
              </div>
            </div>

            <div class="input-group">
              <label>TELEGRAM_HANDLE (OPTIONAL)</label>
              <input type="text" v-model="form.telegram" placeholder="@username" 
                @blur="validateField('telegram')" />
              <span class="error-msg" v-if="errors.telegram">{{ errors.telegram }}</span>
            </div>

            <div class="input-group">
              <label>MESSAGE_PAYLOAD</label>
              <textarea v-model="form.message" placeholder="Input message data..." rows="5"
                :class="{ 'error': errors.message }" @blur="validateField('message')"></textarea>
              <span class="error-msg" v-if="errors.message">{{ errors.message }}</span>
            </div>

            <div class="form-options">
              <label class="checkbox-wrapper">
                <input type="checkbox" v-model="form.subscribe">
                <span class="checkmark"></span>
                <span class="checkbox-text">SUBSCRIBE_NEWSLETTER</span>
              </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting">[ TRANSMITTING... ]</span>
              <span v-else>SEND_TRANSMISSION</span>
            </button>

            <div v-if="formStatus" :class="['status-message', formStatus.type]">
              > {{ formStatus.message }}
            </div>
          </form>
        </div>

        <div v-else class="map-interface">
          <div class="map-header">
            <h3>LOCATION_DATA</h3>
            <button @click="showMap = false" class="close-map-btn">[ CLOSE_MAP ]</button>
          </div>
          <div class="map-frame">
            <iframe
              src="https://maps.google.com/maps?q=Phnom%20Penh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
          <div class="address-readout">
            <p>> BP 511, Phum Tropeang Chhuk</p>
            <p>> (Borey Sorla) Sangtak, Street 371</p>
            <p>> Phnom Penh, Cambodia</p>
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// --- State Management ---
const showMap = ref(false)
const isSubmitting = ref(false)
const formStatus = ref(null)

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

// --- Validation Logic ---
const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.name = !form.name.trim() ? 'ERROR: NAME_REQUIRED' : ''
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email.trim()) errors.email = 'ERROR: EMAIL_REQUIRED'
      else if (!emailRegex.test(form.email)) errors.email = 'ERROR: INVALID_FORMAT'
      else errors.email = ''
      break
    case 'telegram':
      if (form.telegram.trim() && !form.telegram.trim().startsWith('@')) {
        errors.telegram = 'WARNING: MUST_START_WITH_@'
      } else {
        errors.telegram = ''
      }
      break
    case 'message':
      if (!form.message.trim()) errors.message = 'ERROR: NO_DATA'
      else if (form.message.trim().length < 10) errors.message = 'ERROR: TOO_SHORT'
      else errors.message = ''
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

// --- Telegram Bot Functionality ---
// PRESERVED TOKEN AND CHAT ID
const sendToTelegram = async (formData) => {
  const botToken = '8159518345:AAHjGgQxFE9iv5zArnuW8rI0NJu-K2UF5xk'
  const chatId = '7866260721'

  const telegramInfo = formData.telegram ? `\n<b>Telegram:</b> ${formData.telegram}` : ''

  const message = `
    <b>🚨 NEW SYSTEM CONTACT 🚨</b>
    <b>Name:</b> ${formData.name}
    <b>Email:</b> ${formData.email}
    ${telegramInfo}
    <b>Message:</b> ${formData.message}
    <b>Subscribed:</b> ${formData.subscribe ? 'YES' : 'NO'}
  `

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML'
    })
  })

  if (!response.ok) throw new Error('Telegram API Error')
  return response.json()
}

// --- Submit Handler ---
const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  formStatus.value = null

  try {
    await sendToTelegram(form)
    formStatus.value = {
      type: 'success',
      message: 'TRANSMISSION_SUCCESSFUL. STAND_BY.'
    }
    // Clear form excluding subscribe
    Object.keys(form).forEach(key => {
      if (key !== 'subscribe') form[key] = ''
    })
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'TRANSMISSION_FAILED. RETRY.'
    }
    console.error('Submission Error:', error)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style scoped>
/* --- Main Layout --- */
.hire-container {
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

/* --- Header --- */
.page-header {
  text-align: center;
  margin-bottom: 60px;
  border-bottom: 1px solid #333;
  padding-bottom: 30px;
}

.system-title {
  font-size: 3rem;
  margin: 0;
  color: #ffffff;
  letter-spacing: 2px;
}

.system-subtitle {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #666;
  margin-top: 10px;
  letter-spacing: 1px;
}

/* --- Grid System --- */
.contact-grid {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

/* --- Left Column: Info --- */
.info-card {
  border: 1px solid #333;
  background: #050505;
  padding: 25px;
  margin-bottom: 20px;
}

.card-label {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #666;
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 1px dashed #333;
  padding-bottom: 10px;
}

.channel-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.channel-item:hover, .channel-item.clickable:hover {
  border-color: #333;
  background: #111;
}

.channel-item.clickable {
  cursor: pointer;
}

.icon-box {
  color: #888;
}

.channel-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.channel-details .label {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.7rem;
  color: #555;
  margin-bottom: 2px;
}

.channel-details .value {
  font-size: 0.9rem;
  font-weight: 500;
  color: #ccc;
}

.arrow {
  color: #333;
  font-family: monospace;
}

.channel-item:hover .arrow {
  color: #fff;
}

/* Social Buttons */
.social-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.social-btn {
  text-align: center;
  border: 1px solid #333;
  color: #888;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.75rem;
  padding: 10px 0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: #fff;
  color: #fff;
  background: #111;
}

/* --- Right Column: Terminal Form --- */
.terminal-form-wrapper {
  background: #080808;
  border: 1px solid #333;
  padding: 2px; /* For outline effect */
}

.terminal-header {
  background: #111;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #333;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.terminal-title {
  margin-left: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #888;
}

.contact-form {
  padding: 30px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 8px;
}

.input-group input, 
.input-group textarea {
  background: #000;
  border: 1px solid #333;
  color: #fff;
  padding: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
}

.input-group input:focus, 
.input-group textarea:focus {
  border-color: #ffffff;
}

.error {
  border-color: #ff3333 !important;
}

.error-msg {
  color: #ff3333;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.7rem;
  margin-top: 5px;
}

/* Checkbox */
.checkbox-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
}

.checkbox-wrapper input {
  display: none;
}

.checkmark {
  width: 16px;
  height: 16px;
  border: 1px solid #333;
  background: #000;
  margin-right: 10px;
  position: relative;
}

.checkbox-wrapper input:checked ~ .checkmark {
  background: #fff;
}

.checkbox-text {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #888;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  background: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-btn:hover {
  background: #ffffff;
  color: #000000;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Status Message */
.status-message {
  margin-top: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  padding: 10px;
  border-left: 3px solid;
}
.status-message.success { border-color: #00ff00; color: #00ff00; background: rgba(0,255,0,0.05); }
.status-message.error { border-color: #ff0000; color: #ff0000; background: rgba(255,0,0,0.05); }

/* --- Map Interface --- */
.map-interface {
  background: #050505;
  border: 1px solid #333;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.map-header h3 {
  font-family: 'Courier New', Courier, monospace;
  color: #fff;
  margin: 0;
  font-size: 1rem;
}

.close-map-btn {
  background: none;
  border: none;
  color: #888;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
}
.close-map-btn:hover { color: #fff; }

.map-frame {
  flex-grow: 1;
  min-height: 300px;
  border: 1px solid #333;
  margin-bottom: 20px;
  filter: grayscale(100%) invert(90%); /* Cool inverted map effect */
}

.address-readout {
  font-family: 'Courier New', Courier, monospace;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.6;
}

/* --- Responsive --- */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .system-title {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style> -->
<template></template>