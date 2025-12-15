<template>
  <div class="main-layout">
    
    <nav class="navbar" :class="{ 'mobile-menu-open': isMenuOpen }">
      
      <div class="nav-brand">
        <a href="#hero" class="brand-link">𝕿𝖍𝖊𝖆𝖓.</a>
      </div>

      <div class="nav-center desktop-only">
        <ul class="nav-links">
          <li><a href="#profile" :class="{ 'active': activeSection === 'profile' }" @click="setActive('profile')">𝕻𝖗𝖔𝖋𝖎𝖑𝖊</a></li>
          <li><a href="#skills" :class="{ 'active': activeSection === 'skills' }" @click="setActive('skills')">𝕾𝖐𝖎𝖑𝖑𝖘</a></li>
          <li><a href="#projects" :class="{ 'active': activeSection === 'projects' }" @click="setActive('projects')">𝕻𝖗𝖔𝖏𝖊𝖈𝖙𝖘</a></li>
          <li><a href="#pricing" :class="{ 'active': activeSection === 'pricing' }" @click="setActive('pricing')">𝕻𝖗𝖎𝖈𝖎𝖓𝖌</a></li>
          <li><a href="#contact" :class="{ 'active': activeSection === 'contact' }" @click="setActive('contact')">𝕳𝖎𝖗𝖊 𝖒𝖊</a></li>
        </ul>
      </div>

      <div class="nav-right">
        <a href="https://drive.google.com/file/d/1abfI5fj7f3g0dVoPiRI_XfeioJgLku39/view?usp=sharing" download class="btn-download">
          𝕯𝖔𝖜𝖓𝖑𝖔𝖆𝖉 𝕮𝖛
        </a>

        <div class="burger-menu mobile-only" @click="toggleMenu" :class="{ 'open': isMenuOpen }">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>

      <div class="mobile-dropdown" :class="{ 'open': isMenuOpen }">
        <ul class="mobile-links">
          <li><a href="#profile" @click="handleNavClick('profile')">𝕻𝖗𝖔𝖋𝖎𝖑𝖊</a></li>
          <li><a href="#skills" @click="handleNavClick('skills')">𝕾𝖐𝖎𝖑𝖑𝖘</a></li>
          <li><a href="#projects" @click="handleNavClick('projects')">𝕻𝖗𝖔𝖏𝖊𝖈𝖙𝖘</a></li>
          <li><a href="#pricing" @click="handleNavClick('pricing')">𝕻𝖗𝖎𝖈𝖎𝖓𝖌</a></li>
          <li><a href="#contact" @click="handleNavClick('contact')">𝕳𝖎𝖗𝖊 𝖒𝖊</a></li>
        </ul>
      </div>
    </nav>

    <section id="hero" class="section-observer">
      <div class="hero-container">
        <aside class="social-sidebar">
          <div class="line-top"></div>
          <div class="social-links">
            <a href="https://github.com/Lethean-2005" target="_blank" class="social-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.628-5.479 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
            <a href="https://t.me/Lethean_Seourn" target="_blank" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              <path d="M22 2L11 13" />
            </svg>
            </a>
            <a href="https://www.instagram.com/lethean.seourn/" target="_blank" class="social-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a>
          </div>
          <div class="line-bottom"></div>
        </aside>

        <main class="hero-content">
          <div class="text-section">
            <div class="badge fade-in-up">
              <span class="dot"></span> 2005 — 𝕻𝖗𝖊𝖘𝖊𝖓𝖙
            </div>

            <h1 class="headline fade-in-up delay-1">
              𝕯𝖊𝖘𝖎𝖌𝖓 <br class="mobile-break" />
              <span class="gothic">𝕿𝖊𝖈𝖍𝖓𝖔𝖑𝖔𝖌𝖞.</span>
            </h1>

            <p class="sub-text fade-in-up delay-2">
              Building digital experiences with a focus on motion,<br>
              interaction, and clean code.
            </p>

            <div class="cta-group fade-in-up delay-3">
              <a href="#profile" class="btn-primary">Explore Profile</a>
              <a href="#projects" class="btn-secondary">View Work</a>
            </div>
          </div>

          <div class="visual-section fade-in-up delay-2">
            <div class="big-text-wrapper">
              <span v-for="(letter, index) in designLetters" :key="index" class="big-letter" :class="{ active: index < activeIndex }">
                {{ letter }}
              </span>
            </div>
            <div class="image-container">
              <img src="/assets/images/logo/profile.png" alt="Lethean Seourn" class="profile-img-hero" />
              <div class="gradient-overlay"></div>
            </div>
          </div>
        </main>
      </div>
    </section>

    <section id="profile" class="section-observer">
      <div class="system-profile">
        <div class="system-bar">
          <span class="sys-id">USR: LETHEAN_SEOURN</span>
          <span class="sys-time">SYS_TIME: {{ time }}</span>
          <span class="sys-status">STATUS: ONLINE <span class="blink">_</span></span>
        </div>

        <div class="grid-layout">
          <aside class="identity-module">
            <div class="photo-frame">
              <div class="frame-decor tl"></div><div class="frame-decor tr"></div><div class="frame-decor bl"></div><div class="frame-decor br"></div>
              <img src="/assets/images/logo/profile.png" alt="Profile Scan" class="profile-img-sys" />
              <div class="scan-line"></div>
            </div>

            <div class="id-data">
              <h1 class="user-name">LETHEAN SEOURN</h1>
              <p class="user-role">[ FULLSTACK_DEVELOPER ]</p>
              <div class="data-row"><span class="label">LOC:</span><span class="val">PHNOM PENH, KH</span></div>
              <div class="data-row"><span class="label">EXP:</span><span class="val">2024 - PRESENT</span></div>
            </div>

            <div class="contact-matrix">
              <a href="mailto:letheanseourn05@gmail.com" class="matrix-btn"><span class="icon">✉</span> EMAIL_LINK</a>
              <a href="tel:+855968118930" class="matrix-btn"><span class="icon">☎</span> SECURE_LINE</a>
            </div>

            <div class="audio-module">
              <div class="audio-header"><span class="icon">🎧</span> AUDIO_DRIVER</div>
              <div class="equalizer">
                <span class="bar" style="animation-duration: 0.5s"></span><span class="bar" style="animation-duration: 0.8s"></span>
                <span class="bar" style="animation-duration: 1.1s"></span><span class="bar" style="animation-duration: 0.6s"></span>
                <span class="bar" style="animation-duration: 0.9s"></span>
              </div>
              <div class="track-info">NOW_PLAYING: IDLE_MODE</div>
            </div>
          </aside>

          <main class="data-feed">
            <section class="feed-block">
              <h2 class="block-header">> BIO_DATA_LOG</h2>
              <p class="terminal-text">
                I am a student at <span class="highlight">Passerelles Numériques Cambodia</span> majoring in Computer Science. 
                Specializing in unique design concepts and experimental interfaces. Currently operating as a Fullstack Developer.
              </p>
            </section>

            <section class="feed-block">
              <h2 class="block-header">> EXECUTION_LOG (EXPERIENCE)</h2>
              <div class="log-list">
                <div class="log-entry" v-for="(exp, i) in experiences" :key="i">
                  <div class="log-meta">
                    <span class="log-index">0{{ i + 1 }}</span>
                    <span class="log-line"></span>
                  </div>
                  <div class="log-content">
                    <h3 class="log-title">{{ exp.title }}</h3>
                    <p class="log-sub">{{ exp.sub }}</p>
                  </div>
                </div>
              </div>
            </section>

            <section class="feed-block">
              <h2 class="block-header">> KNOWLEDGE_BASE (EDUCATION)</h2>
              <div class="timeline">
                <div class="timeline-node">
                  <div class="node-marker"></div>
                  <div class="node-content">
                    <h4>PASSERELLES NUMÉRIQUES CAMBODIA</h4>
                    <p>Computer Science // Associate Degree</p>
                  </div>
                </div>
                <div class="timeline-node">
                  <div class="node-marker"></div>
                  <div class="node-content">
                    <h4>LVEA HIGH SCHOOL</h4>
                    <p>BacII Diploma // General Education</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>

    <section id="skills" class="section-observer">
      <div class="skills-container">
        <header class="page-header">
          <h1 class="system-title">𝕾𝖐𝖎𝖑𝖑𝖘_𝕸𝖆𝖙𝖗𝖎𝖝</h1>
          <p class="system-subtitle">SYSTEM STATUS: OPERATIONAL // LAST UPDATE: 2025</p>
        </header>

        <div class="bento-grid">
          <section class="system-card technical">
            <div class="card-header"><span class="icon">⚡</span><h2>Technical Stack</h2></div>
            <div class="skill-tags">
              <span v-for="skill in techStack" :key="skill" class="tag">{{ skill }}</span>
            </div>
          </section>

          <section class="system-card tools">
            <div class="card-header"><span class="icon">🛠</span><h2>Dev_Tools & Ops</h2></div>
            <div class="skill-tags">
              <span v-for="tool in devTools" :key="tool" class="tag">{{ tool }}</span>
            </div>
          </section>

          <section class="system-card core">
            <div class="card-header"><span class="icon">🧠</span><h2>Core_Protocols</h2></div>
            <ul class="terminal-list">
              <li v-for="skill in softSkills" :key="skill"><span class="prompt">></span> {{ skill }}</li>
            </ul>
          </section>
        </div>
      </div>
    </section>

    <section id="projects" class="section-observer">
      <div class="system-profile-project">
        <div class="crt-overlay"></div>
        <header class="system-header">
          <div class="header-left"><span class="sys-id">ID: LETHEAN_</span><span class="sys-role"> SOFTWARE DEVELOPER</span></div>
          <div class="header-right"><span class="status-live">SYSTEM ONLINE <span class="blink">●</span></span></div>
        </header>

        <div class="main-grid">
          <aside class="sidebar">
            <div class="module identity-box">
              <div class="avatar-container">
                <img src="/assets/images/logo/profile.png" alt="User" class="avatar-img" />
                <div class="scan-grid"></div>
              </div>
              <div class="user-details">
                <h1 class="glitch-text">LETHEAN SEOURN</h1>
                <p class="role-badge">SOFTWARE DEVELOPER</p>
                <ul class="meta-list">
                  <li><span class="label">LOC:</span> PHNOM PENH, KH</li>
                  <li><span class="label">EXP:</span> 2024 - PRESENT</li>
                </ul>
              </div>
            </div>
            <div class="module skills-box">
              <h3 class="module-title">> SKILL_MATRIX</h3>
              <div class="skill-tags"><span v-for="skill in matrixSkills" :key="skill" class="tag">{{ skill }}</span></div>
            </div>
          </aside>

          <main class="content-area">
            <section class="feed-section">
              <div class="section-head"><span class="icon">📂</span><h2>PROJECT_ARCHIVE_LOG</h2></div>
              <div class="project-list">
                <article v-for="(project, index) in projects" :key="index" class="project-card">
                  <div class="card-decoration top-right"></div><div class="card-decoration bottom-left"></div>
                  <div class="project-header">
                    <span class="project-index">0{{ index + 1 }}</span>
                    <div class="header-info">
                      <h3 class="project-title">{{ project.name }}</h3>
                      <span class="project-role">ROLE: {{ project.role }}</span>
                    </div>
                    <span class="project-date">{{ project.date }}</span>
                  </div>
                  <div class="project-body">
                    <p class="project-desc">{{ project.desc }}</p>
                    <div class="tech-stack">
                      <span v-for="tech in project.stack" :key="tech" class="tech-pill">{{ tech }}</span>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>

    <section id="pricing" class="section-observer">
      <div class="system-pricing">
        <div class="content-wrapper">
          <header class="page-header">
            <h1 class="system-title">𝕻𝖗𝖎𝖈𝖎𝖓𝖌</h1>
            <p class="system-subtitle">SELECT YOUR MODULE</p>
          </header>
          
          <div class="pricing-grid">
            <div v-for="(plan, index) in plansData" :key="plan.name" 
                 class="pricing-card" 
                 :class="{ 'featured': plan.name === 'Professional' }">
              
              <div v-if="plan.name === 'Professional'" class="rec-badge">
                RECOMMENDED
              </div>

              <div class="card-content">
                <span class="plan-id">MOD_0{{ index + 1 }}</span>
                <h3 class="plan-name">{{ plan.name }}</h3>
                <div class="plan-cost">
                  <span class="currency">$</span>
                  <span class="amount">{{ plan.price }}</span>
                  <span class="period">/PROJECT</span>
                </div>

                <div class="divider-dashed"></div>

                <ul class="feature-list">
                  <li v-for="(feature, fIndex) in plan.features" :key="fIndex">
                    <span class="bullet">></span> {{ feature }}
                  </li>
                </ul>
              </div>

              <button class="action-btn" @click="selectPlan(plan.name)">
                [ INITIALIZE ]
              </button>
            </div>
          </div>

          <div class="bottom-grid">
            
            <div class="system-panel">
              <div class="panel-header">
                <h3>>> KNOWLEDGE_BASE_FAQ</h3>
                <div class="dashed-line"></div>
              </div>
              <div class="faq-list">
                <div class="faq-item" v-for="(faq, index) in faqs" :key="index" @click="toggleFaq(index)">
                  <div class="faq-question">
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
                <div class="dashed-line"></div>
              </div>

              <form class="terminal-form" @submit.prevent="submitPricing">
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
                    <input type="text" v-model="pricingForm.name" placeholder="Enter name..." :class="{ 'error': pricingErrors.name }" @blur="validatePricingField('name')" />
                  </div>
                  <div class="form-group half">
                    <label>CONTACT_MAIL</label>
                    <input type="email" v-model="pricingForm.email" placeholder="user@net.com" :class="{ 'error': pricingErrors.email }" @blur="validatePricingField('email')" />
                  </div>
                </div>

                <div class="form-group">
                  <label>ORG_ID (COMPANY) [OPTIONAL]</label>
                  <input type="text" v-model="pricingForm.company" placeholder="Enter company..." />
                </div>

                <button type="submit" class="submit-btn" :disabled="isPricingSubmitting">
                  <span v-if="isPricingSubmitting">PROCESSING...</span>
                  <span v-else>[ EXECUTE_ORDER ]</span>
                </button>

                <div v-if="pricingStatus" :class="['status-line', pricingStatus.type]">
                  > SYSTEM_MSG: {{ pricingStatus.message }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section-observer">
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
                  <div class="icon-box"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg></div>
                  <div class="channel-details"><span class="label">CONTACT_MAIL</span><span class="value">letheanseourn05@gmail.com</span></div>
                </a>
                <a href="tel:+855968118930" class="channel-item">
                  <div class="icon-box"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg></div>
                  <div class="channel-details"><span class="label">PHONE_LINE</span><span class="value">+855 968 118 930</span></div>
                </a>
                <div class="channel-item clickable" @click="showMap = true">
                  <div class="icon-box"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                  <div class="channel-details"><span class="label">BASE_LOCATION</span><span class="value">Phnom Penh, Cambodia</span></div>
                </div>
              </div>
            </div>
            <div class="social-bar">
              <a href="https://t.me/Lethean_Seourn" target="_blank" class="social-btn">TELEGRAM</a>
              <a href="https://www.tiktok.com/@lethean.seourn" target="_blank" class="social-btn">TIKTOK</a>
              <a href="https://www.linkedin.com/in/lethean-seourn-bb0940344/" target="_blank" class="social-btn">LINKEDIN</a>
            </div>
          </aside>

          <main class="form-interface">
            <div v-if="!showMap" class="terminal-form-wrapper">
              <div class="terminal-header"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span class="terminal-title">message_input.exe</span></div>
              <form class="contact-form" @submit.prevent="submitContact">
                <div class="form-row">
                  <div class="input-group">
                    <label>NAME_ID</label>
                    <input type="text" v-model="contactForm.name" placeholder="Enter identification..." :class="{ 'error': contactErrors.name }" @blur="validateContactField('name')" />
                  </div>
                  <div class="input-group">
                    <label>CONTACT_MAIL</label>
                    <input type="email" v-model="contactForm.email" placeholder="user@domain.com" :class="{ 'error': contactErrors.email }" @blur="validateContactField('email')" />
                  </div>
                </div>
                <div class="input-group">
                  <label>TELEGRAM_HANDLE (OPTIONAL)</label>
                  <input type="text" v-model="contactForm.telegram" placeholder="@username" @blur="validateContactField('telegram')" />
                </div>
                <div class="input-group">
                  <label>MESSAGE_PAYLOAD</label>
                  <textarea v-model="contactForm.message" placeholder="Input message data..." rows="5" :class="{ 'error': contactErrors.message }" @blur="validateContactField('message')"></textarea>
                </div>
                <button type="submit" class="submit-btn" :disabled="isContactSubmitting">
                  <span v-if="isContactSubmitting">[ TRANSMITTING... ]</span>
                  <span v-else>SEND_TRANSMISSION</span>
                </button>
                <div v-if="contactStatus" :class="['status-message', contactStatus.type]">> {{ contactStatus.message }}</div>
              </form>
            </div>

            <div v-else class="map-interface">
              <div class="map-header"><h3>LOCATION_DATA</h3><button @click="showMap = false" class="close-map-btn">[ CLOSE_MAP ]</button></div>
              <div class="map-frame">
                <iframe src="https://maps.google.com/maps?q=Phnom%20Penh&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
    </section>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

/* --- GLOBAL NAVIGATION STATE --- */
const activeSection = ref('hero')
const isMenuOpen = ref(false)

const setActive = (sectionId) => {
  activeSection.value = sectionId
}

const toggleMenu = () => {
  if (window.innerWidth <= 900) {
    isMenuOpen.value = !isMenuOpen.value
  }
}

const handleNavClick = (sectionId) => {
  setActive(sectionId)
  if (window.innerWidth <= 900) {
    isMenuOpen.value = false
  }
}

/* --- SECTION 1: HERO LOGIC --- */
const designLetters = ['F', 'U', 'L', 'L', 'S', 'T', 'A', 'C', 'K']
const activeIndex = ref(0)
let heroIntervalId = null

/* --- SECTION 2: PROFILE LOGIC --- */
const time = ref('00:00:00')
let clockTimer = null

const experiences = [
  { title: "FREELANCER", sub: "Fullstack Developer // 2025 - PRESENT" },
  { title: "AJIP CONSULTING", sub: "Software Developer // Contract" },
  { title: "OPEN SOURCE", sub: "Vue.js Ecosystem Contributor" }
]

const updateTime = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString('en-GB', { hour12: false })
}

