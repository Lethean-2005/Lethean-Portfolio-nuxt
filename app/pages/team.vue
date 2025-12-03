<template>
  <div class="team-dashboard">
    <!-- Background Text -->
    <div class="team-bg-text">TEAM</div>

    <!-- Header -->
    <div class="team-header">
      <div class="team-info">
        <div class="team-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Team</span>
        </div>

        <h1 class="team-title">Our Team</h1>
        <p class="team-subtitle">Meet the talented people behind our projects</p>

        <!-- Tab Navigation -->
        <div class="tab-navigation">
          <button v-for="tab in tabs" :key="tab.id" class="tab-btn" :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id">
            <i :class="tab.icon"></i>
            {{ tab.name }}
          </button>
        </div>
      </div>

      <div class="header-actions">
        <!-- Search Box -->
        <div class="search-box">
          <input type="text" placeholder="Search..." v-model="searchQuery" @input="filterItems">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>

        <!-- Filter Dropdown -->
        <div class="filter-dropdown" ref="filterDropdown">
          <button class="btn-filter" @click="toggleFilterOptions">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
    <div class="team-content">
      <!-- Team Members Section -->
      <div v-if="activeTab === 'team'" class="team-section">
        <h2 class="section-title">Team Members ({{ filteredTeamMembers.length }})</h2>
        <div class="team-grid">
          <div v-for="member in displayedTeamMembers" :key="member.id" class="member-card">
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
                  <span v-if="member.projects.length > 2" class="project-tag more">+{{ member.projects.length - 2
                    }}</span>
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
              <a :href="member.socialLinks.facebook" target="_blank" class="social-icon facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a :href="member.socialLinks.github" target="_blank" class="social-icon github">
                <i class="fab fa-github"></i>
              </a>
              <a :href="member.socialLinks.linkedin" target="_blank" class="social-icon linkedin">
                <i class="fab fa-linkedin-in"></i>
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
      <div v-if="activeTab === 'contribute'" class="contribute-section">
        <h2 class="section-title">Contribute to Our Projects</h2>
        <div class="projects-grid">
          <div v-for="project in contributeProjects" :key="project.id" class="project-card"
            @click="showProjectPopup(project, $event)">
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
                  <div v-for="(contributor, index) in project.contributors.slice(0, 3)" :key="index"
                    class="contributor-avatar" @click.stop="showContributorPopup(contributor, project, $event)">
                    <img :src="contributor.avatar" :alt="contributor.name" />
                  </div>
                  <div v-if="project.contributors.length > 3" class="more-contributors"
                    @click.stop="showAllContributors(project, $event)">
                    <span>+{{ project.contributors.length - 3 }}</span>
                  </div>
                </div>
              </div>

              <a :href="project.url" target="_blank" class="contribute-btn" @click.stop>
                <i class="fas fa-code-branch"></i>
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Projects Section -->
      <div v-if="activeTab === 'video'" class="video-section">
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
                  <i class="fas fa-eye"></i>
                  {{ formatViews(video.views) }} views
                </span>
                <span class="video-date">{{ formatDate(video.publishedAt) }}</span>
              </div>
              <a :href="video.url" target="_blank" class="video-link">
                <i class="fas fa-play"></i>
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contributor Popup -->
    <div v-if="showPopup" class="contributor-popup" :style="popupPosition">
      <div class="popup-header">
        <div class="popup-avatar">
          <img :src="selectedContributor.avatar" :alt="selectedContributor.name" />
        </div>
        <div class="popup-info">
          <h3 class="popup-name">{{ selectedContributor.name }}</h3>
          <p class="popup-project">{{ selectedProject.name }}</p>
        </div>
      </div>
      <div class="popup-actions">
        <button class="follow-btn" @click="followContributor">
          <i class="fas fa-user-plus"></i>
          Follow
        </button>
      </div>
    </div>

    <!-- All Contributors Popup -->
    <div v-if="showAllContributorsPopup" class="all-contributors-popup" :style="allContributorsPopupPosition">
      <div class="all-contributors-header">
        <h3 class="all-contributors-title">All Contributors</h3>
        <p class="all-contributors-project">{{ selectedProjectForAll.name }}</p>
      </div>
      <div class="all-contributors-list">
        <div v-for="(contributor, index) in selectedProjectForAll.contributors" :key="index"
          class="all-contributor-item" @click="showContributorPopup(contributor, selectedProjectForAll, $event)">
          <div class="all-contributor-avatar">
            <img :src="contributor.avatar" :alt="contributor.name" />
          </div>
          <div class="all-contributor-info">
            <h4 class="all-contributor-name">{{ contributor.name }}</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Popup -->
    <div v-if="showProjectPopupFlag" class="project-popup" :style="projectPopupPosition">
      <div class="project-popup-header">
        <h3 class="project-popup-title">{{ selectedProjectForPopup.name }}</h3>
        <p class="project-popup-description">{{ selectedProjectForPopup.description }}</p>
      </div>
      <div class="project-popup-contributors">
        <h4 class="project-popup-contributors-title">Contributors</h4>
        <div class="project-popup-contributors-list">
          <div v-for="(contributor, index) in selectedProjectForPopup.contributors" :key="index"
            class="project-popup-contributor-item"
            @click="showContributorPopup(contributor, selectedProjectForPopup, $event)">
            <div class="project-popup-contributor-avatar">
              <img :src="contributor.avatar" :alt="contributor.name" />
            </div>
            <div class="project-popup-contributor-info">
              <h5 class="project-popup-contributor-name">{{ contributor.name }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="project-popup-actions">
        <button class="follow-project-btn" @click="followProject">
          <i class="fas fa-star"></i>
          Follow Project
        </button>
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
const showPopup = ref(false)
const selectedContributor = ref(null)
const selectedProject = ref(null)
const popupPosition = ref({ top: '0px', left: '0px' })
const showAllContributorsPopup = ref(false)
const selectedProjectForAll = ref(null)
const allContributorsPopupPosition = ref({ top: '0px', left: '0px' })
const showProjectPopupFlag = ref(false)
const selectedProjectForPopup = ref(null)
const projectPopupPosition = ref({ top: '0px', left: '0px' })

// Function to generate a beautiful avatar URL
const generateAvatar = (seed, style = 'avataaars') => {
  // Using the DiceBear API with different styles for variety
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=ff9800&radius=50&scale=90`;
}

// Function to generate Lethean avatar (consistent style)
const getLetheanAvatar = () => {
  return generateAvatar('lethean', 'avataaars');
}

// Positions for filtering
const positions = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Web Developer',
  'QA',
  'Scrum Master',
  'Team Lead'
]

// Projects data
const projects = ref([
  { id: 1, name: 'Music Band', url: 'https://github.com/Lethean-2005/Music-Band', language: 'JavaScript', stars: 42 },
  { id: 2, name: 'Task Management', url: 'https://github.com/Lethean-2005/Task-Management-App', language: 'Vue.js', stars: 28 },
  { id: 3, name: 'Chatbot', url: 'https://github.com/Lethean-2005/Telegram-Chatbot', language: 'Python', stars: 35 },
  { id: 4, name: 'Movie Booking', url: 'https://github.com/Lethean-2005/Movie-Booking-System', language: 'React', stars: 19 },
  { id: 5, name: 'Air Quality', url: 'https://github.com/Lethean-2005/Air-Quality-Dashboard-', language: 'JavaScript', stars: 23 },
  { id: 6, name: 'VC1', url: 'https://github.com/Lethean-2005/VC1-Daily-Need', language: 'Node.js', stars: 15 },
  { id: 7, name: 'My Portfolio', url: 'https://github.com/Lethean-2005/Lethean-Portfolio-nuxt', language: 'Nuxt.js', stars: 31 }
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
      { name: 'Lethean Seourn', avatar: getLetheanAvatar() },
      { name: 'Un Piset', avatar: generateAvatar('unpiset', 'bottts') },
      { name: 'Thy Kartrok', avatar: generateAvatar('thykartrok', 'identicon') }
    ]
  },
  {
    id: 2,
    name: 'Task Management',
    url: 'https://github.com/Lethean-2005/Task-Management-App',
    language: 'Vue.js',
    stars: 28,
    forks: 5,
    description: 'A comprehensive task management application built with Vue.js, featuring drag-and-drop functionality, due dates, and team collaboration.',
    contributors: [
      { name: 'Tep Nilrathana', avatar: generateAvatar('tepnilrathana', 'micah') },
      { name: 'Khat Lynak', avatar: generateAvatar('khatlynak', 'initials') },
      { name: 'Lethean Seourn', avatar: getLetheanAvatar() }
    ]
  },
  {
    id: 3,
    name: 'Chatbot',
    url: 'https://github.com/Lethean-2005/Telegram-Chatbot',
    language: 'Python',
    stars: 35,
    forks: 12,
    description: 'An intelligent Telegram chatbot built with Python, providing automated responses, reminders, and information retrieval services.',
    contributors: [
      { name: 'Neat Solin', avatar: generateAvatar('neatsolin', 'big-smile') },
      { name: 'Nat Mesa', avatar: generateAvatar('natmesa', 'lorelei') },
      { name: 'Lethean Seourn', avatar: getLetheanAvatar() }
    ]
  },
  {
    id: 4,
    name: 'Movie Booking',
    url: 'https://github.com/Lethean-2005/Movie-Booking-System',
    language: 'React',
    stars: 19,
    forks: 4,
    description: 'A movie booking system built with React, allowing users to browse movies, select seats, and book tickets online.',
    contributors: [
      { name: 'Nhean Panh Nha', avatar: generateAvatar('nheanpanhnha', 'pixel-art') },
      { name: 'Nat Mesa', avatar: generateAvatar('natmesa', 'lorelei') },
      { name: 'Lethean Seourn', avatar: getLetheanAvatar() }
    ]
  },
  {
    id: 5,
    name: 'Air Quality',
    url: 'https://github.com/Lethean-2005/Air-Quality-Dashboard-',
    language: 'JavaScript',
    stars: 23,
    forks: 6,
    description: 'An air quality monitoring dashboard that visualizes pollution data in real-time using JavaScript and D3.js.',
    contributors: [
      { name: 'Din Yong Sy', avatar: generateAvatar('dinyongsy', 'adventurer') },
      { name: 'Nak Soklen', avatar: generateAvatar('naksoklen', 'big-ears-neutral') },
      { name: 'Pheang Neanganoch', avatar: generateAvatar('pheangneanganoch', 'fun-emoji') },
      { name: 'Phong Lymeng', avatar: generateAvatar('phonglymeng', 'bottts') },
      { name: 'Lethean Seourn', avatar: getLetheanAvatar() }
    ]
  },
  {
    id: 6,
    name: 'VC1',
    url: 'https://github.com/Lethean-2005/VC1-Daily-Need',
    language: 'Node.js',
    stars: 15,
    forks: 3,
    description: 'A daily needs delivery service application built with Node.js, featuring user authentication, order tracking, and payment integration.',
    contributors: [
      { name: 'Rochom Eub', avatar: generateAvatar('rochomeub', 'croodles') },
      { name: 'Din Yong Sy', avatar: generateAvatar('dinyongsy', 'adventurer') },
      { name: 'Neat Solin', avatar: generateAvatar('neatsolin', 'big-smile') },
      { name: 'Un Piset', avatar: generateAvatar('unpiset', 'bottts') },
      { name: 'Lethean Seourn', avatar: getLetheanAvatar() }
    ]
  },
  {
    id: 7,
    name: 'My Portfolio',
    url: 'https://github.com/Lethean-2005/Lethean-Portfolio-nuxt',
    language: 'Nuxt.js',
    stars: 31,
    forks: 9,
    description: 'A personal portfolio website built with Nuxt.js, showcasing projects, skills, and professional experience with a modern design.',
    contributors: [
      { name: 'Yem Seavmey', avatar: generateAvatar('yemseavmey', 'avataaars') },
      { name: 'Lethean Seourn', avatar: getLetheanAvatar() }
    ]
  }
])

// Video projects data
const videoProjects = ref([
  {
    id: 1,
    title: 'Vue.js Authentication Tutorial',
    description: 'Learn how to implement secure authentication in Vue.js applications using JWT tokens.',
    thumbnail: 'https://img.youtube.com/vi/fJV-T2pkacY/maxresdefault.jpg',
    duration: '24:18',
    views: 4250,
    publishedAt: '2023-09-05T00:00:00Z',
    url: 'https://youtu.be/fJV-T2pkacY?si=5EI9qvzSLcfH5GRB',
    videoId: 'fJV-T2pkacY'
  },
  {
    id: 2,
    title: 'Building Responsive Layouts with CSS Grid',
    description: 'Master CSS Grid to create complex, responsive layouts with ease.',
    thumbnail: 'https://img.youtube.com/vi/d5BU6FBy6y4/maxresdefault.jpg',
    duration: '19:33',
    views: 3820,
    publishedAt: '2023-09-18T00:00:00Z',
    url: 'https://youtu.be/d5BU6FBy6y4?si=5Mvgs6cGfu0hodH7',
    videoId: 'd5BU6FBy6y4'
  }
])

// Team members data
const teamMembers = ref([
  {
    id: 1,
    name: 'Lethean Seourn',
    position: 'Full-Stack Developer',
    avatar: getLetheanAvatar(),
    email: 'letheanseourn05@gmail.com',
    status: 'online',
    projects: projects.value,
    socialLinks: {
      facebook: 'https://www.facebook.com/le.thean.18',
      github: 'https://github.com/Lethean-2005',
      linkedin: 'https://www.linkedin.com/in/lethean-seourn-bb0940344/'
    }
  },
  {
    id: 2,
    name: 'Rochom Eub',
    position: 'Backend Developer',
    avatar: generateAvatar('rochomeub', 'bottts'),
    email: 'rochomeub@example.com',
    status: 'online',
    projects: [
      { id: 6, name: 'VC1' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/rochom.eub',
      github: 'https://github.com/OEUBROCHOM',
      linkedin: 'https://linkedin.com/in/rochom-eub'
    }
  },
  {
    id: 3,
    name: 'Din Yong Sy',
    position: 'Frontend Developer',
    avatar: generateAvatar('dinyongsy', 'adventurer'),
    email: 'dinyongsy@example.com',
    status: 'away',
    projects: [
      { id: 6, name: 'VC1' },
      { id: 5, name: 'Air Quality' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/din.yongsy',
      github: 'https://github.com/yongsy-17',
      linkedin: 'https://linkedin.com/in/din-yong-sy'
    }
  },
  {
    id: 4,
    name: 'Un Piset',
    position: 'QA',
    avatar: generateAvatar('unpiset', 'micah'),
    email: 'unpiset@example.com',
    status: 'offline',
    projects: [
      { id: 1, name: 'Music Band' },
      { id: 6, name: 'VC1' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/un.piset',
      github: 'https://github.com/PISETHUN',
      linkedin: 'https://linkedin.com/in/un-piset'
    }
  },
  {
    id: 5,
    name: 'Thy Kartrok',
    position: 'Frontend Developer',
    avatar: generateAvatar('thykartrok', 'identicon'),
    email: 'thykartrok@example.com',
    status: 'online',
    projects: [
      { id: 1, name: 'Music Band' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/thy.kartrok',
      github: 'https://github.com/thykartrok',
      linkedin: 'https://linkedin.com/in/thy-kartrok'
    }
  },
  {
    id: 6,
    name: 'Neat Solin',
    position: 'Frontend Developer',
    avatar: generateAvatar('neatsolin', 'big-smile'),
    email: 'neatsolin@example.com',
    status: 'online',
    projects: [
      { id: 3, name: 'Chatbot' },
      { id: 6, name: 'VC1' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/neat.solin',
      github: 'https://github.com/neatsolin',
      linkedin: 'https://linkedin.com/in/neat-solin'
    }
  },
  {
    id: 7,
    name: 'Nat Mesa',
    position: 'Web Developer',
    avatar: generateAvatar('natmesa', 'lorelei'),
    email: 'natmesa@example.com',
    status: 'away',
    projects: [
      { id: 3, name: 'Chatbot' },
      { id: 4, name: 'Movie Booking' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/nat.mesa',
      github: 'https://github.com/natmesa',
      linkedin: 'https://linkedin.com/in/nat-mesa'
    }
  },
  {
    id: 8,
    name: 'Nhean Panh Nha',
    position: 'Backend Developer',
    avatar: generateAvatar('nheanpanhnha', 'pixel-art'),
    email: 'nheanpanhnha@example.com',
    status: 'offline',
    projects: [
      { id: 4, name: 'Movie Booking' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/nhean.panh.nha',
      github: 'https://github.com/nheanpanhnha',
      linkedin: 'https://linkedin.com/in/nhean-panh-nha'
    }
  },
  {
    id: 9,
    name: 'Tep Nilrathana',
    position: 'Frontend Developer',
    avatar: generateAvatar('tepnilrathana', 'initials'),
    email: 'tepnilrathana@example.com',
    status: 'online',
    projects: [
      { id: 2, name: 'Task Management' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/tep.nilrathana',
      github: 'https://github.com/tepnilrathana',
      linkedin: 'https://linkedin.com/in/tep-nilrathana'
    }
  },
  {
    id: 10,
    name: 'Khat Lynak',
    position: 'Team Lead',
    avatar: generateAvatar('khatlynak', 'big-ears-neutral'),
    email: 'khatlynak@example.com',
    status: 'away',
    projects: [
      { id: 2, name: 'Task Management' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/khat.lynak',
      github: 'https://github.com/khatlynak',
      linkedin: 'https://linkedin.com/in/khat-lynak'
    }
  },
  {
    id: 11,
    name: 'Pheang Neanganoch',
    position: 'Backend Developer',
    avatar: generateAvatar('pheangneanganoch', 'fun-emoji'),
    email: 'pheangneanganoch@example.com',
    status: 'online',
    projects: [
      { id: 5, name: 'Air Quality' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/pheang.neanganoch',
      github: 'https://github.com/pheangneanganoch',
      linkedin: 'https://linkedin.com/in/pheang-neanganoch'
    }
  },
  {
    id: 12,
    name: 'Nak Soklen',
    position: 'Frontend Developer',
    avatar: generateAvatar('naksoklen', 'bottts'),
    email: 'naksoklen@example.com',
    status: 'offline',
    projects: [
      { id: 5, name: 'Air Quality' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/nak.soklen',
      github: 'https://github.com/naksoklen',
      linkedin: 'https://linkedin.com/in/nak-soklen'
    }
  },
  {
    id: 13,
    name: 'Phong Lymeng',
    position: 'Scrum Master',
    avatar: generateAvatar('phonglymeng', 'croodles'),
    email: 'phonglymeng@example.com',
    status: 'online',
    projects: [
      { id: 5, name: 'Air Quality' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/phong.lymeng',
      github: 'https://github.com/phonglymeng',
      linkedin: 'https://linkedin.com/in/phong-lymeng'
    }
  },
  {
    id: 14,
    name: 'Yem Seavmey',
    position: 'QA',
    avatar: generateAvatar('yemseavmey', 'avataaars'),
    email: 'yemseavmey@example.com',
    status: 'away',
    projects: [
      { id: 7, name: 'My Portfolio' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/yem.seavmey',
      github: 'https://github.com/yemseavmey',
      linkedin: 'https://linkedin.com/in/yem-seavmey'
    }
  }
])

// Tab data
const tabs = [
  { id: 'team', name: 'Team Members', icon: 'fas fa-users' },
  { id: 'contribute', name: 'Contribute Projects', icon: 'fas fa-code-branch' },
  { id: 'video', name: 'Video Projects', icon: 'fas fa-video' }
]

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
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Update video data with simulated real values
    videoProjects.value[0].views = 4250
    videoProjects.value[0].publishedAt = '2023-09-05T00:00:00Z'

    videoProjects.value[1].views = 3820
    videoProjects.value[1].publishedAt = '2023-09-18T00:00:00Z'

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

  // Close popups if clicking outside
  if (showPopup.value && !event.target.closest('.contributor-popup') && !event.target.closest('.contributor-avatar')) {
    showPopup.value = false
  }

  if (showAllContributorsPopup.value && !event.target.closest('.all-contributors-popup') && !event.target.closest('.more-contributors')) {
    showAllContributorsPopup.value = false
  }

  if (showProjectPopupFlag.value && !event.target.closest('.project-popup') && !event.target.closest('.project-card')) {
    showProjectPopupFlag.value = false
  }
}

// Show contributor popup
const showContributorPopup = (contributor, project, event) => {
  selectedContributor.value = contributor
  selectedProject.value = project

  // Position the popup at the top right of the clicked avatar
  if (event) {
    const rect = event.target.getBoundingClientRect()
    popupPosition.value = {
      top: `${rect.top}px`,
      left: `${rect.right + 10}px`
    }

    // Adjust if popup goes off screen
    setTimeout(() => {
      const popup = document.querySelector('.contributor-popup')
      if (popup) {
        const popupRect = popup.getBoundingClientRect()
        if (popupRect.right > window.innerWidth) {
          popupPosition.value.left = `${rect.left - popupRect.width - 10}px`
        }
        if (popupRect.bottom > window.innerHeight) {
          popupPosition.value.top = `${window.innerHeight - popupRect.height - 10}px`
        }
      }
    }, 0)
  } else {
    // Fallback position
    popupPosition.value = {
      top: '50%',
      left: '50%'
    }
  }

  showPopup.value = true
  showAllContributorsPopup.value = false // Close other popup
  showProjectPopupFlag.value = false // Close project popup
}

// Show all contributors popup
const showAllContributors = (project, event) => {
  selectedProjectForAll.value = project

  // Position the popup at the top right of the clicked element
  if (event) {
    const rect = event.target.getBoundingClientRect()
    allContributorsPopupPosition.value = {
      top: `${rect.top}px`,
      left: `${rect.right + 10}px`
    }

    // Adjust if popup goes off screen
    setTimeout(() => {
      const popup = document.querySelector('.all-contributors-popup')
      if (popup) {
        const popupRect = popup.getBoundingClientRect()
        if (popupRect.right > window.innerWidth) {
          allContributorsPopupPosition.value.left = `${rect.left - popupRect.width - 10}px`
        }
        if (popupRect.bottom > window.innerHeight) {
          allContributorsPopupPosition.value.top = `${window.innerHeight - popupRect.height - 10}px`
        }
      }
    }, 0)
  } else {
    // Fallback position
    allContributorsPopupPosition.value = {
      top: '50%',
      left: '50%'
    }
  }

  showAllContributorsPopup.value = true
  showPopup.value = false // Close other popup
  showProjectPopupFlag.value = false // Close project popup
}

// Show project popup
const showProjectPopup = (project, event) => {
  selectedProjectForPopup.value = project

  // Position the popup at the top right of the clicked project card
  if (event) {
    const rect = event.currentTarget.getBoundingClientRect()
    projectPopupPosition.value = {
      top: `${rect.top}px`,
      left: `${rect.right + 10}px`
    }

    // Adjust if popup goes off screen
    setTimeout(() => {
      const popup = document.querySelector('.project-popup')
      if (popup) {
        const popupRect = popup.getBoundingClientRect()
        if (popupRect.right > window.innerWidth) {
          projectPopupPosition.value.left = `${rect.left - popupRect.width - 10}px`
        }
        if (popupRect.bottom > window.innerHeight) {
          projectPopupPosition.value.top = `${window.innerHeight - popupRect.height - 10}px`
        }
      }
    }, 0)
  } else {
    // Fallback position
    projectPopupPosition.value = {
      top: '50%',
      left: '50%'
    }
  }

  showProjectPopupFlag.value = true
  showPopup.value = false // Close other popup
  showAllContributorsPopup.value = false // Close other popup
}

// Follow contributor
const followContributor = () => {
  console.log(`Following ${selectedContributor.value.name} on project: ${selectedProject.value.name}`)
  alert(`You are now following ${selectedContributor.value.name} on the ${selectedProject.value.name} project!`)
  showPopup.value = false
}

// Follow project
const followProject = () => {
  console.log(`Following project: ${selectedProjectForPopup.value.name}`)
  alert(`You are now following the ${selectedProjectForPopup.value.name} project!`)
  showProjectPopupFlag.value = false
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.team-dashboard {
  font-family: 'Inter', sans-serif;
  color: #f8fafc;
  border-radius: 1rem;
  padding: 1.5rem;
  min-height: calc(100vh - 4rem);
  /* background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d1a14 100%); */
  position: relative;
  overflow: hidden;
}

.team-bg-text {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.03);
  letter-spacing: 0.05em;
  pointer-events: none;
  user-select: none;
  line-height: 1;
  z-index: 0;
}

/* Header */
.team-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.team-info {
  flex: 1;
}

.team-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  width: fit-content;
  margin-bottom: 1.5rem;
}

.team-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.team-subtitle {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
  max-width: 320px;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tab-navigation::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
}

.tab-btn.active {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.2);
}

.tab-btn i {
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
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: #ffffff;
  padding: 0.625rem 1rem 0.625rem 2.5rem;
  font-size: 0.875rem;
  width: 320px;
  height: 36px;
  transition: all 0.2s ease;
}

.search-box input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(25, 25, 25, 0.9);
}

.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.search-box svg {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
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
  background: rgba(20, 20, 20, 0.8);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-filter:hover {
  background: rgba(25, 25, 25, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

.filter-options {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(20, 20, 20, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  color: rgba(255, 255, 255, 0.7);
}

.filter-item select {
  background: rgba(15, 15, 15, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  color: #ffffff;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
}

.filter-item select:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.2);
}

/* Content */
.team-content {
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #ffffff;
}

/* Team Section */
.team-section {
  margin-bottom: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.member-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.member-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

.member-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.member-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
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
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-position {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-details {
  margin-bottom: 1rem;
}

.detail-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.25rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.project-tag {
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
  color: rgba(255, 255, 255, 0.7);
}

.project-tag.more {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
}

.contact-info {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.contact-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-social {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.social-icon {
  width: 32px;
  height: 32px;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
}

.social-icon:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
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
  color: rgba(255, 255, 255, 0.5);
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
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.show-more-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Contribute Section */
.contribute-section {
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}

.project-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
}

.project-actions {
  display: flex;
  gap: 0.75rem;
}

.project-action {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-action:hover {
  color: rgba(255, 255, 255, 0.9);
}

.project-content {
  margin-bottom: 0.75rem;
  flex-grow: 1;
}

.project-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

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
  color: rgba(255, 255, 255, 0.5);
  margin-right: 0.5rem;
}

.contributors-list {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.contributor-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.contributor-avatar:hover {
  transform: scale(1.1);
}

.contributor-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.more-contributors {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(15, 15, 15, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.625rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.more-contributors:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: scale(1.1);
}

.contribute-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #0a0a0a;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

.contribute-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Video Section */
.video-section {
  margin-bottom: 2rem;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}

.video-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.video-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

.video-thumbnail {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  /* 16:9 aspect ratio */
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
  color: #ffffff;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
}

.video-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.video-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
}

.video-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  flex-grow: 1;
  line-height: 1.4;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
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
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.video-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

/* Contributor Popup */
.contributor-popup {
  position: fixed;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  z-index: 100;
  width: 220px;
  padding: 1rem;
}

.popup-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.popup-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.popup-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popup-info {
  flex: 1;
}

.popup-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.popup-project {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.popup-actions {
  display: flex;
  justify-content: center;
}

.follow-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #0a0a0a;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.follow-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* All Contributors Popup */
.all-contributors-popup {
  position: fixed;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  z-index: 100;
  width: 280px;
  max-height: 400px;
  padding: 1rem;
  overflow-y: auto;
}

.all-contributors-header {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.all-contributors-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.all-contributors-project {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.all-contributors-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.all-contributor-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(15, 15, 15, 0.8);
  cursor: pointer;
  transition: all 0.2s ease;
}

.all-contributor-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.all-contributor-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.all-contributor-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.all-contributor-info {
  flex: 1;
}

.all-contributor-name {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
}

/* Project Popup */
.project-popup {
  position: fixed;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  z-index: 100;
  width: 320px;
  max-height: 500px;
  padding: 1rem;
  overflow-y: auto;
}

.project-popup-header {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.project-popup-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
}

.project-popup-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
}

.project-popup-contributors {
  margin-bottom: 1rem;
}

.project-popup-contributors-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: #ffffff;
}

.project-popup-contributors-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-popup-contributor-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(15, 15, 15, 0.8);
  cursor: pointer;
  transition: all 0.2s ease;
}

.project-popup-contributor-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.project-popup-contributor-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.project-popup-contributor-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-popup-contributor-info {
  flex: 1;
}

.project-popup-contributor-name {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
}

.project-popup-actions {
  display: flex;
  justify-content: center;
}

.follow-project-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #0a0a0a;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.follow-project-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  .video-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .video-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }

  .search-box input {
    width: 200px;
  }

  .project-footer {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .team-header {
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
    width: 150px;
  }

  .contributor-popup {
    width: 200px;
  }

  .all-contributors-popup {
    width: 260px;
  }

  .project-popup {
    width: 280px;
  }
}
</style>