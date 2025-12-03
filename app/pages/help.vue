<!-- pages/team.vue -->
<template>
<div class="team-dashboard">
  <!-- Header -->
  <div class="header">
    <div class="team-info">
      <h1>Our Team</h1>
      <p>Meet the talented people behind our projects</p>
      
      <!-- Tab Navigation -->
      <div class="tab-navigation">
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'team' }" 
          @click="activeTab = 'team'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          Team Members
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'contribute' }" 
          @click="activeTab = 'contribute'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
          </svg>
          Contribute Projects
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'video' }" 
          @click="activeTab = 'video'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Video Projects
        </button>
      </div>
    </div>
    <div class="header-actions">
      <!-- Search Box -->
      <div class="search-box">
        <input type="text" placeholder="Search..." v-model="searchQuery" @input="filterItems">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </div>
      
      <!-- Filter Dropdown -->
      <div class="filter-dropdown" ref="filterDropdown">
        <button class="btn-filter" @click="toggleFilterOptions">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
        </button>
        <div v-if="showFilterOptions" class="filter-options">
          <div class="filter-item">
            <label>Position</label>
            <select v-model="positionFilter" @change="applyFilters">
              <option value="">All Positions</option>
              <option v-for="position in positions" :key="position" :value="position">{{ position }}</option>
            </select>
          </div>
          <div class="filter-item">
            <label>Project</label>
            <select v-model="projectFilter" @change="applyFilters">
              <option value="">All Projects</option>
              <option v-for="project in projects" :key="project.id" :value="project.name">{{ project.name }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Content Sections based on active tab -->
  <div class="section">
    <!-- Team Members Section -->
    <div v-if="activeTab === 'team'">
      <h2 class="section-title">Team Members ({{ filteredTeamMembers.length }})</h2>
      <div class="team-grid">
        <div v-for="member in displayedTeamMembers" :key="member.id" class="member-box">
          <div class="member-header">
            <div class="member-avatar">
              <img :src="member.avatar" :alt="member.name" />
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-position">{{ member.position }}</p>
            </div>
          </div>
          
          <div class="member-details">
            <div class="member-projects">
              <div class="detail-label">Projects:</div>
              <div class="project-tags">
                <span v-for="project in member.projects.slice(0, 2)" :key="project.id" class="project-tag">
                  {{ project.name }}
                </span>
                <span v-if="member.projects.length > 2" class="project-tag more">+{{ member.projects.length - 2 }}</span>
              </div>
            </div>
            
            <div class="member-contact">
              <div class="detail-label">Contact:</div>
              <div class="contact-info">
                <span class="contact-item">{{ member.email }}</span>
              </div>
            </div>
          </div>
          
          <div class="member-social">
            <a v-if="member.socialLinks.facebook" :href="member.socialLinks.facebook" target="_blank" class="social-icon facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a v-if="member.socialLinks.github" :href="member.socialLinks.github" target="_blank" class="social-icon github">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a v-if="member.socialLinks.linkedin" :href="member.socialLinks.linkedin" target="_blank" class="social-icon linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          
          <div class="member-status" :class="member.status">
            <span class="status-dot"></span>
            <span class="status-text">{{ member.status }}</span>
          </div>
        </div>
      </div>
      
      <!-- Show More Button -->
      <div v-if="displayedCount < filteredTeamMembers.length" class="show-more-container">
        <button class="show-more-btn" @click="showMoreMembers">
          Show More ({{ filteredTeamMembers.length - displayedCount }} remaining)
        </button>
      </div>
    </div>

    <!-- Contribute Projects Section -->
    <div v-if="activeTab === 'contribute'">
      <h2 class="section-title">Contribute to Our Projects</h2>
      <div class="contribute-projects-container">
        <div v-for="project in contributeProjects" :key="project.id" class="contribute-project-card">
          <div class="project-header">
            <h3 class="project-title">{{ project.name }}</h3>
            <div class="project-actions">
              <a href="#" class="project-action learn-more">Learn more</a>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-description">
              <p>{{ project.description }}</p>
            </div>
          </div>
          
          <!-- Bottom row with contributors and button -->
          <div class="project-footer">
            <div class="project-contributors">
              <div class="contributors-label">Contributors:</div>
              <div class="contributors-list">
                <div v-for="(contributor, index) in project.contributors.slice(0, 3)" :key="index" class="contributor-avatar">
                  <img :src="contributor.avatar" :alt="contributor.name" />
                </div>
                <div v-if="project.contributors.length > 3" class="more-contributors">
                  <span>+{{ project.contributors.length - 3 }}</span>
                </div>
              </div>
            </div>
            
            <a :href="project.url" target="_blank" class="watch-now-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch now
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Projects Section -->
    <div v-if="activeTab === 'video'">
      <h2 class="section-title">Video Projects</h2>
      <div class="video-grid">
        <div v-for="video in videoProjects" :key="video.id" class="video-card">
          <div class="video-thumbnail">
            <img :src="video.thumbnail" :alt="video.title" />
            <div class="video-duration">{{ video.duration }}</div>
          </div>
          <div class="video-info">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-description">{{ video.description }}</p>
            <div class="video-meta">
              <span class="video-views">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {{ formatViews(video.views) }} views
              </span>
              <span class="video-date">{{ formatDate(video.publishedAt) }}</span>
            </div>
            <a :href="video.url" target="_blank" class="video-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Reactive state
const isLoading = ref(false)
const searchQuery = ref('')
const positionFilter = ref('')
const projectFilter = ref('')
const showFilterOptions = ref(false)
const displayedCount = ref(10) // Initially show 10 members
const activeTab = ref('team') // Default active tab

// Positions for filtering
const positions = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'DevOps Engineer',
  'UX Designer',
  'UI Designer',
  'Data Scientist',
  'QA Engineer',
  'Mobile Developer',
  'Project Manager'
]