/* --- SECTION 3: SKILLS MATRIX LOGIC --- */
const techStack = ref([
  'Vue.js', 'Laravel', 'PHP', 'MySQL', 
  'JavaScript', 'HTML5 / CSS3', 'Node.js (API)', 
  'TypeScript (OOP)', 'Python (Algo)', 'Power BI'
]);

const devTools = ref([
  'Git / GitHub', 'Jira', 'AWS', 'Linux', 
  'Docker', 'Postman', 'Figma', 'Netlify / Vercel',
  'AI Tools (ChatGPT, Copilot)'
]);

const softSkills = ref([
  'Critical Thinking', 'Complex Problem Solving',
  'Agile / Scrum Teamwork', 'Task & Time Management',
  'Attention to Detail', 'Effective Communication'
]);

/* --- SECTION 4: PROJECTS LOGIC --- */
const matrixSkills = ref([
  'Vue.js', 'PHP / Laravel', 'MySQL', 'JavaScript', 
  'HTML/CSS', 'Python', 'Node.js', 'Power BI', 'Git/GitHub'
])

const projects = ref([
  {
    name: 'POS SYSTEM (VC1)',
    role: 'Product Owner & Developer',
    date: 'FEB - MAY 2025',
    desc: 'Led E-commerce System development. Coordinated front-end and back-end implementation using MVC architecture.',
    stack: ['PHP (MVC)', 'MySQL', 'Bootstrap', 'Jira']
  },
  {
    name: 'VICTUAL COMPANY',
    role: 'Backend Developer',
    date: 'FEB 2025',
    desc: 'Developed robust backend API architecture and database schema for company operations.',
    stack: ['PHP', 'Laravel', 'MySQL']
  },
  {
    name: 'AIR QUALITY DASHBOARD',
    role: 'Developer',
    date: 'JAN 2025',
    desc: 'Built real-time dashboard monitoring air quality indices with data visualization.',
    stack: ['Vue.js', 'API Integration', 'Chart.js']
  },
  {
    name: 'TASK MANAGEMENT APP',
    role: 'Git Manager',
    date: 'JAN 2025',
    desc: 'Managed team roles and version control. Led front-end development with a focus on responsive and user-friendly design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub']
  },
  {
    name: 'TELEGRAM CHATBOT',
    role: 'Team Leader',
    date: 'NOV 2024',
    desc: 'Built a bot to automate interactions using Telegram API. Designed custom commands and real-time response handling.',
    stack: ['Python', 'Telegram API', 'Automation']
  },
  {
    name: 'MUSIC BAND WEBSITE',
    role: 'Team Leader',
    date: 'SEP - NOV 2024',
    desc: 'Led static web design project. Managed tasks via GitHub and deployed final build to Netlify.',
    stack: ['HTML', 'SASS', 'Netlify', 'Figma']
  }
])

