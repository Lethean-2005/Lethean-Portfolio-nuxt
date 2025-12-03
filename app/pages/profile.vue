<template>
  <div class="profile-container">
    <!-- Font Imports (scoped to this component for portability) -->
    <component :is="'style'">
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=UnifrakturMaguntia&family=Rock+Salt&display=swap');
    </component>

    <div class="profile-card">
      
      <!-- Background Elements -->
      <div class="bg-layer">
        <div class="bg-gradient-shape"></div>
        <div class="bg-noise" :style="{ backgroundImage: `url('${noiseTexture}')` }"></div>
        <div class="bg-stars"></div>
      </div>

      <div class="content-grid">
        
        <!-- ========================================== -->
        <!-- LEFT COLUMN: BIO & INFO -->
        <!-- ========================================== -->
        <div class="col-left">
          
          <!-- Header Section -->
          <div class="header-group">
            <h1 class="main-title" :class="{ 'animate-in': isMounted }">
              Hello
              <span class="accent-dots">...</span>
            </h1>
            <!-- Ghost text for visual effect -->
            <div class="ghost-title" :class="{ 'animate-in': isMounted }">
              Hello
            </div>
            
            <!-- Sparkle Icon -->
            <div class="sparkle-decoration" @click="rollStar">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
          </div>

          <!-- Introduction -->
          <p class="intro-text" :class="{ 'animate-in': isMounted }">
            Hi everyone, I'm <strong class="text-highlight">Lethean Seourn</strong>. I was born in Kompong Cham Province. I am a student at the Passerellesnumeriques Cambodia Computer University majoring in Computer Science. I like experimental and unique design concepts.
          </p>

          <!-- About Section -->
          <div class="about-section" :class="{ 'animate-in': isMounted }">
            <div class="section-header">
              <h2 class="section-title">About Me</h2>
              <h2 class="section-title-blur">About Me</h2>
            </div>
            
            <div class="education-container">
              <h3 class="subsection-title">Education</h3>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <h4 class="timeline-heading">Highschool</h4>
                  <p class="timeline-text">Lvea Hight School</p>
                  <p class="timeline-sub">BacII Student</p>
                </div>
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <h4 class="timeline-heading">University</h4>
                  <p class="timeline-text">Passerellesnumeriques Cambodia </p>
                  <p class="timeline-sub">Computer Science</p>
                </div>
              </div>
            </div>

            <div class="skills-container">
              <h3 class="subsection-title">Skills</h3>
              <p class="skills-list">
                Fullstack Development, Vue.js, Nuxt, React, Node.js, Database Design, UI/UX Design.
              </p>
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- MIDDLE COLUMN: EXPERIENCE & CONTACT -->
        <!-- ========================================== -->
        <div class="col-middle">
          <div class="experience-section">
            <h2 class="experience-header">Experience</h2>
            
            <div class="experience-list">
              <div v-for="(exp, i) in experiences" :key="i" 
                   class="exp-card"
                   :style="{ transitionDelay: `${400 + (i * 100)}ms` }"
                   :class="{ 'animate-in': isMounted }">
                <div class="exp-bullet">✶</div>
                <div>
                  <h3 class="exp-title">{{ exp.title }}</h3>
                  <p class="exp-desc">{{ exp.sub }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-section" :class="{ 'animate-in': isMounted }">
            <h2 class="section-title">Contact</h2>
            <div class="contact-links">
              <div class="contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>letheanseourn@gmail.com</span>
              </div>
              <div class="contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+855 968 118 930</span>
              </div>
            </div>
            
            <!-- Music Player Widget -->
            <div class="music-widget">
              <svg class="headphone-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
              <div class="player-bar">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>000</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- RIGHT COLUMN: VISUAL COLLAGE -->
        <!-- ========================================== -->
        <div class="col-right">
          
          <!-- Chrome Typography Name -->
          <!-- <div class="chrome-title-wrapper">
             <h1 class="chrome-title">
               LETHEAN
             </h1>
          </div> -->

          <!-- Portrait Composition -->
          <div class="collage-wrapper">
            
            <!-- Main Image without frame -->
            <img src="~/assets/images/logo/profile.png" alt="Portrait" class="portrait-image-no-frame" :class="{ 'animate-in': isMounted }" />

            <!-- Graffiti Sticker -->
            <div class="graffiti-tag">
              <div class="graffiti-paper">
                <span class="graffiti-text">
                  Fullstack Dev
                </span>
              </div>
            </div>

            <!-- Hello Name Tag -->
            <div class="nametag">
              <div class="nametag-paper">
                 <div class="nametag-header">
                   <span class="nametag-hello">HELLO</span>
                   <span class="nametag-sub">MY NAME IS</span>
                 </div>
                 <div class="nametag-body">
                    Lethean
                 </div>
              </div>
            </div>
            
             <!-- Animated Spinner Ring -->
            <div class="spinner-decoration"></div>
          </div>
        </div>

      </div> <!-- End Grid -->

      <!-- Bottom Footer Decorations -->
      <div class="footer-stars">
         <div class="star-row">
             <svg v-for="i in 3" :key="i" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0,0,0,0.2)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
         </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ==========================================
