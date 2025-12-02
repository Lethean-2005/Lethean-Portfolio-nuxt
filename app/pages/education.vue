<!-- pages/profile.vue -->
<template>
  <div class="profile-page">
    <!-- Header -->
    <!-- <div class="header">
      <div></div>
      <div class="header-right">
        <span class="collab-text">COLLABORATION</span>
        <button class="btn-outline">LOGIN</button>
        <button class="btn-primary">GET STARTED</button>
      </div>
    </div> -->

    <!-- Main Content -->
    <div class="main-content">
      <!-- Left Panel -->
      <div class="left-panel">
        <div class="hero-card">
          <!-- Gradient blobs -->
          <div class="blob blob-1"></div>
          <div class="blob blob-2"></div>
          
          <!-- Version badge -->
          <div class="version-badge">
            <span class="version-number">0.1</span>
            <span class="version-text">MY EDUCATION JOURNEY</span>
          </div>

          <!-- Main Title -->
          <div class="title-section">
            <h1 class="main-title">
              <span>EDUCATION</span>
              <span class="title-light">PORTFOLIO</span>
            </h1>
            
            <!-- Diagonal label -->
            <div class="journey-label">
              <span>JOURNEY</span>
            </div>
          </div>

          <!-- Bottom Icons -->
          <div class="icon-buttons">
            <button class="icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
            <button class="icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
            </button>
            <button class="icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Panel -->
      <div class="right-panel">
        <!-- Toggle Buttons -->
        <div class="toggle-buttons">
          <button
            v-for="(edu, index) in educationData"
            :key="edu.id"
            @click="activeIndex = index"
            :class="['toggle-btn', activeIndex === index ? 'active' : '']"
          >
            {{ edu.degree }}
          </button>
        </div>

        <!-- Content Card -->
        <div class="content-card">
          <h2 class="content-title">{{ activeEducation.degree }}</h2>
          
          <div class="content-details">
            <div class="detail-item">
              <p class="detail-label">Institution</p>
              <p class="detail-value">{{ activeEducation.school }}</p>
            </div>
            
            <div class="detail-item">
              <p class="detail-label">Period</p>
              <p class="detail-value">{{ activeEducation.year }}</p>
            </div>
            
            <div class="detail-item">
              <p class="detail-label">Description</p>
              <p class="detail-desc">{{ activeEducation.description }}</p>
            </div>
          </div>

          <button class="view-more-btn">View more</button>
        </div>
      </div>
    </div>

    <!-- Education Summary Cards -->
    <div class="education-cards">
      <div
        v-for="(edu, index) in educationData"
        :key="edu.id"
        @click="activeIndex = index"
        :class="['edu-card', activeIndex === index ? 'active' : '']"
      >
        <div class="edu-card-content">
          <div>
            <h3 class="edu-card-title">{{ edu.degree }}</h3>
            <p class="edu-card-school">{{ edu.school }}</p>
          </div>
          <span class="edu-card-year">{{ edu.year }}</span>
        </div>
      </div>
    </div>

    <!-- Social Media Section -->
    <div class="social-media-section">
      <h2 class="section-title">Social Media Presence</h2>
      
      <div class="social-platforms">
        <!-- Instagram Card -->
        <div class="platform-card">
          <div class="platform-header">
            <div class="platform-info">
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/lethean.seourn/" target="_blank" class="platform-link">@lethean.seourn</a>
            </div>
            <div class="platform-stats">
              <div class="stat-item">
                <span class="stat-value">{{ formatNumber(socialData.instagram.followers) }}</span>
                <span class="stat-label">Followers</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ formatNumber(socialData.instagram.posts) }}</span>
                <span class="stat-label">Posts</span>
              </div>
            </div>
          </div>
          
          <div class="image-grid">
            <div 
              v-for="(post, index) in socialData.instagram.postsData" 
              :key="index" 
              class="image-box"
            >
              <img :src="post.imageUrl" alt="Instagram post">
              <div class="image-overlay">
                <div class="overlay-stats">
                  <span class="overlay-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    {{ formatNumber(post.likes) }}
                  </span>
                  <span class="overlay-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    {{ formatNumber(post.comments) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- TikTok Card -->
        <div class="platform-card">
          <div class="platform-header">
            <div class="platform-info">
              <h3>TikTok</h3>
              <a href="https://www.tiktok.com/@lethean.seourn" target="_blank" class="platform-link">@lethean.seourn</a>
            </div>
            <div class="platform-stats">
              <div class="stat-item">
                <span class="stat-value">{{ formatNumber(socialData.tiktok.followers) }}</span>
                <span class="stat-label">Followers</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ formatNumber(socialData.tiktok.likes) }}</span>
                <span class="stat-label">Likes</span>
              </div>
            </div>
          </div>
          
          <div class="image-grid">
            <div 
              v-for="(video, index) in socialData.tiktok.videosData" 
              :key="index" 
              class="image-box"
            >
              <img :src="video.thumbnailUrl" alt="TikTok video">
              <div class="image-overlay">
                <div class="overlay-stats">
                  <span class="overlay-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    {{ formatNumber(video.views) }}
                  </span>
                  <span class="overlay-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    {{ formatNumber(video.likes) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const educationData = [
  {
    id: 1,
    degree: "Associate Degree",
    school: "Passerelles Numériques Cambodia",
    year: "2024 - Present",
    description: "Currently pursuing an Associate Degree in Information Technology with focus on web development and software engineering."
  },
  {
    id: 2,
    degree: "High School Diploma",
    school: "Lvea High School",
    year: "2023 - 2024",
    description: "Completed high school education with strong foundation in mathematics and science subjects."
  }
]