/* --- SECTION 5: PRICING LOGIC --- */
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

const pricingForm = reactive({ name: '', email: '', company: '', message: '', subscribe: false })
const pricingErrors = reactive({ name: '', email: '' })
const isPricingSubmitting = ref(false)
const pricingStatus = ref(null)

const toggleFaq = (index) => { faqs[index].open = !faqs[index].open }

const selectPlan = (planName) => {
  selectedPlan.value = planName
  const el = document.querySelector('.plan-selection-container')
  if(el) el.scrollIntoView({ behavior: 'smooth' })
}

const validatePricingField = (field) => {
  if (field === 'name') pricingErrors.name = !pricingForm.name.trim() ? 'Required' : ''
  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    pricingErrors.email = !pricingForm.email.trim() ? 'Required' : (!emailRegex.test(pricingForm.email) ? 'Invalid' : '')
  }
}

const validatePricingForm = () => {
  validatePricingField('name')
  validatePricingField('email')
  return !pricingErrors.name && !pricingErrors.email
}

const submitPricing = async () => {
  if (!validatePricingForm()) return
  isPricingSubmitting.value = true
  pricingStatus.value = null

  try {
    const message = `
      <b>🚨 NEW PRICING REQUEST 🚨</b>
      <b>Module:</b> ${selectedPlan.value}
      <b>User:</b> ${pricingForm.name}
      <b>Email:</b> ${pricingForm.email}
      ${pricingForm.company ? `\n<b>Company:</b> ${pricingForm.company}` : ''}
      ${pricingForm.message ? `\n<b>Message:</b> ${pricingForm.message}` : ''}
      <b>Subscribed:</b> ${pricingForm.subscribe ? 'YES' : 'NO'}
    `
    await sendToTelegramGeneric(message)
    pricingStatus.value = { type: 'success', message: 'REQUEST_LOGGED_SUCCESSFULLY' }
    Object.keys(pricingForm).forEach(key => pricingForm[key] = key === 'subscribe' ? false : '')
  } catch (error) {
    pricingStatus.value = { type: 'error', message: 'CONNECTION_FAILURE' }
  } finally {
    isPricingSubmitting.value = false
  }
}