// STATE MANAGEMENT
// ==========================================
const isMounted = ref(false)
const isStarRolling = ref(false)

// ==========================================
// DATA & CONTENT
// ==========================================
const experiences = [
  { title: "Freelancer", sub: "Working as a Fullstack Developer since 2025 - Present." },
  { title: "Ajip Consulting.", sub: "Software Developer" },
  { title: "Open Source", sub: "Active contributor to Vue.js ecosystem tools." }
]

const socialLinks = [
  { icon: 'mail', text: 'letheanseourn@gmail.com' },
  { icon: 'phone', text: '+855 968 118 930' }
]

// ==========================================
// ASSETS
// ==========================================
// A noise texture for background overlay
const noiseTexture = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"

// ==========================================
// METHODS
// ==========================================
const rollStar = () => {
  isStarRolling.value = true
  setTimeout(() => {
    isStarRolling.value = false
  }, 1000) // Animation duration
}

// ==========================================
// LIFECYCLE
// ==========================================
onMounted(() => {
  // Trigger entrance animations after component mount
  setTimeout(() => {
    isMounted.value = true
  }, 100)
})
</script>

<style scoped>
/* 
  ---------------------------------------------------------
  RESET & BASE STYLES 
  ---------------------------------------------------------
*/
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.profile-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: 'Inter', sans-serif;
  color: #000000; /* Changed text color to black */
}

.profile-card {
  position: relative;
  width: 100%;
  max-width: 1400px;
  min-height: 90vh;
  /* background: rgba(255, 255, 255, 0.9); Changed background to light for black text */
  border-radius: 24px;
  overflow: hidden;
  /* border: 1px solid rgba(0, 0, 0, 0.08); */
  /* backdrop-filter: blur(40px); */
  padding: 2rem;
  /* box-shadow: 0 0 50px rgba(0,0,0,0.1); */
}

@media (min-width: 768px) {
  .profile-card { padding: 3rem; }
}

/* 
  ---------------------------------------------------------
  BACKGROUNDS 
  ---------------------------------------------------------
*/
.bg-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.bg-gradient-shape {
  position: absolute;
  top: -10%;
  right: -10%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(139, 69, 19, 0.05) 0%, transparent 70%); /* Changed to match header color */
  transform: rotate(12deg);
}

.bg-noise {
  position: absolute;
  inset: 0;
  opacity: 0.4;
  mix-blend-mode: overlay;
}

/* 
  ---------------------------------------------------------
  LAYOUT GRID 
  ---------------------------------------------------------
*/
.content-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* 
  ---------------------------------------------------------
  TYPOGRAPHY & UTILS 
  ---------------------------------------------------------
