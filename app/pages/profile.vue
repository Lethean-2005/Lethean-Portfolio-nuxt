<!-- <template>
  <div class="system-profile">
    
    <div class="system-bar">
      <span class="sys-id">USR: LETHEAN_S</span>
      <span class="sys-time">SYS_TIME: {{ time }}</span>
      <span class="sys-status">STATUS: ONLINE <span class="blink">_</span></span>
    </div>

    <div class="grid-layout">
      
      <aside class="identity-module">
        
        <div class="photo-frame">
          <div class="frame-decor tl"></div>
          <div class="frame-decor tr"></div>
          <div class="frame-decor bl"></div>
          <div class="frame-decor br"></div>
          
          <img src="~/assets/images/logo/profile.png" alt="Profile Scan" class="profile-img" />
          
          <div class="scan-line"></div>
        </div>

        <div class="id-data">
          <h1 class="user-name">LETHEAN SEOURN</h1>
          <p class="user-role">[ FULLSTACK_DEVELOPER ]</p>
          
          <div class="data-row">
            <span class="label">LOC:</span>
            <span class="val">PHNOM PENH, KH</span>
          </div>
          <div class="data-row">
            <span class="label">EXP:</span>
            <span class="val">2024 - PRESENT</span>
          </div>
        </div>

        <div class="contact-matrix">
          <a href="mailto:letheanseourn05@gmail.com" class="matrix-btn">
            <span class="icon">✉</span> EMAIL_LINK
          </a>
          <a href="tel:+855968118930" class="matrix-btn">
            <span class="icon">☎</span> SECURE_LINE
          </a>
        </div>

        <div class="audio-module">
          <div class="audio-header">
            <span class="icon">🎧</span> AUDIO_DRIVER
          </div>
          <div class="equalizer">
            <span class="bar" style="animation-duration: 0.5s"></span>
            <span class="bar" style="animation-duration: 0.8s"></span>
            <span class="bar" style="animation-duration: 1.1s"></span>
            <span class="bar" style="animation-duration: 0.6s"></span>
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
            Specializing in unique design concepts and experimental interfaces.
            Currently operating as a Fullstack Developer.
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref('00:00:00')
let timer = null

const experiences = [
  { title: "FREELANCER", sub: "Fullstack Developer // 2025 - PRESENT" },
  { title: "AJIP CONSULTING", sub: "Software Developer // Contract" },
  { title: "OPEN SOURCE", sub: "Vue.js Ecosystem Contributor" }
]

const updateTime = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString('en-GB', { hour12: false })
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
/* --- Core Layout --- */
.system-profile {
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace; /* System Font */
  padding: 20px;
  box-sizing: border-box;
}

/* --- Top Bar --- */
.system-bar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sys-status .blink {
  animation: blink 1s infinite;
  color: #00ff00;
}

/* --- Grid System --- */
.grid-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* --- Left Module: Identity --- */
.identity-module {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Photo Frame */
.photo-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border: 1px solid #333;
  padding: 10px;
  background: #050505;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.2); /* Black & White effect */
  display: block;
}

.frame-decor {
  position: absolute;
  width: 10px;
  height: 10px;
  border-color: #ffffff;
  border-style: solid;
}
.tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
.bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
.br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

/* Scanline Animation */
.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: scan 3s linear infinite;
  pointer-events: none;
}

/* ID Data */
.id-data {
  border: 1px solid #333;
  padding: 20px;
  background: #050505;
}

.user-name {
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 5px 0;
  letter-spacing: 1px;
}

.user-role {
  color: #888;
  font-size: 0.8rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #333;
}

.data-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.label { color: #555; }
.val { color: #ccc; }

/* Contact Matrix */
.contact-matrix {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.matrix-btn {
  border: 1px solid #333;
  color: #888;
  padding: 10px;
  text-align: center;
  font-size: 0.7rem;
  text-decoration: none;
  transition: all 0.3s;
}

.matrix-btn:hover {
  background: #fff;
  color: #000;
}

/* Audio Module */
.audio-module {
  border: 1px solid #333;
  padding: 15px;
  margin-top: auto;
}

.audio-header {
  font-size: 0.7rem;
  color: #555;
  margin-bottom: 10px;
  display: flex;
  gap: 5px;
}

.equalizer {
  display: flex;
  gap: 3px;
  height: 20px;
  align-items: flex-end;
  margin-bottom: 10px;
}

.bar {
  width: 100%;
  background: #333;
  animation: equalize 1s infinite ease-in-out;
}

.track-info {
  font-size: 0.65rem;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
}

/* --- Right Module: Data Feed --- */
.feed-block {
  margin-bottom: 40px;
}

.block-header {
  font-size: 1rem;
  color: #fff;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.terminal-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #b3b3b3;
  max-width: 600px;
}

.highlight {
  color: #fff;
  border-bottom: 1px solid #666;
}

/* Log List (Experience) */
.log-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.log-entry {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.log-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.log-index {
  color: #444;
  font-size: 0.8rem;
}

.log-line {
  width: 1px;
  height: 30px;
  background: #222;
}

.log-content {
  border: 1px solid #222;
  padding: 15px;
  flex-grow: 1;
  background: #050505;
  transition: border-color 0.3s;
}

.log-content:hover {
  border-color: #666;
}

.log-title {
  margin: 0;
  font-size: 1rem;
  color: #fff;
}

.log-sub {
  margin: 5px 0 0 0;
  font-size: 0.8rem;
  color: #666;
}

/* Timeline (Education) */
.timeline {
  border-left: 1px solid #333;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.timeline-node {
  position: relative;
}

.node-marker {
  position: absolute;
  left: -25px;
  top: 5px;
  width: 9px;
  height: 9px;
  background: #000;
  border: 1px solid #fff;
}

.node-content h4 {
  margin: 0;
  font-size: 0.95rem;
  color: #fff;
}

.node-content p {
  margin: 5px 0 0 0;
  font-size: 0.8rem;
  color: #666;
}

/* --- Animations --- */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes scan {
  0% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

@keyframes equalize {
  0% { height: 20%; }
  50% { height: 100%; }
  100% { height: 20%; }
}

/* --- Responsive --- */
@media (max-width: 900px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
  
  .identity-module {
    max-width: 100%;
  }

  .photo-frame {
    max-width: 300px;
    margin: 0 auto;
  }
}
</style> -->
<template></template>