/* --- SECTION 6: CONTACT LOGIC --- */
const showMap = ref(false)
const isContactSubmitting = ref(false)
const contactStatus = ref(null)

const contactForm = reactive({ name: '', email: '', telegram: '', message: '', subscribe: false })
const contactErrors = reactive({ name: '', email: '', telegram: '', message: '' })

const validateContactField = (field) => {
  switch (field) {
    case 'name':
      contactErrors.name = !contactForm.name.trim() ? 'ERROR: NAME_REQUIRED' : ''
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!contactForm.email.trim()) contactErrors.email = 'ERROR: EMAIL_REQUIRED'
      else if (!emailRegex.test(contactForm.email)) contactErrors.email = 'ERROR: INVALID_FORMAT'
      else contactErrors.email = ''
      break
    case 'telegram':
      if (contactForm.telegram.trim() && !contactForm.telegram.trim().startsWith('@')) {
        contactErrors.telegram = 'WARNING: MUST_START_WITH_@'
      } else {
        contactErrors.telegram = ''
      }
      break
    case 'message':
      if (!contactForm.message.trim()) contactErrors.message = 'ERROR: NO_DATA'
      else if (contactForm.message.trim().length < 10) contactErrors.message = 'ERROR: TOO_SHORT'
      else contactErrors.message = ''
      break
  }
}

const validateContactForm = () => {
  validateContactField('name')
  validateContactField('email')
  validateContactField('telegram')
  validateContactField('message')
  return !contactErrors.name && !contactErrors.email && !contactErrors.telegram && !contactErrors.message
}

const submitContact = async () => {
  if (!validateContactForm()) return
  isContactSubmitting.value = true
  contactStatus.value = null

  try {
    const message = `
      <b>🚨 NEW SYSTEM CONTACT 🚨</b>
      <b>Name:</b> ${contactForm.name}
      <b>Email:</b> ${contactForm.email}
      ${contactForm.telegram ? `\n<b>Telegram:</b> ${contactForm.telegram}` : ''}
      <b>Message:</b> ${contactForm.message}
      <b>Subscribed:</b> ${contactForm.subscribe ? 'YES' : 'NO'}
    `
    await sendToTelegramGeneric(message)
    contactStatus.value = { type: 'success', message: 'TRANSMISSION_SUCCESSFUL. STAND_BY.' }
    Object.keys(contactForm).forEach(key => { if (key !== 'subscribe') contactForm[key] = '' })
  } catch (error) {
    contactStatus.value = { type: 'error', message: 'TRANSMISSION_FAILED. RETRY.' }
  } finally {
    isContactSubmitting.value = false
  }
}

