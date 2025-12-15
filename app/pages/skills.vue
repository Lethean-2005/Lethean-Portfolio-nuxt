<!-- <template>
  <div class="skills-container">
    
    <header class="page-header">
      <h1 class="system-title">𝕾𝖐𝖎𝖑𝖑𝖘_𝕸𝖆𝖙𝖗𝖎𝖝</h1>
      <p class="system-subtitle">SYSTEM STATUS: OPERATIONAL // LAST UPDATE: 2025</p>
    </header>

    <div class="bento-grid">
      
      <section class="system-card technical">
        <div class="card-header">
          <span class="icon">⚡</span>
          <h2>Technical Stack</h2>
        </div>
        <div class="skill-tags">
          <span v-for="skill in techStack" :key="skill" class="tag">
            {{ skill }}
          </span>
        </div>
      </section>

      <section class="system-card tools">
        <div class="card-header">
          <span class="icon">🛠</span>
          <h2>Dev_Tools & Ops</h2>
        </div>
        <div class="skill-tags">
          <span v-for="tool in devTools" :key="tool" class="tag">
            {{ tool }}
          </span>
        </div>
      </section>

      <section class="system-card core">
        <div class="card-header">
          <span class="icon">🧠</span>
          <h2>Core_Protocols</h2>
        </div>
        <ul class="terminal-list">
          <li v-for="skill in softSkills" :key="skill">
            <span class="prompt">></span> {{ skill }}
          </li>
        </ul>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Data extracted directly from your CV
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
  'Critical Thinking',
  'Complex Problem Solving',
  'Agile / Scrum Teamwork',
  'Task & Time Management',
  'Attention to Detail',
  'Effective Communication'
]);
</script>

<style scoped>
/* --- Main Layout --- */
.skills-container {
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

/* --- Header Styling --- */
.page-header {
  text-align: center;
  margin-bottom: 60px;
  border-bottom: 1px solid #333;
  padding-bottom: 30px;
}

.system-title {
  font-size: 3rem;
  margin: 0;
  letter-spacing: 2px;
  color: #ffffff;
}

.system-subtitle {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #666;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* --- Bento Grid Layout --- */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* --- System Cards --- */
.system-card {
  border: 1px solid #333;
  padding: 30px;
  background: #050505;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.system-card:hover {
  border-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.05);
}

/* Card Header */
.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  border-bottom: 1px solid #222;
  padding-bottom: 15px;
}

.card-header h2 {
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

.icon {
  font-size: 1.5rem;
}

/* --- Tags / Chips Styling --- */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: #111;
  border: 1px solid #333;
  color: #ccc;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-family: 'Courier New', Courier, monospace;
  transition: all 0.2s ease;
  cursor: default;
}

.tag:hover {
  background-color: #ffffff;
  color: #000000;
  border-color: #ffffff;
  font-weight: bold;
}

/* --- Terminal List (Soft Skills) --- */
.terminal-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.terminal-list li {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  color: #b3b3b3;
  margin-bottom: 12px;
  padding-left: 10px;
  transition: color 0.2s;
}

.terminal-list li:hover {
  color: #ffffff;
}

.prompt {
  color: #444;
  margin-right: 10px;
  font-weight: bold;
}

/* --- Responsive Design --- */
@media (max-width: 768px) {
  .system-title {
    font-size: 2rem;
  }
  
  .bento-grid {
    grid-template-columns: 1fr; /* Stack vertically on mobile */
  }

  .system-card {
    padding: 20px;
  }
}
</style> -->
<template></template>