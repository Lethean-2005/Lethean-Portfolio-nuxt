<!-- <template>
  <div class="system-pricing">
    
    <header class="page-header">
      <h1 class="system-title">𝕾𝖊𝖗𝖛𝖎𝖈𝖊_𝕸𝖔𝖉𝖚𝖑𝖊𝖘</h1>
      <p class="system-subtitle">SELECT_CONFIGURATION // EXECUTE_CONTRACT</p>
    </header>

    <div class="content-wrapper">
      
      <div class="pricing-grid">
        <div v-for="(plan, index) in plansData" :key="plan.name" 
             class="pricing-card" 
             :class="{ 'featured': plan.name === 'Professional' }">
          
          <div class="card-header">
            <span class="plan-id">MOD_0{{ index + 1 }}</span>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <div class="plan-cost">
              <span class="currency">$</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="period">/PROJECT</span>
            </div>
          </div>

          <div class="divider"></div>

          <ul class="feature-list">
            <li v-for="(feature, fIndex) in plan.features" :key="fIndex">
              <span class="bullet">></span> {{ feature }}
            </li>
          </ul>

          <button class="action-btn" @click="selectPlan(plan.name)">
            [ INITIALIZE ]
          </button>

          <div v-if="plan.name === 'Professional'" class="rec-badge">
            RECOMMENDED_BUILD
          </div>
        </div>
      </div>

      <div class="bottom-grid">
        
        <div class="system-panel">
          <div class="panel-header">
            <h3>>> KNOWLEDGE_BASE_FAQ</h3>
          </div>
          <div class="faq-list">
            <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
              <div class="faq-question" @click="toggleFaq(index)">
                <span class="prompt">?</span> {{ faq.question }}
                <span class="toggle-icon">{{ faq.open ? '[-]' : '[+]' }}</span>
              </div>
              <div class="faq-answer" v-show="faq.open">
                <span class="arrow">↳</span> {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>

        <div class="system-panel plan-selection-container">
          <div class="panel-header">
            <h3>>> INITIATE_REQUEST</h3>
          </div>

          <form class="terminal-form" @submit.prevent="submitPlanSelection">
            
            <div class="form-group">
              <label>TARGET_MODULE:</label>
              <div class="plan-selector">
                <div v-for="plan in plansData" :key="plan.name" 
                     class="plan-option" 
                     :class="{ 'selected': selectedPlan === plan.name }"
                     @click="selectedPlan = plan.name">
                  {{ plan.name }}
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group half">
                <label>USER_ID (NAME)</label>
                <input type="text" v-model="form.name" placeholder="Enter name..." 
                       :class="{ 'error': errors.name }" @blur="validateField('name')" />
                <span class="error-msg" v-if="errors.name">ERROR: REQUIRED</span>
              </div>
              <div class="form-group half">
                <label>CONTACT_MAIL</label>
                <input type="email" v-model="form.email" placeholder="user@net.com" 
                       :class="{ 'error': errors.email }" @blur="validateField('email')" />
                <span class="error-msg" v-if="errors.email">ERROR: INVALID</span>
              </div>
            </div>

            <div class="form-group">
              <label>ORG_ID (COMPANY) [OPTIONAL]</label>
              <input type="text" v-model="form.company" placeholder="Enter company..." />
            </div>

            <div class="form-group">
              <label>ADDITIONAL_PARAMS</label>
              <textarea v-model="form.message" placeholder="Input details..." rows="2"></textarea>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-container">
                <input type="checkbox" v-model="form.subscribe">
                <span class="checkmark"></span>
                SUBSCRIBE_LOGS
              </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting">PROCESSING...</span>
              <span v-else>SEND_TRANSMISSION</span>
            </button>

            <div v-if="formStatus" :class="['status-line', formStatus.type]">
              > SYSTEM_MSG: {{ formStatus.message }}
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// Reorganized Data Structure for Loop
const plansData = [
  { 
    name: 'Static', 
    price: 300, 
    features: ['Landing Pages & Portfolios', 'Delivery: 3-7 Days', 'Basic Revisions Included'] 
  },
  { 
    name: 'Professional', 
    price: 900, 
    features: ['Full Website + Admin Dashboard', 'API Integration & Automation', 'Advanced Analytics', 'Premium Support'] 
  },
  { 
    name: 'Enterprise', 
    price: 1200, 
    features: ['Full System + Custom Backend', 'Unlimited Integrations', 'Custom Business Solutions'] 
  }
]

const selectedPlan = ref('Professional')

const faqs = reactive([
  { question: 'UPGRADE_PATH_AVAILABLE?', answer: 'AFFIRMATIVE. Plans can be scaled at any time.', open: false },
  { question: 'DISCOUNT_PROTOCOLS?', answer: 'Annual contracts receive a 20% efficiency credit.', open: false },
  { question: 'PAYMENT_GATEWAYS?', answer: 'Visa, Mastercard, PayPal, and Crypto accepted.', open: false },
  { question: 'CUSTOM_ARCHITECTURE?', answer: 'Enterprise modules allow full custom backend logic.', open: false }
])

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
  subscribe: false
})

const errors = reactive({ name: '', email: '' })
const isSubmitting = ref(false)
const formStatus = ref(null)

const toggleFaq = (index) => { faqs[index].open = !faqs[index].open }

const selectPlan = (planName) => {
  selectedPlan.value = planName
  document.querySelector('.plan-selection-container').scrollIntoView({ behavior: 'smooth' })
}