/* --- SHARED TELEGRAM FUNCTION --- */
const sendToTelegramGeneric = async (messageText) => {
  const botToken = '8159518345:AAHjGgQxFE9iv5zArnuW8rI0NJu-K2UF5xk'
  const chatId = '7866260721'
  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: messageText, parse_mode: 'HTML' })
  })
  if (!response.ok) throw new Error('API Error')
  return response.json()
}

/* --- OBSERVER FOR ACTIVE LINK --- */
let observer = null
const observeSections = () => {
  const options = { threshold: 0.3 }
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)
  
  document.querySelectorAll('.section-observer').forEach(section => {
    observer.observe(section)
  })
}

/* --- LIFECYCLE HOOKS --- */
onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Hero Interval
  heroIntervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % (designLetters.length + 1)
  }, 400)

  // Profile Clock
  updateTime()
  clockTimer = setInterval(updateTime, 1000)

  // Init Observer
  observeSections()
})

onUnmounted(() => {
  if (heroIntervalId) clearInterval(heroIntervalId)
  if (clockTimer) clearInterval(clockTimer)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* --- GLOBAL RESET & LAYOUT --- */
* { box-sizing: border-box; }
html, body { overflow-x: hidden; width: 100%; margin: 0; padding: 0; }

.main-layout {
  background-color: #000000;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding-top: 80px; /* Offset for Fixed Navbar */
}

/* --- NAVIGATION STYLES (Grid for Perfect Centering) --- */
.navbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* Logo | Center Links | Actions */
  align-items: center;
  background-color: #000000; 
  padding: 20px 50px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
  border-bottom: 1px solid #1a1a1a;
  transition: all 0.3s ease;
}

/* 1. Logo (Left) */
.nav-brand { justify-self: start; display: flex; align-items: center; z-index: 1001; }
.brand-link {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1px;
}

/* 2. Links (Center - Desktop) */
.nav-center { justify-self: center; }
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 35px;
  font-size: 12px;
}

