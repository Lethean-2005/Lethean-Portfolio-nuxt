<template>
  <div class="portfolio-container">
    <!-- MY PORTFOLIO text at top left -->
    <div class="portfolio-text-container">
      <h2 class="portfolio-text">
        <span v-for="(letter, index) in portfolioLetters" :key="index" class="portfolio-letter"
          :class="{ active: index < portfolioActiveIndex }">{{ letter }}</span>
      </h2>
    </div>

    <!-- Social Icons -->
    <div class="social-icons">
      <a href="https://www.instagram.com/lethean.seourn/" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>
      <a href="https://github.com/Lethean-2005" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.628-5.479 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>

      <a href="https://dribbble.com/le-thean-seourn" aria-label="Dribbble">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
      </a>
      <a href="https://www.pinterest.com/letheanseourn/" aria-label="Pinterest">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      </a>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Left Section -->
      <div class="left-section">
        <div class="accent-line"></div>
        <p class="tagline">Software Developer</p>
        <h1 class="headline">
          <span class="white">Design</span> <span class="gray">Technology.</span>
        </h1>
        <!-- Animated FULLSTACK text -->
        <h2 class="outline-text">
          <span v-for="(letter, index) in designLetters" :key="index" class="design-letter"
            :class="{ active: index < activeIndex }">{{ letter }}</span>
        </h2>
        <div class="about-link">
          <span>MY PROFILE</span>
          <a href="/profile" class="about-btn" aria-label="About us">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <div class="dots">
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <!-- Center Divider -->
      <div class="center-section">
        <div class="vertical-line"></div>
        <span class="date">28.03.2005</span>
        <h2 class="brands-text">Brands.</h2>
      </div>

      <!-- Right Section - Image -->
      <div class="right-section">
        <div class="profile-image">
          <img src="/assets/images/logo/profile.png" alt="Lethean Seourn" />
        </div>
        <!-- <button class="arrow-btn" aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button> -->
      </div>
    </div>

    <!-- Dot Pattern -->
    <div class="dot-pattern top-right"></div>
    <div class="dot-pattern bottom-right"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const designLetters = ['F', 'U', 'L', 'L', 'S', 'T', 'A', 'C', 'K']
const activeIndex = ref(0)
let intervalId = null

// New portfolio text animation
const portfolioLetters = ['M', 'Y', ' ', 'P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O']
const portfolioActiveIndex = ref(0)
let portfolioIntervalId = null

onMounted(() => {
  // FULLSTACK animation
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % (designLetters.length + 1)
  }, 400)

  // PORTFOLIO animation
  portfolioIntervalId = setInterval(() => {
    portfolioActiveIndex.value = (portfolioActiveIndex.value + 1) % (portfolioLetters.length + 1)
  }, 300)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  if (portfolioIntervalId) clearInterval(portfolioIntervalId)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap');

.portfolio-container {
  min-height: 76vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

/* MY PORTFOLIO text at top left */
.portfolio-text-container {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
}

.portfolio-text {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.3rem;
  display: flex;
  font-family: 'Cinzel', serif;
  line-height: 1.2;
}

.portfolio-letter {
  color: transparent;
  -webkit-text-stroke: 1px #8B4513;
  text-shadow: 0 0 5px rgba(139, 69, 19, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.portfolio-letter.active {
  color: #8B4513;
  -webkit-text-stroke: 1px #8B4513;
  text-shadow: 0 0 8px rgba(139, 69, 19, 0.6);
}

/* Social Icons */
.social-icons {
  position: absolute;
  left: 2rem;
  top: 8rem;
  /* Changed to align with Software Developer text */
  transform: none;
  /* Removed vertical centering */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-right: 1.5rem;
  /* Added margin to create space between icons and text */
  margin-top: 8.5rem;
  /* Slight adjustment to align better with text */
}

.social-icons a {
  color: #666;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ff5722;
}

/* Main Content Layout */
.main-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  min-height: calc(100vh - 4rem);
  align-items: center;
  padding-left: 8rem;
  /* Increased to accommodate icons and margin */
}

/* Left Section */
.left-section {
  padding-right: 3rem;
}

.accent-line {
  width: 40px;
  height: 3px;
  background: #ff5722;
  margin-bottom: 2rem;
}

.tagline {
  color: #888;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.headline {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.headline .white {
  color: #333;
}

.headline .gray {
  color: #999;
}

/* Animated FULLSTACK text */
.outline-text {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.5rem;
  margin-bottom: 3rem;
  display: flex;
  font-family: 'Cinzel', serif;
}

.design-letter {
  color: transparent;
  -webkit-text-stroke: 1px #8B4513;
  text-shadow: 0 0 5px rgba(139, 69, 19, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.design-letter.active {
  color: #8B4513;
  -webkit-text-stroke: 1px #8B4513;
  text-shadow: 0 0 8px rgba(139, 69, 19, 0.6);
}

.about-link {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.about-link span {
  color: #888;
  font-size: 0.75rem;
}

.about-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #ff5722;
  background: transparent;
  color: #ff5722;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.about-btn:hover {
  background: #ff5722;
  color: #fff;
}

.dots {
  display: flex;
  gap: 4px;
}

.dots span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ff5722;
  opacity: 0.6;
}

.dots span:first-child {
  opacity: 1;
}

/* Center Section */
.center-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
}

.vertical-line {
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, transparent, #ff5722, transparent);
  margin-bottom: 2rem;
}

.date {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #444;
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

.brands-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(180deg, #ffa726 0%, #ff9800 50%, #f57c00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -2px;
}

/* Right Section */
.right-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.profile-image {
  width: 100%;
  max-width: 350px;
  height: 600px;
  overflow: hidden;
  margin-right: 2rem;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

.profile-image:hover img {
  filter: grayscale(50%);
}

.arrow-btn {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 45px;
  height: 45px;
  background: #ff5722;
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.arrow-btn:hover {
  transform: scale(1.1);
}

/* Dot Patterns */
.dot-pattern {
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(circle, #333 1px, transparent 1px);
  background-size: 10px 10px;
  opacity: 0.5;
}

.dot-pattern.top-right {
  top: 2rem;
  right: 30%;
}

.dot-pattern.bottom-right {
  bottom: 2rem;
  right: 2rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding-left: 4rem;
  }

  .center-section {
    flex-direction: row;
    writing-mode: horizontal-tb;
  }

  .brands-text,
  .date {
    writing-mode: horizontal-tb;
  }

  .profile-image {
    max-width: 250px;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .social-icons {
    display: none;
  }

  .portfolio-text {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
  }

  .main-content {
    padding-left: 1rem;
  }

  .headline {
    font-size: 1.5rem;
  }

  .outline-text {
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
  }

  .brands-text {
    font-size: 2.5rem;
  }
}
</style>