*/
.text-highlight { color: #8B4513; font-weight: 600; } /* Changed to match header color */

/* 
  ---------------------------------------------------------
  LEFT COLUMN 
  ---------------------------------------------------------
*/
.col-left {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.header-group { position: relative; }

.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: #8B4513; /* Changed to specified color */
  -webkit-text-stroke: 1px #8B4513; /* Added text stroke */
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.main-title.animate-in { opacity: 1; transform: translateY(0); }

.accent-dots {
  color: #8B4513; /* Changed to match header color */
  font-size: 4rem;
  vertical-align: top;
  margin-left: 0.25rem;
}

.ghost-title {
  position: absolute;
  top: 4px;
  left: 4px;
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  line-height: 0.9;
  color: rgba(73, 35, 7, 0.2); /* Changed to match header color */
  z-index: -1;
  filter: blur(1px);
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
}
.ghost-title.animate-in { opacity: 1; transform: translateX(0); }

.sparkle-decoration {
  position: absolute;
  top: -1.5rem;
  right: 2rem;
  color: #8B4513; /* Changed to match header color */
  cursor: pointer;
  transition: transform 1s ease;
}
.sparkle-decoration.rolling {
  animation: roll 1s ease-in-out;
}

.intro-text {
  font-size: 0.9rem;
  color: gray; /* Changed to black */
  line-height: 1.6;
  max-width: 28rem;
  opacity: 0;
  transition: opacity 0.8s ease-out 0.3s;
}
.intro-text.animate-in { opacity: 1; }

.about-section {
  opacity: 0;
  transition: opacity 0.8s ease-out 0.4s;
}
.about-section.animate-in { opacity: 1; }

.section-header { position: relative; margin-bottom: 1.5rem; display: inline-block; }

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  line-height: 1;
  color: #8B4513; /* Changed to match header color */
  -webkit-text-stroke: 1px #8B4513; /* Added text stroke */
}

.section-title-blur {
  position: absolute;
  top: 2px;
  left: 2px;
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  line-height: 1;
  color: rgba(139, 69, 19, 0.3); /* Changed to match header color */
  z-index: -1;
  filter: blur(2px);
}

.education-container { margin-top: 1rem; }

.timeline {
  padding-left: 0.5rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1); /* Changed to black with opacity */
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item { position: relative; padding-left: 1.5rem; }

.timeline-icon {
  position: absolute;
  left: -21px;
  top: 4px;
  color: #8B4513; /* Changed to match header color */
}

.timeline-heading {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: #8B4513; /* Changed to match header color */
}

.timeline-text { font-size: 0.9rem; color: gray; } /* Changed to dark gray */
.timeline-sub { font-size: 0.75rem; color: gray; margin-top: 0.2rem; } /* Changed to dark gray */

.skills-container { margin-top: 2rem; }
.subsection-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #8B4513; /* Changed to match header color */
}
.skills-list { font-size: 0.9rem; color: gray; line-height: 1.6; } /* Changed to black */