.nav-links li a {
  text-decoration: none;
  color: #b3b3b3;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-links li a:hover,
.nav-links li a.active { 
  color: #ffffff; 
}

/* 3. Right Actions (Download Button & Burger) */
.nav-right { justify-self: end; display: flex; align-items: center; gap: 15px; }

.btn-download {
  background-color: #ffffff;
  color: #050505;
  padding: 10px 24px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 1px solid #ffffff;
  white-space: nowrap;
}
.btn-download:hover { background-color: transparent; color: #ffffff; }

/* Mobile Only Elements */
.burger-menu { display: none; flex-direction: column; cursor: pointer; z-index: 1002; gap: 5px; }
.bar { width: 25px; height: 2px; background-color: #ffffff; transition: 0.3s; }
.mobile-dropdown {
  position: absolute; top: 100%; left: 0; width: 100%;
  background-color: #000; border-bottom: 1px solid #333;
  padding: 0; max-height: 0; overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  display: flex; flex-direction: column; align-items: center;
}
.mobile-dropdown.open { max-height: 400px; padding: 20px 0; }
.mobile-links { list-style: none; padding: 0; margin: 0; text-align: center; width: 100%; }
.mobile-links li { margin: 15px 0; }
.mobile-links li a { color: #fff; font-size: 1rem; text-decoration: none; text-transform: uppercase; letter-spacing: 2px; }

/* --- HERO STYLES --- */
.hero-container {
  position: relative;
  min-height: calc(100vh - 80px);
  overflow: hidden;
  display: flex;
  align-items: center;
}

.social-sidebar {
  position: fixed;
  left: 40px;
  top: 80px; /* Adjust for navbar */
  bottom: 0;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.social-link {
  color: #666;
  text-decoration: none;
  margin: 15px 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover { color: #ffffff; transform: translateY(-2px); }

.line-top, .line-bottom { flex-grow: 1; width: 1px; background: linear-gradient(to bottom, transparent, #222); }
.line-bottom { background: linear-gradient(to top, transparent, #222); }

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 100px;
  align-items: center;
}

.text-section { padding-right: 20px; }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.badge .dot { width: 6px; height: 6px; background-color: #fff; border-radius: 50%; }

.headline {
  font-size: clamp(3rem, 5vw, 5rem); /* Responsive Font */
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 25px;
  letter-spacing: -2px;
  color: #fff;
}
.gothic { color: #888; }
.sub-text { font-size: 1rem; color: #888; line-height: 1.6; margin-bottom: 45px; max-width: 420px; }

.cta-group { display: flex; gap: 15px; align-items: center; }

.btn-primary {
  background-color: #ffffff; color: #000000; padding: 14px 34px;
  font-size: 11px; font-weight: 700; text-transform: uppercase;
  text-decoration: none; border-radius: 4px; letter-spacing: 1px;
  border: 1px solid #ffffff; transition: all 0.3s ease;
  white-space: nowrap;
}
.btn-primary:hover { background-color: transparent; color: #ffffff; }

.btn-secondary {
  background-color: transparent; color: #888; padding: 14px 34px;
  font-size: 11px; font-weight: 700; text-transform: uppercase;
  text-decoration: none; border-radius: 4px; letter-spacing: 1px;
  border: 1px solid #333; transition: all 0.3s ease;
  white-space: nowrap;
}
.btn-secondary:hover { color: #ffffff; border-color: #ffffff; }

.visual-section { position: relative; height: 600px; display: flex; align-items: center; justify-content: center; }
.big-text-wrapper {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  z-index: 0; width: 100%; display: flex; justify-content: center; pointer-events: none;
}
.big-letter {
  font-size: 9rem; font-weight: 900; color: transparent;
  -webkit-text-stroke: 1px #1a1a1a; transition: all 0.3s ease; line-height: 1;
}
.big-letter.active { -webkit-text-stroke: 1px #333; }
.image-container {
  position: relative; z-index: 1; width: 100%; max-width: 320px; height: auto;
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
}
.profile-img-hero { width: 100%; height: auto; object-fit: contain; filter: grayscale(100%); transition: filter 0.5s ease; }
.profile-img-hero:hover { filter: grayscale(0%); }

/* --- PROFILE SYSTEM STYLES --- */
.system-profile {
  min-height: 100vh;
  padding: 80px 20px 20px 20px;
  box-sizing: border-box;
}

.system-bar {
  display: flex; justify-content: space-between; border-bottom: 1px solid #333;
  padding-bottom: 10px; margin-bottom: 30px; font-size: 0.75rem;
  color: #666; text-transform: uppercase; letter-spacing: 1px;
  font-family: 'Courier New', Courier, monospace;
}
.sys-status .blink { animation: blink 1s infinite; color: #00ff00; }

.grid-layout { display: grid; grid-template-columns: 320px 1fr; gap: 30px; max-width: 1200px; margin: 0 auto; }
.identity-module { display: flex; flex-direction: column; gap: 20px; }

.photo-frame {
  position: relative; width: 100%; aspect-ratio: 1/1;
  border: 1px solid #333; padding: 10px; background: #050505;
}
.profile-img-sys { width: 100%; height: 100%; object-fit: cover; object-position: top center; filter: grayscale(100%) contrast(1.2); display: block; }
.frame-decor { position: absolute; width: 10px; height: 10px; border-color: #ffffff; border-style: solid; }
.tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
.bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
.br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

.scan-line {
  position: absolute; top: 0; left: 0; width: 100%; height: 2px;
  background: rgba(255, 255, 255, 0.5); box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: scan 3s linear infinite; pointer-events: none;
}

.id-data { border: 1px solid #333; padding: 20px; background: #050505; }
.user-name { font-size: 1.4rem; font-weight: 800; margin: 0 0 5px 0; letter-spacing: 1px; word-break: break-word;}
.user-role { color: #888; font-size: 0.8rem; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px dashed #333; font-family: 'Courier New', Courier, monospace; }
.data-row { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 8px; font-family: 'Courier New', Courier, monospace; }
.label { color: #555; } .val { color: #ccc; }

.contact-matrix { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.matrix-btn {
  border: 1px solid #333; color: #888; padding: 10px; text-align: center;
  font-size: 0.7rem; text-decoration: none; transition: all 0.3s;
  font-family: 'Courier New', Courier, monospace;
}
.matrix-btn:hover { background: #fff; color: #000; }

.audio-module { border: 1px solid #333; padding: 15px; margin-top: auto; font-family: 'Courier New', Courier, monospace; }
.audio-header { font-size: 0.7rem; color: #555; margin-bottom: 10px; display: flex; gap: 5px; }
.equalizer { display: flex; gap: 3px; height: 20px; align-items: flex-end; margin-bottom: 10px; }
.bar { width: 100%; background: #333; animation: equalize 1s infinite ease-in-out; }
.track-info { font-size: 0.65rem; color: #444; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.feed-block { margin-bottom: 40px; }
.block-header { font-size: 1rem; color: #fff; border-bottom: 1px solid #333; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 1px; font-family: 'Courier New', Courier, monospace; }
.terminal-text { font-size: 0.95rem; line-height: 1.6; color: #b3b3b3; max-width: 600px; font-family: 'Courier New', Courier, monospace; }
.highlight { color: #fff; border-bottom: 1px solid #666; }

.log-list { display: flex; flex-direction: column; gap: 20px; }
.log-entry { display: flex; gap: 20px; align-items: flex-start; }
.log-meta { display: flex; flex-direction: column; align-items: center; gap: 5px; }
.log-index { color: #444; font-size: 0.8rem; font-family: 'Courier New', Courier, monospace; }
.log-line { width: 1px; height: 30px; background: #222; }
.log-content { border: 1px solid #222; padding: 15px; flex-grow: 1; background: #050505; transition: border-color 0.3s; }
.log-content:hover { border-color: #666; }
.log-title { margin: 0; font-size: 1rem; color: #fff; }
.log-sub { margin: 5px 0 0 0; font-size: 0.8rem; color: #666; font-family: 'Courier New', Courier, monospace; }

.timeline { border-left: 1px solid #333; padding-left: 20px; display: flex; flex-direction: column; gap: 30px; }
.timeline-node { position: relative; }
.node-marker { position: absolute; left: -25px; top: 5px; width: 9px; height: 9px; background: #000; border: 1px solid #fff; }
.node-content h4 { margin: 0; font-size: 0.95rem; color: #fff; }
.node-content p { margin: 5px 0 0 0; font-size: 0.8rem; color: #666; font-family: 'Courier New', Courier, monospace; }

/* --- SKILLS STYLES --- */
.skills-container { min-height: 100vh; padding: 80px 20px; box-sizing: border-box; }
.page-header { text-align: center; margin-bottom: 60px; border-bottom: 1px solid #333; padding-bottom: 30px; }
.system-title { font-size: 3rem; margin: 0; letter-spacing: 2px; color: #ffffff; word-break: break-word; }
.system-subtitle { font-family: 'Courier New', Courier, monospace; font-size: 0.8rem; color: #666; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase; }

.bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; }
.system-card { border: 1px solid #333; padding: 30px; background: #050505; transition: all 0.3s ease; position: relative; overflow: hidden; }
.system-card:hover { border-color: #ffffff; transform: translateY(-2px); box-shadow: 0 4px 20px rgba(255, 255, 255, 0.05); }

.card-header { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; border-bottom: 1px solid #222; padding-bottom: 15px; }
.card-header h2 { font-size: 1.2rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin: 0; font-family: 'Courier New', Courier, monospace; }
.icon { font-size: 1.5rem; }

.skill-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.tag { background-color: #111; border: 1px solid #333; color: #ccc; padding: 8px 16px; font-size: 0.85rem; font-family: 'Courier New', Courier, monospace; transition: all 0.2s ease; cursor: default; }
.tag:hover { background-color: #ffffff; color: #000000; border-color: #ffffff; font-weight: bold; }

.terminal-list { list-style: none; padding: 0; margin: 0; }
.terminal-list li { font-family: 'Courier New', Courier, monospace; font-size: 0.95rem; color: #b3b3b3; margin-bottom: 12px; padding-left: 10px; transition: color 0.2s; }
.terminal-list li:hover { color: #ffffff; }
.prompt { color: #444; margin-right: 10px; font-weight: bold; }

/* --- PROJECTS STYLES (CRT) --- */
.system-profile-project {
  --bg-color: #050505; --card-bg: #0a0a0a; --border: #333; --accent: #fff;
  --text-main: #e0e0e0; --text-dim: #777; --font-mono: 'Courier New', Courier, monospace;
  --font-sans: 'Helvetica Neue', Helvetica, sans-serif;
  background: var(--bg-color); min-height: 100vh; color: var(--text-main);
  font-family: var(--font-mono); padding: 80px 20px; position: relative; overflow: hidden;
}
.crt-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
  background-size: 100% 4px; pointer-events: none; z-index: 10;
}
.system-header { display: flex; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 15px; margin-bottom: 40px; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; flex-wrap: wrap; gap: 10px; }
.status-live { color: var(--text-main); }
.main-grid { display: grid; grid-template-columns: 320px 1fr; gap: 30px; max-width: 1200px; margin: 0 auto; }
.module { background: var(--card-bg); border: 1px solid var(--border); padding: 20px; margin-bottom: 20px; }
.avatar-container { width: 100%; aspect-ratio: 1; background: #000; border: 1px solid var(--border); margin-bottom: 20px; position: relative; overflow: hidden; }
.avatar-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; filter: grayscale(100%) contrast(1.2); }
.user-details h1 { font-family: var(--font-sans); font-size: 1.4rem; margin: 0; color: var(--accent); letter-spacing: -0.5px; }
.role-badge { font-size: 0.75rem; color: var(--text-dim); border-bottom: 1px dashed var(--border); padding-bottom: 15px; margin-bottom: 15px; }
.meta-list { list-style: none; padding: 0; margin: 0 0 20px 0; font-size: 0.8rem; }
.meta-list li { margin-bottom: 8px; color: var(--text-dim); }
.module-title { font-size: 0.9rem; border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 15px; }
.section-head { display: flex; align-items: center; gap: 10px; margin-bottom: 30px; border-bottom: 1px solid var(--border); padding-bottom: 10px; }
.project-list { display: grid; gap: 20px; }
.project-card { position: relative; background: var(--card-bg); border: 1px solid var(--border); padding: 25px; transition: transform 0.2s, border-color 0.2s; }
.project-card:hover { border-color: #666; transform: translateX(5px); }
.card-decoration { position: absolute; width: 8px; height: 8px; border: 1px solid var(--accent); transition: 0.3s; }
.top-right { top: -1px; right: -1px; border-width: 0 1px 1px 0; }
.bottom-left { bottom: -1px; left: -1px; border-width: 1px 0 0 1px; }
.project-card:hover .card-decoration { width: 100%; height: 100%; border-color: rgba(255,255,255,0.1); }
.project-header { display: flex; gap: 15px; margin-bottom: 15px; align-items: flex-start; flex-wrap: wrap; }
.project-index { font-size: 1.5rem; color: #333; font-weight: bold; }
.header-info { flex: 1; }
.project-title { margin: 0; font-size: 1.1rem; color: var(--accent); }
.project-role { font-size: 0.75rem; color: var(--text-dim); display: block; margin-top: 4px; }
.project-date { font-size: 0.75rem; border: 1px solid #333; padding: 4px 8px; border-radius: 12px; white-space: nowrap; }
.project-desc { font-size: 0.9rem; line-height: 1.5; color: #999; margin-bottom: 20px; }
.tech-stack { display: flex; gap: 8px; flex-wrap: wrap; }
.tech-pill { font-size: 0.7rem; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 2px; color: #ccc; }

/* --- PRICING SECTION STYLES (TERMINAL THEME) --- */
.system-pricing {
  min-height: 100vh;
  padding: 80px 20px;
  background-color: #000;
  font-family: 'Courier New', Courier, monospace; /* Force terminal font */
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px; /* Space between the row of 3 and row of 2 */
}

/* TOP ROW: 3 EQUAL BOXES */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  align-items: stretch; /* Ensures all 3 boxes are same height */
}

.pricing-card {
  border: 1px solid #333;
  background: #000;
  padding: 40px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.3s ease;
}

.pricing-card:hover {
  border-color: #fff;
}

/* Recommended Badge */
.rec-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: #fff;
  color: #000;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Card Content Typography */
.plan-id {
  color: #555;
  font-size: 10px;
  display: block;
  margin-bottom: 10px;
}

.plan-name {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 0 10px 0;
  text-transform: uppercase;
}

.plan-cost {
  margin-bottom: 20px;
}
.currency { font-size: 1.2rem; vertical-align: top; color: #888; }
.amount { font-size: 2.5rem; color: #fff; font-weight: 700; }
.period { font-size: 0.7rem; color: #666; margin-left: 5px; }

.divider-dashed {
  border-bottom: 1px dashed #333;
  margin: 20px 0;
  width: 100%;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}

.feature-list li {
  color: #bbb;
  font-size: 0.85rem;
  margin-bottom: 12px;
  line-height: 1.4;
}

.bullet { color: #fff; margin-right: 8px; }

/* Action Button */
.action-btn {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;
  width: 100%;
}

.action-btn:hover {
  background: #fff;
  color: #000;
}

/* BOTTOM ROW: 2 EQUAL BOXES */
.bottom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  align-items: start;
}

.system-panel {
  border: 1px solid #333;
  padding: 40px 30px;
  background: #000;
  height: 100%; /* Match height if content differs slightly */
}

.panel-header h3 {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 10px 0;
  font-weight: normal;
}

.dashed-line {
  border-bottom: 1px dashed #333;
  margin-bottom: 25px;
}

/* FAQ Styling */
.faq-item {
  border-bottom: 1px solid #111;
  padding: 15px 0;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  color: #ddd;
  font-size: 0.8rem;
}

.faq-answer {
  color: #777;
  font-size: 0.8rem;
  margin-top: 10px;
  padding-left: 15px;
}

.toggle-icon { color: #fff; }

/* Form Styling */
.terminal-form { display: flex; flex-direction: column; gap: 20px; }

.form-group label {
  color: #555;
  font-size: 0.7rem;
  display: block;
  margin-bottom: 8px;
}

/* Plan Selector Buttons */
.plan-selector {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.plan-option {
  border: 1px solid #333;
  padding: 10px;
  text-align: center;
  font-size: 0.75rem;
  color: #666;
  cursor: pointer;
  transition: 0.2s;
}

.plan-option:hover { border-color: #666; }
.plan-option.selected {
  border: 1px solid #fff;
  color: #fff;
}

/* Inputs */
.form-row { display: flex; gap: 20px; }
.half { flex: 1; }

input {
  width: 100%;
  background: #000;
  border: 1px solid #333;
  color: #fff;
  padding: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  outline: none;
}

input:focus { border-color: #fff; }

.submit-btn {
  margin-top: 10px;
  border: none;
  background: #fff;
  color: #000;
  padding: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  cursor: pointer;
}

/* --- CONTACT STYLES --- */
.hire-container { min-height: 100vh; padding: 80px 20px; box-sizing: border-box; }
.contact-grid { display: grid; grid-template-columns: 350px 1fr; gap: 40px; max-width: 1100px; margin: 0 auto; }
.info-card { border: 1px solid #333; background: #050505; padding: 25px; margin-bottom: 20px; }
.card-label { font-family: 'Courier New', Courier, monospace; font-size: 0.8rem; color: #666; margin-top: 0; margin-bottom: 20px; border-bottom: 1px dashed #333; padding-bottom: 10px; }
.channel-list { display: flex; flex-direction: column; gap: 15px; }
.channel-item { display: flex; align-items: center; gap: 15px; text-decoration: none; color: inherit; padding: 10px; border: 1px solid transparent; transition: all 0.3s ease; }
.channel-item:hover, .channel-item.clickable:hover { border-color: #333; background: #111; }
.channel-item.clickable { cursor: pointer; }
.icon-box { color: #888; }
.channel-details { flex: 1; display: flex; flex-direction: column; }
.channel-details .label { font-family: 'Courier New', Courier, monospace; font-size: 0.7rem; color: #555; margin-bottom: 2px; }

/* FIX: Ensure sidebar details match the form font (Courier) */
.channel-details .value { 
  font-family: 'Courier New', Courier, monospace; /* ADDED */
  font-size: 0.9rem; 
  font-weight: 500; 
  color: #ccc; 
}

.social-bar { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.social-btn { text-align: center; border: 1px solid #333; color: #888; font-family: 'Courier New', Courier, monospace; font-size: 0.75rem; padding: 10px 0; text-decoration: none; transition: all 0.3s ease; }
.social-btn:hover { border-color: #fff; color: #fff; background: #111; }
.terminal-form-wrapper { background: #080808; border: 1px solid #333; padding: 2px; }
.terminal-header { background: #111; padding: 10px 15px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #333; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; } .yellow { background: #ffbd2e; } .green { background: #27c93f; }
.terminal-title { margin-left: 10px; font-family: 'Courier New', Courier, monospace; font-size: 0.8rem; color: #888; }
.contact-form { padding: 30px; }
.input-group { margin-bottom: 20px; display: flex; flex-direction: column; }

/* FIX: Ensure labels and inputs use Courier */
.input-group label { 
  font-family: 'Courier New', Courier, monospace; /* ADDED */
  font-size: 0.75rem; 
  color: #666; 
  margin-bottom: 8px; 
}
.input-group input, 
.input-group textarea {
  background: #000; border: 1px solid #333; color: #fff; padding: 12px;
  font-family: 'Courier New', Courier, monospace; /* ADDED */
  font-size: 0.9rem;
  outline: none; transition: border-color 0.3s;
}

.status-message { margin-top: 20px; font-family: 'Courier New', Courier, monospace; font-size: 0.85rem; padding: 10px; border-left: 3px solid; }
.status-message.success { border-color: #00ff00; color: #00ff00; background: rgba(0,255,0,0.05); }
.status-message.error { border-color: #ff0000; color: #ff0000; background: rgba(255,0,0,0.05); }
.map-interface { background: #050505; border: 1px solid #333; padding: 20px; height: 100%; display: flex; flex-direction: column; }
.map-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.map-header h3 { font-family: 'Courier New', Courier, monospace; color: #fff; margin: 0; font-size: 1rem; }
.close-map-btn { background: none; border: none; color: #888; font-family: 'Courier New', Courier, monospace; cursor: pointer; }
.close-map-btn:hover { color: #fff; }
.map-frame { flex-grow: 1; min-height: 300px; border: 1px solid #333; margin-bottom: 20px; filter: grayscale(100%) invert(90%); }
.address-readout { font-family: 'Courier New', Courier, monospace; color: #666; font-size: 0.85rem; line-height: 1.6; }

/* --- RESPONSIVE ADJUSTMENTS --- */
@media (max-width: 1024px) {
  .hero-content { grid-template-columns: 1fr; text-align: center; padding: 0 40px; gap: 40px; padding-top: 40px; }
  .text-section { padding-right: 0; margin-bottom: 20px; order: 2; }
  .visual-section { order: 1; height: auto; padding: 20px 0; }
  .sub-text { margin: 0 auto 40px auto; }
  .cta-group { justify-content: center; }
  .big-letter { font-size: 5rem; }
  .social-sidebar { display: none; }
  .image-container { width: 100%; max-width: 300px; height: auto; margin: 0 auto; }
  
  /* Make sure grid layouts break earlier */
  .grid-layout, .contact-grid, .pricing-grid, .bottom-grid, .main-grid {
    grid-template-columns: 1fr; 
  }
}

@media (max-width: 900px) {
  .navbar { 
    display: flex; /* Switch to Flex on Mobile */
    justify-content: space-between;
    padding: 15px; /* Reduced padding from 50px */
  }
  
  .nav-center, .desktop-only { display: none; }
  .mobile-only { display: flex; }
  
  /* Ensure Download Button Shows on Mobile */
  .nav-right {
    display: flex;
    align-items: center;
    gap: 10px; /* Reduced gap */
  }

  .btn-download {
    display: block !important; /* Force show */
    padding: 8px 12px; /* Smaller padding for mobile */
    font-size: 9px; /* Smaller text */
    margin-right: 5px; /* Move closer to right edge */
  }
  
  /* Mobile Menu Animation */
  .burger-menu.open .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .burger-menu.open .bar:nth-child(2) { opacity: 0; }
  .burger-menu.open .bar:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

  /* Adjust body padding because navbar is responsive */
  .main-layout { padding-top: 60px; }
  
  .identity-module, .identity-box { max-width: 100%; text-align: center; }
  .photo-frame, .avatar-container { max-width: 250px; margin: 0 auto; }
  .form-row { flex-direction: column; gap: 15px; }
  .system-title { font-size: 2rem; }
  
  /* Adjust hero padding */
  .hero-container { min-height: auto; padding-top: 40px; padding-bottom: 40px; }
  .hero-content { padding: 0 20px; }
  
  /* HIDE FULLSTACK TEXT ON MOBILE */
  .big-text-wrapper { display: none; }

  /* REMOVE IMAGE ON MOBILE */
  .image-container { display: none; }
}

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes scan { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
@keyframes equalize { 0% { height: 20%; } 50% { height: 100%; } 100% { height: 20%; } }
</style>