const validateField = (field) => {
  if (field === 'name') errors.name = !form.name.trim() ? 'Required' : ''
  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    errors.email = !form.email.trim() ? 'Required' : (!emailRegex.test(form.email) ? 'Invalid' : '')
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  return !errors.name && !errors.email
}

const sendToTelegram = async (formData) => {
  const botToken = '8159518345:AAHjGgQxFE9iv5zArnuW8rI0NJu-K2UF5xk'
  const chatId = '7866260721'
  const companyInfo = formData.company ? `\n<b>Company:</b> ${formData.company}` : ''
  const messageInfo = formData.message ? `\n<b>Message:</b> ${formData.message}` : ''

  const message = `
    <b>🚨 NEW PRICING REQUEST 🚨</b>
    <b>Module:</b> ${selectedPlan.value}
    <b>User:</b> ${formData.name}
    <b>Email:</b> ${formData.email}
    ${companyInfo}
    ${messageInfo}
    <b>Subscribed:</b> ${formData.subscribe ? 'YES' : 'NO'}
  `

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
  })

  if (!response.ok) throw new Error('API Error')
  return response.json()
}

const submitPlanSelection = async () => {
  if (!validateForm()) return
  isSubmitting.value = true
  formStatus.value = null

  try {
    await sendToTelegram(form)
    formStatus.value = { type: 'success', message: 'REQUEST_LOGGED_SUCCESSFULLY' }
    Object.keys(form).forEach(key => form[key] = key === 'subscribe' ? false : '')
  } catch (error) {
    formStatus.value = { type: 'error', message: 'CONNECTION_FAILURE' }
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => { document.documentElement.style.scrollBehavior = 'smooth' })
</script>

<style scoped>
/* --- Core Layout --- */
.system-pricing {
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
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

/* --- Pricing Cards --- */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;
}

.pricing-card {
  border: 1px solid #333;
  background: #050505;
  padding: 30px;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  border-color: #fff;
  transform: translateY(-5px);
}

.pricing-card.featured {
  border: 1px solid #666;
  background: #0a0a0a;
}

.rec-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  color: #000;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 4px 8px;
}

.card-header { text-align: left; }

.plan-id {
  font-family: 'Courier New', Courier, monospace;
  color: #666;
  font-size: 0.7rem;
  display: block;
  margin-bottom: 10px;
}

.plan-name {
  font-size: 1.5rem;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.plan-cost {
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  align-items: baseline;
}

.currency { font-size: 1rem; color: #888; margin-right: 2px; }
.amount { font-size: 2rem; color: #fff; font-weight: bold; }
.period { font-size: 0.7rem; color: #666; margin-left: 5px; }

.divider {
  height: 1px;
  background: #222;
  margin: 20px 0;
  width: 100%;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  flex-grow: 1;
}

.feature-list li {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #aaa;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
}

.bullet { color: #fff; margin-right: 10px; font-weight: bold; }

.action-btn {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  width: 100%;
  padding: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover { background: #fff; color: #000; }

/* --- Bottom Section --- */
.bottom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.system-panel {
  border: 1px solid #333;
  background: #050505;
  padding: 25px;
}

.panel-header h3 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  color: #888;
  border-bottom: 1px dashed #333;
  padding-bottom: 10px;
  margin: 0 0 20px 0;
}

/* FAQ */
.faq-item {
  border-bottom: 1px solid #111;
  margin-bottom: 10px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #ccc;
}
.faq-question:hover { color: #fff; }

.prompt { color: #555; margin-right: 10px; }

.faq-answer {
  padding: 0 0 15px 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.75rem;
  color: #888;
  line-height: 1.4;
}

.arrow { color: #555; margin-right: 5px; }

/* Form */
.terminal-form { display: flex; flex-direction: column; gap: 15px; }

.form-group label {
  display: block;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 5px;
}

.plan-selector { display: flex; gap: 10px; }

.plan-option {
  flex: 1;
  border: 1px solid #333;
  padding: 8px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.75rem;
  color: #666;
  cursor: pointer;
}

.plan-option.selected {
  border-color: #fff;
  color: #fff;
  background: #111;
}

.form-row { display: flex; gap: 15px; }
.half { flex: 1; }

input, textarea {
  width: 100%;
  background: #000;
  border: 1px solid #333;
  color: #fff;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  outline: none;
  box-sizing: border-box;
}

input:focus, textarea:focus { border-color: #fff; }
.error { border-color: #ff3333; }
.error-msg { color: #ff3333; font-size: 0.6rem; font-family: 'Courier New', Courier, monospace; display: block; margin-top: 2px;}

/* Checkbox */
.checkbox-group { margin-top: 5px; }
.checkbox-container { display: flex; align-items: center; cursor: pointer; }
.checkbox-container input { display: none; }
.checkmark {
  width: 12px; height: 12px;
  border: 1px solid #333;
  margin-right: 10px;
  display: inline-block;
}
.checkbox-container input:checked ~ .checkmark { background: #fff; }

.submit-btn {
  background: #fff;
  color: #000;
  border: none;
  padding: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}
.submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.status-line {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.75rem;
  margin-top: 10px;
}
.status-line.success { color: #00ff00; }
.status-line.error { color: #ff3333; }

/* --- Responsive --- */
@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr; }
  .bottom-grid { grid-template-columns: 1fr; }
  .system-title { font-size: 2rem; }
  .form-row { flex-direction: column; gap: 15px; }
}
</style> -->
<template></template>