// Projects data
const projects = ref([
  { id: 1, name: 'Music Band', url: 'https://github.com/Lethean-2005/Music-Band', language: 'JavaScript', stars: 42 },
  { id: 2, name: 'Task Management App', url: 'https://github.com/Lethean-2005/Task-Management-App', language: 'Vue.js', stars: 28 },
  { id: 3, name: 'Telegram Chatbot', url: 'https://github.com/Lethean-2005/Telegram-Chatbot', language: 'Python', stars: 35 },
  { id: 4, name: 'Movie Booking System', url: 'https://github.com/Lethean-2005/Movie-Booking-System', language: 'React', stars: 19 },
  { id: 5, name: 'Air Quality Dashboard', url: 'https://github.com/Lethean-2005/Air-Quality-Dashboard-', language: 'JavaScript', stars: 23 },
  { id: 6, name: 'VC1 Daily Need', url: 'https://github.com/Lethean-2005/VC1-Daily-Need', language: 'Node.js', stars: 15 },
  { id: 7, name: 'Lethean Portfolio', url: 'https://github.com/Lethean-2005/Lethean-Portfolio-nuxt', language: 'Nuxt.js', stars: 31 }
])

// Contribute projects data
const contributeProjects = ref([
  { 
    id: 1, 
    name: 'Music Band', 
    url: 'https://github.com/Lethean-2005/Music-Band', 
    language: 'JavaScript', 
    stars: 42,
    forks: 8,
    description: 'A music band website built with vanilla JavaScript, HTML5, and CSS3. Features include artist profiles, event listings, and music streaming.',
    contributors: [
      { name: 'Alex Johnson', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { name: 'Emily Rodriguez', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
      { name: 'Daniel Wilson', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
      { name: 'Barbara Garcia', avatar: 'https://randomuser.me/api/portraits/women/18.jpg' },
      { name: 'Thomas Rodriguez', avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
      { name: 'Susan Lewis', avatar: 'https://randomuser.me/api/portraits/women/20.jpg' },
      { name: 'Charles Lee', avatar: 'https://randomuser.me/api/portraits/men/21.jpg' },
      { name: 'Karen Walker', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
      { name: 'Paul Hall', avatar: 'https://randomuser.me/api/portraits/men/23.jpg' },
      { name: 'Nancy Allen', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' }
    ]
  },
  { 
    id: 2, 
    name: 'Task Management App', 
    url: 'https://github.com/Lethean-2005/Task-Management-App', 
    language: 'Vue.js', 
    stars: 28,
    forks: 5,
    description: 'A comprehensive task management application built with Vue.js, featuring drag-and-drop functionality, due dates, and team collaboration.',
    contributors: [
      { name: 'David Kim', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
      { name: 'Lisa Martinez', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
      { name: 'Patricia White', avatar: 'https://randomuser.me/api/portraits/women/14.jpg' },
      { name: 'Richard Harris', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
      { name: 'Linda Martin', avatar: 'https://randomuser.me/api/portraits/women/16.jpg' },
      { name: 'Joseph Thompson', avatar: 'https://randomuser.me/api/portraits/men/17.jpg' }
    ]
  },
  { 
    id: 3, 
    name: 'Telegram Chatbot', 
    url: 'https://github.com/Lethean-2005/Telegram-Chatbot', 
    language: 'Python', 
    stars: 35,
    forks: 12,
    description: 'An intelligent Telegram chatbot built with Python, providing automated responses, reminders, and information retrieval services.',
    contributors: [
      { name: 'Sarah Williams', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
      { name: 'James Anderson', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
      { name: 'Mary Thomas', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
      { name: 'Christopher Jackson', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
      { name: 'Mark Young', avatar: 'https://randomuser.me/api/portraits/men/25.jpg' },
      { name: 'Betty Hernandez', avatar: 'https://randomuser.me/api/portraits/women/26.jpg' },
      { name: 'Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { name: 'Robert Brown', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' }
    ]
  },
  { 
    id: 4, 
    name: 'Movie Booking System', 
    url: 'https://github.com/Lethean-2005/Movie-Booking-System', 
    language: 'React', 
    stars: 19,
    forks: 4,
    description: 'A movie booking system built with React, allowing users to browse movies, select seats, and book tickets online.',
    contributors: [
      { name: 'Emily Rodriguez', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
      { name: 'Jennifer Davis', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
      { name: 'Joseph Thompson', avatar: 'https://randomuser.me/api/portraits/men/17.jpg' },
      { name: 'Betty Hernandez', avatar: 'https://randomuser.me/api/portraits/women/26.jpg' }
    ]
  },
  { 
    id: 5, 
    name: 'Air Quality Dashboard', 
    url: 'https://github.com/Lethean-2005/Air-Quality-Dashboard-', 
    language: 'JavaScript', 
    stars: 23,
    forks: 6,
    description: 'An air quality monitoring dashboard that visualizes pollution data in real-time using JavaScript and D3.js.',
    contributors: [
      { name: 'Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { name: 'Robert Brown', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
      { name: 'Linda Martin', avatar: 'https://randomuser.me/api/portraits/women/16.jpg' },
      { name: 'Mark Young', avatar: 'https://randomuser.me/api/portraits/men/25.jpg' },
      { name: 'Charles Lee', avatar: 'https://randomuser.me/api/portraits/men/21.jpg' },
      { name: 'Mary Thomas', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' }
    ]
  },
  { 
    id: 6, 
    name: 'VC1 Daily Need', 
    url: 'https://github.com/Lethean-2005/VC1-Daily-Need', 
    language: 'Node.js', 
    stars: 15,
    forks: 3,
    description: 'A daily needs delivery service application built with Node.js, featuring user authentication, order tracking, and payment integration.',
    contributors: [
      { name: 'Sarah Williams', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
      { name: 'James Anderson', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
      { name: 'Jessica Taylor', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
      { name: 'Richard Harris', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
      { name: 'Nancy Allen', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' }
    ]
  },
  { 
    id: 7, 
    name: 'Lethean Portfolio', 
    url: 'https://github.com/Lethean-2005/Lethean-Portfolio-nuxt', 
    language: 'Nuxt.js', 
    stars: 31,
    forks: 9,
    description: 'A personal portfolio website built with Nuxt.js, showcasing projects, skills, and professional experience with a modern design.',
    contributors: [
      { name: 'David Kim', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
      { name: 'Lisa Martinez', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
      { name: 'Patricia White', avatar: 'https://randomuser.me/api/portraits/women/14.jpg' },
      { name: 'Paul Hall', avatar: 'https://randomuser.me/api/portraits/men/23.jpg' },
      { name: 'Charles Lee', avatar: 'https://randomuser.me/api/portraits/men/21.jpg' },
      { name: 'Mary Thomas', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
      { name: 'Christopher Jackson', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' }
    ]
  }
])

// Video projects data - only real YouTube videos
const videoProjects = ref([
  {
    id: 1,
    title: 'Vue.js Authentication Tutorial',
    description: 'Learn how to implement secure authentication in Vue.js applications using JWT tokens.',
    thumbnail: 'https://img.youtube.com/vi/fJV-T2pkacY/maxresdefault.jpg',
    duration: '24:18',
    views: 0, // Will be fetched from YouTube API
    publishedAt: '', // Will be fetched from YouTube API
    url: 'https://youtu.be/fJV-T2pkacY?si=5EI9qvzSLcfH5GRB',
    videoId: 'fJV-T2pkacY'
  },
  {
    id: 2,
    title: 'Building Responsive Layouts with CSS Grid',
    description: 'Master CSS Grid to create complex, responsive layouts with ease.',
    thumbnail: 'https://img.youtube.com/vi/d5BU6FBy6y4/maxresdefault.jpg',
    duration: '19:33',
    views: 0, // Will be fetched from YouTube API
    publishedAt: '', // Will be fetched from YouTube API
    url: 'https://youtu.be/d5BU6FBy6y4?si=5Mvgs6cGfu0hodH7',
    videoId: 'd5BU6FBy6y4'
  }
])

// Team members data (26 members)
const teamMembers = ref([
  {
    id: 1,
    name: 'Lethean Seourn',
    position: 'Fullstack Developer',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    email: 'letheanseourn05@gmail.com',
    status: 'online',
    projects: [
      { id: 1, name: 'Music Band' },
      { id: 2, name: 'Task Management App' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/alexjohnson',
      github: 'https://github.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson'
    }
  },
  {
    id: 2,
    name: 'Sarah Williams',
    position: 'Backend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    email: 'sarah.williams@example.com',
    status: 'away',
    projects: [
      { id: 3, name: 'Telegram Chatbot' },
      { id: 6, name: 'VC1 Daily Need' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/sarahwilliams',
      github: 'https://github.com/sarahwilliams',
      linkedin: 'https://linkedin.com/in/sarahwilliams'
    }
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'DevOps Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    email: 'michael.chen@example.com',
    status: 'offline',
    projects: [
      { id: 5, name: 'Air Quality Dashboard' },
      { id: 7, name: 'Lethean Portfolio' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/michaelchen',
      github: 'https://github.com/michaelchen',
      linkedin: 'https://linkedin.com/in/michaelchen'
    }
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    position: 'UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    email: 'emily.rodriguez@example.com',
    status: 'online',
    projects: [
      { id: 1, name: 'Music Band' },
      { id: 4, name: 'Movie Booking System' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/emilyrodriguez',
      github: 'https://github.com/emilyrodriguez',
      linkedin: 'https://linkedin.com/in/emilyrodriguez'
    }
  },
  {
    id: 5,
    name: 'David Kim',
    position: 'Full Stack Developer',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    email: 'david.kim@example.com',
    status: 'online',
    projects: [
      { id: 2, name: 'Task Management App' },
      { id: 7, name: 'Lethean Portfolio' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/davidkim',
      github: 'https://github.com/davidkim',
      linkedin: 'https://linkedin.com/in/davidkim'
    }
  },
  {
    id: 6,
    name: 'Jessica Taylor',
    position: 'Project Manager',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    email: 'jessica.taylor@example.com',
    status: 'away',
    projects: [
      { id: 3, name: 'Telegram Chatbot' },
      { id: 5, name: 'Air Quality Dashboard' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/jessicataylor',
      github: 'https://github.com/jessicataylor',
      linkedin: 'https://linkedin.com/in/jessicataylor'
    }
  },
  {
    id: 7,
    name: 'Robert Brown',
    position: 'Data Scientist',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    email: 'robert.brown@example.com',
    status: 'offline',
    projects: [
      { id: 5, name: 'Air Quality Dashboard' },
      { id: 6, name: 'VC1 Daily Need' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/robertbrown',
      github: 'https://github.com/robertbrown',
      linkedin: 'https://linkedin.com/in/robertbrown'
    }
  },
  {
    id: 8,
    name: 'Jennifer Davis',
    position: 'QA Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    email: 'jennifer.davis@example.com',
    status: 'online',
    projects: [
      { id: 2, name: 'Task Management App' },
      { id: 4, name: 'Movie Booking System' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/jenniferdavis',
      github: 'https://github.com/jenniferdavis',
      linkedin: 'https://linkedin.com/in/jenniferdavis'
    }
  },
  {
    id: 9,
    name: 'Daniel Wilson',
    position: 'Mobile Developer',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    email: 'daniel.wilson@example.com',
    status: 'away',
    projects: [
      { id: 1, name: 'Music Band' },
      { id: 3, name: 'Telegram Chatbot' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/danielwilson',
      github: 'https://github.com/danielwilson',
      linkedin: 'https://linkedin.com/in/danielwilson'
    }
  },
  {
    id: 10,
    name: 'Lisa Martinez',
    position: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    email: 'lisa.martinez@example.com',
    status: 'online',
    projects: [
      { id: 7, name: 'Lethean Portfolio' },
      { id: 2, name: 'Task Management App' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/lisamartinez',
      github: 'https://github.com/lisamartinez',
      linkedin: 'https://linkedin.com/in/lisamartinez'
    }
  },
  {
    id: 11,
    name: 'James Anderson',
    position: 'Backend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    email: 'james.anderson@example.com',
    status: 'offline',
    projects: [
      { id: 6, name: 'VC1 Daily Need' },
      { id: 3, name: 'Telegram Chatbot' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/jamesanderson',
      github: 'https://github.com/jamesanderson',
      linkedin: 'https://linkedin.com/in/jamesanderson'
    }
  },
  {
    id: 12,
    name: 'Mary Thomas',
    position: 'DevOps Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    email: 'mary.thomas@example.com',
    status: 'online',
    projects: [
      { id: 5, name: 'Air Quality Dashboard' },
      { id: 7, name: 'Lethean Portfolio' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/marythomas',
      github: 'https://github.com/marythomas',
      linkedin: 'https://linkedin.com/in/marythomas'
    }
  },
  {
    id: 13,
    name: 'Christopher Jackson',
    position: 'UX Designer',
    avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    email: 'christopher.jackson@example.com',
    status: 'away',
    projects: [
      { id: 4, name: 'Movie Booking System' },
      { id: 1, name: 'Music Band' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/christopherjackson',
      github: 'https://github.com/christopherjackson',
      linkedin: 'https://linkedin.com/in/christopherjackson'
    }
  },
  {
    id: 14,
    name: 'Patricia White',
    position: 'Full Stack Developer',
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    email: 'patricia.white@example.com',
    status: 'online',
    projects: [
      { id: 2, name: 'Task Management App' },
      { id: 6, name: 'VC1 Daily Need' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/patriciawhite',
      github: 'https://github.com/patriciawhite',
      linkedin: 'https://linkedin.com/in/patriciawhite'
    }
  },
  {
    id: 15,
    name: 'Richard Harris',
    position: 'Project Manager',
    avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    email: 'richard.harris@example.com',
    status: 'offline',
    projects: [
      { id: 3, name: 'Telegram Chatbot' },
      { id: 5, name: 'Air Quality Dashboard' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/richardharris',
      github: 'https://github.com/richardharris',
      linkedin: 'https://linkedin.com/in/richardharris'
    }
  },
  {
    id: 16,
    name: 'Linda Martin',
    position: 'Data Scientist',
    avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
    email: 'linda.martin@example.com',
    status: 'online',
    projects: [
      { id: 5, name: 'Air Quality Dashboard' },
      { id: 6, name: 'VC1 Daily Need' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/lindamartin',
      github: 'https://github.com/lindamartin',
      linkedin: 'https://linkedin.com/in/lindamartin'
    }
  },
  {
    id: 17,
    name: 'Joseph Thompson',
    position: 'QA Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    email: 'joseph.thompson@example.com',
    status: 'away',
    projects: [
      { id: 4, name: 'Movie Booking System' },
      { id: 7, name: 'Lethean Portfolio' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/josephthompson',
      github: 'https://github.com/josephthompson',
      linkedin: 'https://linkedin.com/in/josephthompson'
    }
  },
  {
    id: 18,
    name: 'Barbara Garcia',
    position: 'Mobile Developer',
    avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
    email: 'barbara.garcia@example.com',
    status: 'online',
    projects: [
      { id: 1, name: 'Music Band' },
      { id: 3, name: 'Telegram Chatbot' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/barbaragarcia',
      github: 'https://github.com/barbaragarcia',
      linkedin: 'https://linkedin.com/in/barbaragarcia'
    }
  },
  {
    id: 19,
    name: 'Thomas Rodriguez',
    position: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
    email: 'thomas.rodriguez@example.com',
    status: 'offline',
    projects: [
      { id: 7, name: 'Lethean Portfolio' },
      { id: 2, name: 'Task Management App' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/thomasrodriguez',
      github: 'https://github.com/thomasrodriguez',
      linkedin: 'https://linkedin.com/in/thomasrodriguez'
    }
  },
  {
    id: 20,
    name: 'Susan Lewis',
    position: 'Backend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
    email: 'susan.lewis@example.com',
    status: 'online',
    projects: [
      { id: 6, name: 'VC1 Daily Need' },
      { id: 3, name: 'Telegram Chatbot' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/susanlewis',
      github: 'https://github.com/susanlewis',
      linkedin: 'https://linkedin.com/in/susanlewis'
    }
  },
  {
    id: 21,
    name: 'Charles Lee',
    position: 'DevOps Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
    email: 'charles.lee@example.com',
    status: 'away',
    projects: [
      { id: 5, name: 'Air Quality Dashboard' },
      { id: 7, name: 'Lethean Portfolio' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/charleslee',
      github: 'https://github.com/charleslee',
      linkedin: 'https://linkedin.com/in/charleslee'
    }
  },
  {
    id: 22,
    name: 'Karen Walker',
    position: 'UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    email: 'karen.walker@example.com',
    status: 'online',
    projects: [
      { id: 4, name: 'Movie Booking System' },
      { id: 1, name: 'Music Band' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/karenwalker',
      github: 'https://github.com/karenwalker',
      linkedin: 'https://linkedin.com/in/karenwalker'
    }
  },
  {
    id: 23,
    name: 'Paul Hall',
    position: 'Full Stack Developer',
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    email: 'paul.hall@example.com',
    status: 'offline',
    projects: [
      { id: 2, name: 'Task Management App' },
      { id: 6, name: 'VC1 Daily Need' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/paulhall',
      github: 'https://github.com/paulhall',
      linkedin: 'https://linkedin.com/in/paulhall'
    }
  },
  {
    id: 24,
    name: 'Nancy Allen',
    position: 'Project Manager',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    email: 'nancy.allen@example.com',
    status: 'online',
    projects: [
      { id: 3, name: 'Telegram Chatbot' },
      { id: 5, name: 'Air Quality Dashboard' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/nancyallen',
      github: 'https://github.com/nancyallen',
      linkedin: 'https://linkedin.com/in/nancyallen'
    }
  },
  {
    id: 25,
    name: 'Mark Young',
    position: 'Data Scientist',
    avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
    email: 'mark.young@example.com',
    status: 'away',
    projects: [
      { id: 5, name: 'Air Quality Dashboard' },
      { id: 6, name: 'VC1 Daily Need' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/markyoung',
      github: 'https://github.com/markyoung',
      linkedin: 'https://linkedin.com/in/markyoung'
    }
  },
  {
    id: 26,
    name: 'Betty Hernandez',
    position: 'QA Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    email: 'betty.hernandez@example.com',
    status: 'online',
    projects: [
      { id: 4, name: 'Movie Booking System' },
      { id: 7, name: 'Lethean Portfolio' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/bettyhernandez',
      github: 'https://github.com/bettyhernandez',
      linkedin: 'https://linkedin.com/in/bettyhernandez'
    }
  }
])

// Computed properties
const filteredTeamMembers = computed(() => {
  let result = teamMembers.value
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(member => 
      member.name.toLowerCase().includes(query) || 
      member.position.toLowerCase().includes(query)
    )
  }
  
  // Apply position filter
  if (positionFilter.value) {
    result = result.filter(member => member.position === positionFilter.value)
  }
  
  // Apply project filter
  if (projectFilter.value) {
    result = result.filter(member => 
      member.projects.some(project => project.name === projectFilter.value)
    )
  }
  
  return result
})

const displayedTeamMembers = computed(() => {
  return filteredTeamMembers.value.slice(0, displayedCount.value)
})

// Methods
const toggleFilterOptions = () => {
  showFilterOptions.value = !showFilterOptions.value
}

const filterItems = () => {
  // This is handled by the computed properties
}

const applyFilters = () => {
  // This is handled by the computed properties
}

const showMoreMembers = () => {
  displayedCount.value += 10 // Show 10 more each time
}

const refreshData = async () => {
  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Data refreshed')
  } catch (error) {
    console.error('Error refreshing data:', error)
  } finally {
    isLoading.value = false
  }
}

// Format views count
const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M'
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K'
  }
  return views.toString()
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return ''
  
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return date.toLocaleDateString(undefined, options)
}

// Fetch YouTube video data
const fetchYouTubeVideoData = async () => {
  // In a real application, you would use the YouTube Data API
  // For this example, we'll simulate the API call with setTimeout
  
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Update video data with simulated real values
    videoProjects.value[0].views = 4250 // Simulated view count
    videoProjects.value[0].publishedAt = '2023-09-05T00:00:00Z' // Simulated publish date
    
    videoProjects.value[1].views = 3820 // Simulated view count
    videoProjects.value[1].publishedAt = '2023-09-18T00:00:00Z' // Simulated publish date
    
    console.log('YouTube video data updated')
  } catch (error) {
    console.error('Error fetching YouTube video data:', error)
  }
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  const filterDropdown = document.querySelector('.filter-dropdown')
  
  if (filterDropdown && !filterDropdown.contains(event.target)) {
    showFilterOptions.value = false
  }
}

// Initialize data on component mount
onMounted(() => {
  refreshData()
  fetchYouTubeVideoData() // Fetch YouTube video data
  document.addEventListener('click', handleClickOutside)
})

// Clean up before component unmount
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

.team-dashboard {
  font-family: 'Inter', sans-serif;
  color: #f8fafc;
  border-radius: 1rem;
  padding: 1.5rem;
  min-height: calc(100vh - 4rem);
 
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.team-info h1 {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(90deg, #100638 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.team-info p {
  color: #031021;
  margin: 0.25rem 0 0.75rem 0;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(30, 41, 59, 0.7);
  color: #94a3b8;
  border: 1px solid #334155;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  background: rgba(51, 65, 85, 0.7);
  color: #e2e8f0;
}

.tab-btn.active {
  background: rgba(124, 58, 237, 0.2);
  color: #0c0526;
  border-color: rgba(124, 58, 237, 0.5);
}

.tab-btn svg {
  flex-shrink: 0;
}

.header-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

/* Search Box */
.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-box input {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid #334155;
  border-radius: 0.5rem;
  color: #e2e8f0;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  font-size: 0.875rem;
  width: 200px;
  transition: all 0.2s;
}

.search-box input:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
}

.search-box svg {
  position: absolute;
  left: 0.75rem;
  color: #94a3b8;
}

/* Filter Dropdown */
.filter-dropdown {
  position: relative;
}

.btn-filter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.5rem;
  background: rgba(30, 41, 59, 0.7);
  color: #e2e8f0;
  border: 1px solid #334155;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-filter:hover {
  background: rgba(51, 65, 85, 0.7);
}

.filter-options {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(30, 41, 59, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  border: 1px solid #334155;
  width: 200px;
  z-index: 10;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}

.filter-item {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-item label {
  font-size: 0.875rem;
  font-weight: 500;
}

.filter-item select {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid #334155;
  border-radius: 0.375rem;
  color: #e2e8f0;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
}

/* Section */
.section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #01070f;
}

/* Team Section */
.team-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.member-box {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 0.5rem;
  border: 1px solid rgba(71, 85, 105, 0.5);
  transition: all 0.3s;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
}

.member-box:hover {
  transform: translateY(-3px);
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.3);
}

.member-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.member-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.75rem;
  border: 2px solid rgba(124, 58, 237, 0.3);
  flex-shrink: 0;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  flex: 1;
  min-width: 0;
}

.member-name {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-position {
  font-size: 0.75rem;
  color: #94a3b8;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-details {
  margin-bottom: 0.75rem;
}

.detail-label {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-bottom: 0.25rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.project-tag {
  font-size: 0.625rem;
  background: rgba(15, 23, 42, 0.5);
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
  color: #cbd5e1;
}

.project-tag.more {
  background: rgba(124, 58, 237, 0.2);
  color: #c4b5fd;
}

.contact-info {
  font-size: 0.75rem;
  color: #cbd5e1;
}

.contact-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-social {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.social-icon {
  width: 24px;
  height: 24px;
  border-radius: 0.25rem;
  background: rgba(15, 23, 42, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  transition: all 0.2s;
}

.social-icon:hover {
  transform: scale(1.1);
}

.social-icon.facebook:hover {
  background: rgba(24, 119, 242, 0.2);
  color: #1877f2;
}

.social-icon.github:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.social-icon.linkedin:hover {
  background: rgba(10, 102, 194, 0.2);
  color: #0a66c2;
}

.member-status {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  margin-top: auto;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 0.375rem;
}

.member-status.online .status-dot {
  background-color: #10b981;
}

.member-status.away .status-dot {
  background-color: #f59e0b;
}

.member-status.offline .status-dot {
  background-color: #64748b;
}

.status-text {
  color: #94a3b8;
}

/* Show More Button */
.show-more-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.show-more-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background: rgba(11, 3, 27, 0.2);
  color: #010a16;
  border: 1px solid rgba(124, 58, 237, 0.5);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.show-more-btn:hover {
  background: rgba(124, 58, 237, 0.3);
}

/* Contribute Projects Section */
.contribute-projects-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.contribute-project-card {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 0.5rem;
  border: 1px solid rgba(71, 85, 105, 0.5);
  transition: all 0.3s;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.contribute-project-card:hover {
  transform: translateY(-3px);
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 5px 15px -5px rgba(124, 58, 237, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #e2e8f0;
}

.project-actions {
  display: flex;
  gap: 0.75rem;
}

.project-action {
  color: #94a3b8;
  font-size: 0.75rem;
  text-decoration: none;
  transition: color 0.2s;
}

.project-action:hover {
  color: #c4b5fd;
}

.project-content {
  margin-bottom: 0.75rem;
  flex-grow: 1;
}

.project-description {
  color: #cbd5e1;
  font-size: 0.75rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

/* Project Footer with contributors and button */
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.project-contributors {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contributors-label {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-right: 0.5rem;
}

.contributors-list {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.contributor-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(124, 58, 237, 0.3);
}

.contributor-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.more-contributors {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.625rem;
  font-weight: 600;
  border: 1px solid rgba(71, 85, 105, 0.5);
}

.watch-now-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: linear-gradient(90deg, #7c3aed 0%, #6d28d9 100%);
  color: white;
  border: none;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  box-shadow: 0 2px 4px -1px rgba(124, 58, 237, 0.3);
}

.watch-now-btn:hover {
  background: linear-gradient(90deg, #6d28d9 0%, #5b21b6 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(124, 58, 237, 0.4);
}

/* Video Grid */
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.video-card {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 0.5rem;
  border: 1px solid rgba(71, 85, 105, 0.5);
  transition: all 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.video-card:hover {
  transform: translateY(-3px);
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.3);
}

.video-thumbnail {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.video-thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-duration {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 0.625rem;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
}

.video-info {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.video-title {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.video-description {
  color: #cbd5e1;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  flex-grow: 1;
  line-height: 1.4;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.625rem;
  color: #94a3b8;
}

.video-views {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.video-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: rgba(124, 58, 237, 0.2);
  color: #c4b5fd;
  border: 1px solid rgba(124, 58, 237, 0.5);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.video-link:hover {
  background: rgba(124, 58, 237, 0.3);
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .contribute-projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .contribute-projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contribute-projects-container {
    grid-template-columns: 1fr;
  }
  
  .video-grid {
    grid-template-columns: 1fr;
  }
  
  .tab-navigation {
    flex-wrap: wrap;
  }
  
  .search-box input {
    width: 150px;
  }
  
  .project-footer {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .header-actions {
    width: 100%;
    justify-content: space-between;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .video-grid {
    grid-template-columns: 1fr;
  }
  
  .search-box input {
    width: 120px;
  }
}
</style>