/* 
  ---------------------------------------------------------
  MIDDLE COLUMN 
  ---------------------------------------------------------
*/
.col-middle {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

@media (min-width: 1024px) { .col-middle { padding-top: 6rem; } }

.experience-header {
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(139, 69, 19, 0.2); /* Changed to match header color */
  padding-bottom: 0.5rem;
  display: inline-block;
  margin-bottom: 2rem;
  color: #8B4513; /* Changed to match header color */
}

.experience-list { display: flex; flex-direction: column; gap: 1.5rem; }

.exp-card {
  display: flex;
  gap: 1rem;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.exp-card.animate-in { opacity: 1; transform: translateX(0); }

.exp-card:hover .exp-title { color: #8B4513; } /* Changed to match header color */

.exp-bullet {
  font-size: 1.5rem;
  line-height: 1;
  margin-top: 0.2rem;
  color: #8B4513; /* Changed to match header color */
  /* Removed animation properties */
}


.exp-title { font-weight: 700; font-size: 1.2rem; transition: color 0.3s;color: gray; }
.exp-desc { font-size: 0.9rem; color: gray; margin-top: 0.25rem; } /* Changed to dark gray */

.contact-section { margin-top: auto; padding-top: 2rem; opacity: 0; transition: opacity 0.8s 0.6s; }
.contact-section.animate-in { opacity: 1; }

.contact-links { display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem; color: gray; } /* Changed to black */

.contact-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: color 0.2s;
}
.contact-row:hover { color: #8B4513; } /* Changed to match header color */

.music-widget {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  align-items: center;
  color: gray;
}

.player-bar {
  border: 1px solid rgba(139, 69, 19, 0.5); /* Changed to match header color */
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: white;
}

/* 
  ---------------------------------------------------------
  RIGHT COLUMN 
  ---------------------------------------------------------
*/
.col-right {
  position: relative;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) { .col-right { min-height: auto; } }

/* .chrome-title-wrapper {
  position: absolute;
  top: -2rem;
  right: 0;
  z-index: 20;
} */

.chrome-title {
  font-family: 'UnifrakturMaguntia', cursive;
  font-size: 4rem;
  letter-spacing: 0.05em;
  transform: rotate(-6deg);
  opacity: 0.95;
  background: linear-gradient(to bottom, #8B4513 20%, #A0522D 50%, #654321 51%, #8B4513 100%); /* Changed to match header color */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0px 4px 0px rgba(0,0,0,0.5));
}

@media (min-width: 1024px) { .chrome-title { font-size: 6.5rem; } }

.collage-wrapper {
  position: relative;
  width: 100%;
  max-width: 40rem; /* Increased from 28rem to make image bigger */
  aspect-ratio: 3/4;
}

/* New image class without frame */
.portrait-image-no-frame {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.2);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: scale(0.95);
  background: transparent;
}
.portrait-image-no-frame.animate-in { 
  opacity: 1; 
  transform: scale(1); 
}
.portrait-image-no-frame:hover { 
  filter: grayscale(0) contrast(1); 
}

/* Stickers */
.sticker {
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  border: 2px solid rgba(139, 69, 19, 0.3); /* Changed to match header color */
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  backdrop-filter: blur(8px);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: default;
  z-index: 20;
}
.badge-blue {
  position: absolute;
  bottom: 5rem;
  right: -1rem;
  z-index: 25;
  background: white;
  border-radius: 50%;
  padding: 0.4rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transform: rotate(15deg);
}

.badge-content {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #8B4513; /* Changed to match header color */
  border: 2px solid #8B4513; /* Changed to match header color */
  border-radius: 50%;
}

.graffiti-tag {
  position: absolute;
  bottom: 8rem;
  left: 2rem;
  z-index: 30;
  transform: rotate(-8deg);
  transition: transform 0.3s;
}
.graffiti-tag:hover { transform: rotate(-8deg) scale(1.05); }

.graffiti-paper {
  background: white;
  padding: 0.5rem 1.25rem;
  box-shadow: 2px 2px 0px rgba(0,0,0,1), 0 10px 20px rgba(0,0,0,0.2);
  transform: skewX(-10deg);
}

.graffiti-text {
  font-family: 'Rock Salt', cursive;
  color: #8B4513; /* Changed to match header color */
  font-size: 1.75rem;
  font-weight: 900;
  text-shadow: 1px 1px 0px #000;
}

.nametag {
  position: absolute;
  bottom: -2rem;
  right: 1rem;
  z-index: 30;
  transform: rotate(4deg);
  transition: transform 0.3s;
}
.nametag:hover { transform: rotate(4deg) scale(1.05); }

.nametag-paper {
  background: #8B4513; /* Changed to match header color */
  color: white;
  padding: 0.35rem;
  border-radius: 2px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
  width: 13rem;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  border: 4px solid white;
}

.nametag-header {
  text-align: center;
  border-bottom: 2px solid white;
  padding-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
}

.nametag-hello { font-weight: 800; font-size: 1.5rem; letter-spacing: 0.15em; line-height: 1; }
.nametag-sub { font-size: 0.6rem; letter-spacing: 0.2em; font-weight: 600; }

.nametag-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #8B4513; /* Changed to match header color */
  margin-top: 0.35rem;
  font-family: 'Rock Salt', cursive;
  font-size: 2rem;
  transform: rotate(-3deg);
}

.spinner-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130%;
  height: 130%;
  border: 1px dashed rgba(139, 69, 19, 0.15); /* Changed to match header color */
  border-radius: 50%;
  animation: spin 25s linear infinite;
  z-index: 0;
  pointer-events: none;
}

/* 
  ---------------------------------------------------------
  FOOTER & ANIMATIONS 
  ---------------------------------------------------------
*/
.footer-stars {
  position: absolute;
  bottom: 2rem;
  right: 35%;
  opacity: 0.3;
}

.star-row { display: flex; gap: 0.5rem; }

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes roll {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.9); }
}
</style>