const activeIndex = ref(0)
const activeEducation = computed(() => educationData[activeIndex.value])

// Social media data (mock data for demonstration)
const socialData = ref({
  instagram: {
    followers: 1250,
    posts: 42,
    postsData: [
      { imageUrl: 'https://picsum.photos/seed/insta1/300/300.jpg', likes: 120, comments: 15 },
      { imageUrl: 'https://picsum.photos/seed/insta2/300/300.jpg', likes: 85, comments: 8 },
      { imageUrl: 'https://picsum.photos/seed/insta3/300/300.jpg', likes: 210, comments: 24 },
      { imageUrl: 'https://picsum.photos/seed/insta4/300/300.jpg', likes: 95, comments: 12 },
      { imageUrl: 'https://picsum.photos/seed/insta5/300/300.jpg', likes: 180, comments: 20 },
      { imageUrl: 'https://picsum.photos/seed/insta6/300/300.jpg', likes: 65, comments: 5 },
      { imageUrl: 'https://picsum.photos/seed/insta7/300/300.jpg', likes: 150, comments: 18 },
      { imageUrl: 'https://picsum.photos/seed/insta8/300/300.jpg', likes: 110, comments: 14 },
      { imageUrl: 'https://picsum.photos/seed/insta9/300/300.jpg', likes: 200, comments: 22 }
    ]
  },
  tiktok: {
    followers: 3200,
    likes: 15600,
    videosData: [
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok1/300/300.jpg', views: 5200, likes: 420 },
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok2/300/300.jpg', views: 8900, likes: 780 },
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok3/300/300.jpg', views: 3200, likes: 310 },
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok4/300/300.jpg', views: 12000, likes: 980 },
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok5/300/300.jpg', views: 5600, likes: 520 },
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok6/300/300.jpg', views: 7800, likes: 650 },
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok7/300/300.jpg', views: 9500, likes: 820 },
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok8/300/300.jpg', views: 4300, likes: 380 },
      { thumbnailUrl: 'https://picsum.photos/seed/tiktok9/300/300.jpg', views: 11200, likes: 920 }
    ]
  }
})

// Helper function to format numbers
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

.profile-page {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  min-height: calc(100vh - 4rem);
  color: #f8fafc;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.collab-text {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: #9ca3af;
}

