<!-- <template>
  <div class="system-profile">
    <div class="crt-overlay"></div>

    <header class="system-header">
      <div class="header-left">
        <span class="sys-id">ID: LETHEAN_S</span>
        <span class="sys-role">CLASS: DEVELOPER</span>
      </div>
      <div class="header-right">
        <span class="status-live">SYSTEM ONLINE <span class="blink">●</span></span>
      </div>
    </header>

    <div class="main-grid">
      
      <aside class="sidebar">
        
        <div class="module identity-box">
          <div class="avatar-container">
            <img src="~/assets/images/logo/profile.png" alt="User" class="avatar-img" />
            <div class="scan-grid"></div>
          </div>
          
          <div class="user-details">
            <h1 class="glitch-text" data-text="LETHEAN SEOURN">LETHEAN SEOURN</h1>
            <p class="role-badge">SOFTWARE DEVELOPER</p>
            
            <ul class="meta-list">
              <li><span class="label">LOC:</span> PHNOM PENH, KH</li>
              <li><span class="label">EXP:</span> 2024 - PRESENT</li>
              <li><span class="label">TEL:</span> +855 968118930</li>
            </ul>

            <div class="action-row">
              <a href="mailto:letheanseourn05@gmail.com" class="sys-btn">EMAIL</a>
              <a href="tel:+855968118930" class="sys-btn">CALL</a>
            </div>
          </div>
        </div>

        <div class="module skills-box">
          <h3 class="module-title">> SKILL_MATRIX</h3>
          <div class="skill-tags">
            <span v-for="skill in skills" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </div>

      </aside>

      <main class="content-area">
        
        <section class="feed-section">
          <div class="section-head">
            <span class="icon">📂</span>
            <h2>PROJECT_ARCHIVE_LOG</h2>
          </div>

          <div class="project-list">
            <article v-for="(project, index) in projects" :key="index" class="project-card">
              <div class="card-decoration top-right"></div>
              <div class="card-decoration bottom-left"></div>
              
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
</template>

<script setup>
import { ref } from 'vue'

// Skills extracted from CV [cite: 16-25]
const skills = ref([
  'Vue.js', 'PHP / Laravel', 'MySQL', 'JavaScript', 
  'HTML/CSS', 'Python', 'Node.js', 'Power BI', 'Git/GitHub'
])

// Projects extracted from CV [cite: 41-67]
const projects = ref([
  {
    name: 'POS SYSTEM (VC1)',
    role: 'Product Owner & Developer',
    date: 'FEB - MAY 2025',
    desc: 'Led E-commerce System development. Coordinated front-end and back-end implementation using MVC architecture.',
    stack: ['PHP (MVC)', 'MySQL', 'Bootstrap', 'Jira']
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
</script>

<style scoped>
/* --- CORE THEME --- */
.system-profile {
  --bg-color: #050505;
  --card-bg: #0a0a0a;
  --border: #333;
  --accent: #fff;
  --text-main: #e0e0e0;
  --text-dim: #777;
  --font-mono: 'Courier New', Courier, monospace;
  --font-sans: 'Helvetica Neue', Helvetica, sans-serif;

  background: var(--bg-color);
  min-height: 100vh;
  color: var(--text-main);
  font-family: var(--font-mono);
  padding: 20px;
  position: relative;
  overflow-x: hidden;
}

/* CRT Scanlines Overlay */
.crt-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 10;
}

/* --- HEADER --- */
.system-header {
  display: flex; justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding-bottom: 15px; margin-bottom: 40px;
  text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px;
}
.status-live { color: var(--text-main); }
.blink { color: #0f0; animation: blink 1s infinite; }

/* --- GRID LAYOUT --- */
.main-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* --- SIDEBAR MODULES --- */
.module {
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 20px;
  margin-bottom: 20px;
}

/* Identity */
.avatar-container {
  width: 100%; aspect-ratio: 1;
  background: #000;
  border: 1px solid var(--border);
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.avatar-img {
  width: 100%; height: 100%; object-fit: cover;
  filter: grayscale(100%) contrast(1.2);
}
.user-details h1 {
  font-family: var(--font-sans); font-size: 1.4rem; margin: 0;
  color: var(--accent); letter-spacing: -0.5px;
}
.role-badge {
  font-size: 0.75rem; color: var(--text-dim);
  border-bottom: 1px dashed var(--border);
  padding-bottom: 15px; margin-bottom: 15px;
}
.meta-list {
  list-style: none; padding: 0; margin: 0 0 20px 0;
  font-size: 0.8rem;
}
.meta-list li { margin-bottom: 8px; color: var(--text-dim); }
.meta-list .label { color: var(--text-dim); margin-right: 5px; opacity: 0.6; }

/* Buttons */
.action-row { display: flex; gap: 10px; }
.sys-btn {
  flex: 1; padding: 10px; text-align: center;
  border: 1px solid var(--border);
  color: var(--text-dim); text-decoration: none; font-size: 0.7rem;
  transition: 0.2s;
}
.sys-btn:hover { background: var(--accent); color: #000; }

/* Skills */
.module-title { font-size: 0.9rem; border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 15px; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  font-size: 0.7rem; background: #111; border: 1px solid #333;
  padding: 4px 8px; color: #aaa;
}

/* --- PROJECT ARCHIVE --- */
.section-head {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 30px; border-bottom: 1px solid var(--border); padding-bottom: 10px;
}
.section-head h2 { font-size: 1.1rem; margin: 0; letter-spacing: 2px; font-weight: normal; }

.project-list { display: grid; gap: 20px; }

/* Project Card */
.project-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 25px;
  transition: transform 0.2s, border-color 0.2s;
}
.project-card:hover {
  border-color: #666;
  transform: translateX(5px);
}

/* Card Decorations (Corners) */
.card-decoration { position: absolute; width: 8px; height: 8px; border: 1px solid var(--accent); transition: 0.3s; }
.top-right { top: -1px; right: -1px; border-width: 0 1px 1px 0; }
.bottom-left { bottom: -1px; left: -1px; border-width: 1px 0 0 1px; }
.project-card:hover .card-decoration { width: 100%; height: 100%; border-color: rgba(255,255,255,0.1); }

/* Card Content */
.project-header {
  display: flex; gap: 15px; margin-bottom: 15px; align-items: flex-start;
}
.project-index { font-size: 1.5rem; color: #333; font-weight: bold; }
.header-info { flex: 1; }
.project-title { margin: 0; font-size: 1.1rem; color: var(--accent); }
.project-role { font-size: 0.75rem; color: var(--text-dim); display: block; margin-top: 4px; }
.project-date { font-size: 0.75rem; border: 1px solid #333; padding: 4px 8px; border-radius: 12px; }

.project-desc { font-size: 0.9rem; line-height: 1.5; color: #999; margin-bottom: 20px; }

.tech-stack { display: flex; gap: 8px; flex-wrap: wrap; }
.tech-pill {
  font-size: 0.7rem; background: rgba(255,255,255,0.05);
  padding: 4px 10px; border-radius: 2px; color: #ccc;
}

/* --- ANIMATIONS --- */
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

/* --- MOBILE --- */
@media (max-width: 850px) {
  .main-grid { grid-template-columns: 1fr; }
  .identity-box { text-align: center; }
  .avatar-container { max-width: 200px; margin: 0 auto 20px; }
  .project-header { flex-direction: column; gap: 5px; }
  .project-index { display: none; }
}
</style> -->
<template></template>