.btn-outline {
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  border: 1px solid #4b5563;
  background: transparent;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-outline:hover {
  background: rgba(75, 85, 99, 0.3);
}

.btn-primary {
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  border: none;
  background: #fff;
  color: #000;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #e5e5e5;
}

/* Main Content */
.main-content {
  display: flex;
  gap: 1.5rem;
}

/* Left Panel */
.left-panel {
  flex: 1;
}

.hero-card {
  background: linear-gradient(135deg, #1f2937 0%, #111827 50%, #1f2937 100%);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(75, 85, 99, 0.5);
  min-height: 350px;
  position: relative;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}

.blob-1 {
  top: -80px;
  left: -80px;
  width: 200px;
  height: 200px;
  background: rgba(75, 85, 99, 0.3);
}

.blob-2 {
  bottom: -60px;
  right: -60px;
  width: 150px;
  height: 150px;
  background: rgba(55, 65, 81, 0.2);
}

.version-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 10;
}

.version-number {
  font-size: 1.75rem;
  font-weight: 700;
}

.version-text {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: #9ca3af;
  text-transform: uppercase;
}

.title-section {
  position: relative;
  z-index: 10;
}

.main-title {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
}

.main-title span {
  display: block;
}

.title-light {
  color: #6b7280;
}

.journey-label {
  display: inline-block;
  margin-top: 1rem;
  transform: rotate(-12deg);
  transform-origin: left;
}

.journey-label span {
  background: #fff;
  color: #000;
  padding: 0.375rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.icon-buttons {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  gap: 0.75rem;
}

.icon-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid #4b5563;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.icon-btn:hover {
  background: rgba(55, 65, 81, 0.8);
}

/* Right Panel */
.right-panel {
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.toggle-buttons {
  display: flex;
  gap: 0.5rem;
}

.toggle-btn {
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  background: #1f2937;
  color: #d1d5db;
  border: 1px solid #374151;
}

.toggle-btn:hover {
  background: #374151;
}

.toggle-btn.active {
  background: #fff;
  color: #000;
  border-color: #fff;
}

.content-card {
  background: rgba(17, 24, 39, 0.9);
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid rgba(75, 85, 99, 0.5);
  flex: 1;
}

.content-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.content-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-item {
  color: #d1d5db;
}

.detail-label {
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0 0 0.25rem 0;
}

.detail-value {
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
}

.detail-desc {
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

.view-more-btn {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  background: #1f2937;
  color: #fff;
  border: 1px solid #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.view-more-btn:hover {
  background: #374151;
}

/* Education Cards */
.education-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.edu-card {
  padding: 1.25rem;
  border-radius: 1rem;
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid #1f2937;
  cursor: pointer;
  transition: all 0.2s;
}

.edu-card:hover {
  background: rgba(31, 41, 55, 0.5);
}

.edu-card.active {
  background: #1f2937;
  border: 2px solid #4b5563;
}

.edu-card-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.edu-card-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
}

.edu-card-school {
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0.25rem 0 0 0;
}

.edu-card-year {
  font-size: 0.75rem;
  color: #6b7280;
  background: #1f2937;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

/* Social Media Section */
.social-media-section {
  margin-top: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #f8fafc;
}

.social-platforms {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.platform-card {
  background: rgba(17, 24, 39, 0.7);
  border-radius: 1.5rem;
  border: 1px solid rgba(75, 85, 99, 0.5);
  overflow: hidden;
}

.platform-header {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid rgba(75, 85, 99, 0.3);
}

.platform-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.platform-link {
  color: #60a5fa;
  text-decoration: none;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.platform-link:hover {
  text-decoration: underline;
}

.platform-stats {
  display: flex;
  gap: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.75rem;
  color: #9ca3af;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
  background: rgba(0, 0, 0, 0.2);
}

.image-box {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  cursor: pointer;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-box:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  padding: 0.75rem 0.5rem 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-box:hover .image-overlay {
  opacity: 1;
}

.overlay-stats {
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
}

.overlay-stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.overlay-stat svg {
  fill: currentColor;
}
</style>