<template>
  <div class="skills-dashboard">
    <!-- Background Text -->
    <div class="skills-bg-text">SKILLS</div>

    <!-- Header -->
    <div class="skills-header">
      <div class="skills-info">
        <div class="skills-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
          </svg>
          <span>Skills</span>
        </div>
        
        <h1 class="skills-title">My Skills Dashboard</h1>
        <p class="skills-subtitle">A comprehensive overview of my technical expertise and experience</p>
        
        <!-- Tab Navigation -->
        <div class="tab-navigation">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="tab-btn" 
            :class="{ active: activeTab === tab.id }" 
            @click="activeTab = tab.id"
          >
            <i :class="tab.icon"></i>
            {{ tab.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- Content Sections based on active tab -->
    <div class="skills-content">
      <!-- Overview Tab -->
      <div v-if="activeTab === 'overview'" class="overview-section">
        <div class="overview-grid">
          <!-- Profile Card -->
          <div class="profile-card">
            <div class="profile-header">
              <div class="profile-avatar">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=lethean&backgroundColor=ff9800&radius=50&scale=90" alt="Lethean Seourn" />
              </div>
              <div class="profile-info">
                <h2 class="profile-name">Lethean Seourn</h2>
                <p class="profile-title">Software Developer</p>
              </div>
            </div>
            
            <div class="profile-details">
              <div class="profile-contact">
                <div class="contact-item">
                  <i class="fas fa-envelope"></i>
                  <span>letheanseourn05@gmail.com</span>
                </div>
                <div class="contact-item">
                  <i class="fas fa-phone"></i>
                  <span>+855 968118930</span>
                </div>
                <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Soft Skills Card -->
          <div class="skills-card">
            <h3 class="card-title">Soft Skills</h3>
            <div class="skills-list">
              <div v-for="skill in softSkills" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Interests Card -->
          <div class="interests-card">
            <h3 class="card-title">Interests</h3>
            <div class="interests-list">
              <div v-for="interest in interests" :key="interest" class="interest-item">
                <i class="fas fa-heart"></i>
                <span>{{ interest }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Skills Tab -->
      <div v-if="activeTab === 'technical'" class="technical-section">
        <div class="skills-grid">
          <!-- Programming Languages -->
          <div class="skills-card">
            <h3 class="card-title">Programming Languages</h3>
            <div class="skills-list">
              <div v-for="skill in programmingLanguages" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Frameworks -->
          <div class="skills-card">
            <h3 class="card-title">Frameworks & Libraries</h3>
            <div class="skills-list">
              <div v-for="skill in frameworks" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Databases -->
          <div class="skills-card">
            <h3 class="card-title">Databases</h3>
            <div class="skills-list">
              <div v-for="skill in databases" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Other Skills -->
          <div class="skills-card">
            <h3 class="card-title">Other Skills</h3>
            <div class="skills-list">
              <div v-for="skill in otherSkills" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Tab -->
      <div v-if="activeTab === 'experience'" class="experience-section">
        <div class="projects-grid">
          <div v-for="project in experience" :key="project.id" class="project-card">
            <div class="project-header">
              <div class="project-title-section">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-period">{{ project.period }}</p>
              </div>
              <div class="project-status" :class="project.status === 'In Progress' ? 'in-progress' : 'completed'">
                {{ project.status }}
              </div>
            </div>
            
            <div class="project-content">
              <div v-for="role in project.roles" :key="role.name" class="project-role">
                <h4 class="role-name">{{ role.name }}</h4>
                <p class="role-position">{{ role.position }}</p>
                <ul class="role-tasks">
                  <li v-for="task in role.tasks" :key="task" class="task-item">
                    {{ task }}
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="project-footer">
              <div class="project-team">
                <div class="team-label">Team Members:</div>
                <div class="team-members">
                  <div v-for="member in project.team" :key="member" class="team-member">
                    <img :src="getTeamMemberAvatar(member)" :alt="member" />
                  </div>
                </div>
              </div>
              
              <div class="project-progress">
                <div class="progress-label">Progress:</div>
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: project.progress + '%' }"></div>
                </div>
                <div class="progress-percentage">{{ project.progress }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Tab -->
      <div v-if="activeTab === 'education'" class="education-section">
        <div class="education-grid">
          <div v-for="edu in education" :key="edu.id" class="education-card">
            <div class="education-header">
              <div class="education-title-section">
                <h3 class="education-title">{{ edu.degree }}</h3>
                <p class="education-institution">{{ edu.institution }}</p>
              </div>
              <div class="education-status" :class="edu.status === 'In Progress' ? 'in-progress' : 'completed'">
                {{ edu.status }}
              </div>
            </div>
            
            <div class="education-content">
              <p class="education-description">{{ edu.description }}</p>
              <ul class="education-focus">
                <li v-for="focus in edu.focus" :key="focus" class="focus-item">
                  {{ focus }}
                </li>
              </ul>
            </div>
            
            <div class="education-footer">
              <div class="year-label">{{ edu.status === 'In Progress' ? 'Expected Graduation' : 'Graduation Year' }}:</div>
              <div class="year-value">{{ edu.year }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Tab -->
      <div v-if="activeTab === 'tools'" class="tools-section">
        <div class="tools-grid">
          <div v-for="category in toolCategories" :key="category.name" class="tools-card">
            <h3 class="card-title">{{ category.name }}</h3>
            <div class="tools-list">
              <div v-for="tool in category.tools" :key="tool" class="tool-item">
                <div class="tool-logo">
                  <img :src="getToolLogo(tool)" :alt="tool" />
                </div>
                <span>{{ tool }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Languages Tab -->
      <div v-if="activeTab === 'languages'" class="languages-section">
        <div class="languages-grid">
          <div v-for="lang in languages" :key="lang.name" class="language-card">
            <div class="language-header">
              <div class="language-avatar" :class="lang.name === 'Khmer' ? 'khmer' : 'english'">
                {{ lang.name.charAt(0) }}
              </div>
              <div class="language-info">
                <h3 class="language-name">{{ lang.name }}</h3>
                <p class="language-level">{{ lang.level }}</p>
              </div>
            </div>
            
            <div class="language-skills">
              <div v-for="skill in lang.skills" :key="skill.name" class="language-skill">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.proficiency }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.proficiency + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Workshops Tab -->
      <div v-if="activeTab === 'workshops'" class="workshops-section">
        <div class="workshops-grid">
          <div v-for="workshop in workshops" :key="workshop.id" class="workshop-card">
            <div class="workshop-header">
              <h3 class="workshop-title">{{ workshop.title }}</h3>
              <p class="workshop-date">{{ workshop.date }}</p>
            </div>
            
            <div class="workshop-content">
              <p class="workshop-presenter"><span class="presenter-label">Presenter:</span> {{ workshop.presenter }}</p>
              <ul class="workshop-topics">
                <li v-for="topic in workshop.topics" :key="topic" class="topic-item">
                  {{ topic }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Company Visits -->
        <div class="company-visits-card">
          <h3 class="card-title">Company Visits</h3>
          <div class="company-visits-grid">
            <div v-for="visit in companyVisits" :key="visit.company" class="company-visit-card">
              <h4 class="company-name">{{ visit.company }}</h4>
              <p class="visit-date">{{ visit.date }}</p>
              <p class="visit-description">{{ visit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Tab management
const activeTab = ref('overview');
const tabs = [
  { id: 'overview', name: 'Overview', icon: 'fas fa-home' },
  { id: 'technical', name: 'Technical Skills', icon: 'fas fa-code' },
  { id: 'experience', name: 'Experience', icon: 'fas fa-briefcase' },
  { id: 'education', name: 'Education', icon: 'fas fa-graduation-cap' },
  { id: 'tools', name: 'Tools & Platforms', icon: 'fas fa-tools' },
  { id: 'languages', name: 'Languages', icon: 'fas fa-language' },
  { id: 'workshops', name: 'Workshops & Training', icon: 'fas fa-chalkboard-teacher' }
];

// Soft skills
const softSkills = [
  { name: 'Critical Thinking', level: 90 },
  { name: 'Teamwork', level: 85 },
  { name: 'Problem Solving', level: 80 },
  { name: 'Communication', level: 75 }
];

// Interests
const interests = [
  'Exploring New Technologies',
  'Building Personal Projects',
  'Learning New Programming Languages'
];

// Technical skills
const programmingLanguages = [
  { name: 'PHP', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'TypeScript', level: 70 }
];

const frameworks = [
  { name: 'Vue.js', level: 80 },
  { name: 'Laravel', level: 75 },
  { name: 'Node.js', level: 65 },
  { name: 'Bootstrap', level: 85 }
];

const databases = [
  { name: 'MySQL', level: 80 },
  { name: 'PostgreSQL', level: 70 }
];

const otherSkills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'OOP', level: 75 },
  { name: 'Data Analytics (Power BI)', level: 60 }
];

// Experience
const experience = [
  {
    id: 1,
    title: 'VIRTUAL COMPANY 1 PROJECT (VC1)',
    period: 'FEB 22 - MAY 2 2025',
    status: 'In Progress',
    progress: 65,
    team: ['LS', 'TM', 'JD'],
    roles: [
      {
        name: 'POS System',
        position: 'Product Owner & Developer',
        tasks: [
          'Led E-commerce System development as Product Owner',
          'Coordinated front-end and back-end implementation',
          'Managed tasks with Jira for on-time delivery'
        ]
      },
      {
        name: 'Task Management Application',
        position: 'Git Manager',
        tasks: [
          'Managed team roles and tasks',
          'Coordinated development through GitHub',
          'Led front-end development with responsive design'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'JAVASCRIPT PROJECT',
    period: 'Jan 12 - Jan 26 2025',
    status: 'Completed',
    progress: 100,
    team: ['LS', 'SK'],
    roles: [
      {
        name: 'Telegram Chatbot',
        position: 'Team Leader',
        tasks: [
          'Built a Telegram chatbot to automate interactions',
          'Integrated Telegram Bot API using Python',
          'Designed custom commands and automated replies'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'ALGORITHM PROJECT',
    period: 'Nov 11 - Nov 20 2024',
    status: 'Completed',
    progress: 100,
    team: ['LS', 'CP', 'MK'],
    roles: [
      {
        name: 'Algorithm Implementation',
        position: 'Developer',
        tasks: [
          'Implemented various algorithms using Python',
          'Optimized code for efficiency and performance'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'WEB DESIGN PROJECT',
    period: 'Sep 21 - Nov 4 2024',
    status: 'Completed',
    progress: 100,
    team: ['LS', 'RT', 'NP', 'VC'],
    roles: [
      {
        name: 'Music Band Website',
        position: 'Team Leader',
        tasks: [
          'Led static web design project',
          'Created and managed tasks using GitHub',
          'Implemented changes using HTML, CSS, and SASS',
          'Deployed the project using Netlify'
        ]
      }
    ]
  }
];

// Education
const education = [
  {
    id: 1,
    degree: 'Associate Degree',
    institution: 'Passerelles Numériques Cambodia',
    status: 'In Progress',
    year: '2024',
    description: 'Currently pursuing an Associate Degree in Software Development with focus on:',
    focus: [
      'Web Development (Front-end & Back-end)',
      'Database Management',
      'Software Engineering Principles',
      'Project Management'
    ]
  },
  {
    id: 2,
    degree: 'High School Diploma',
    institution: 'Lvea High School',
    status: 'Completed',
    year: '2023',
    description: 'Completed high school education with focus on:',
    focus: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science'
    ]
  }
];

// Tools - Rearranged with AI Tools at the top
const toolCategories = [
  {
    name: 'AI Tools',
    tools: ['ChatGPT', 'Copilot', 'Grok', 'Deepseek']
  },
  {
    name: 'Development Tools',
    tools: ['Git', 'GitHub', 'Linux', 'AWS', 'Docker']
  },
  {
    name: 'Project Management',
    tools: ['Jira', 'Postman']
  },
  {
    name: 'Design Tools',
    tools: ['Figma', 'Canva']
  },
  {
    name: 'Deployment Platforms',
    tools: ['Netlify', 'Vercel']
  },
  {
    name: 'Office Tools',
    tools: ['MS Word', 'MS Excel', 'MS PowerPoint']
  }
];

// Function to get team member avatars
const getTeamMemberAvatar = (member) => {
  const avatarSeeds = {
    'LS': 'lethean',
    'TM': 'teammember1',
    'JD': 'teammember2',
    'SK': 'teammember3',
    'CP': 'teammember4',
    'MK': 'teammember5',
    'RT': 'teammember6',
    'NP': 'teammember7',
    'VC': 'teammember8'
  };
  return `https://api.dicebear.com/7.x/bottts/svg?seed=${avatarSeeds[member] || member}&backgroundColor=ff9800&radius=50&scale=90`;
};

// Function to get tool logos - Updated with your provided URLs
const getToolLogo = (tool) => {
  const logoMap = {
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'AWS': 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws.png',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Canva': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    'MS Word': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2weYD5jLjBXTBN_bs69MSiFftCFB2uv5w1DfBsdtNKjgo1h23jxZjFXKt9rpjSNrtJPE&usqp=CAU',
    'MS Excel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw2t_cHj4iEHw2Mr_KnLm0Rp_S4Efo-INcg&s',
    'MS PowerPoint': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw2t_cHj4iEHw2Mr_KnLm0Rp_S4Efo-INcg&s',
    'ChatGPT': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZH7RyUSalXPozJigEDxsWFatFPdpT0yWmA&s',
    'Copilot': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmJajFJdxJlZcy2iVli5r3CcFD6C2T1qQoA&s',
    'Grok': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOv3K6RevHQCscoWPa2BvxKTq-9ygcQ4mhRA&s',
    'Deepseek': 'https://crystalpng.com/wp-content/uploads/2025/01/deepseek-logo-02.png'
  };
  return logoMap[tool] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tools/tools-original.svg';
};

// Languages
const languages = [
  {
    name: 'Khmer',
    level: 'Mother Tongue',
    skills: [
      { name: 'Reading', proficiency: 100 },
      { name: 'Writing', proficiency: 100 },
      { name: 'Speaking', proficiency: 100 },
      { name: 'Listening', proficiency: 100 }
    ]
  },
  {
    name: 'English',
    level: 'Intermediate',
    skills: [
      { name: 'Reading', proficiency: 80 },
      { name: 'Writing', proficiency: 70 },
      { name: 'Speaking', proficiency: 55 },
      { name: 'Listening', proficiency: 50 }
    ]
  }
];

// Workshops
const workshops = [
  {
    id: 1,
    title: 'Product Owner Workshop',
    date: 'JAN 18 & 25, 2025',
    presenter: 'Felix Leuker (Digital Project Manager)',
    topics: [
      'Introduction to the Product Owner role',
      'Responsibilities and tasks of a Product Owner',
      'Working with Jira for product management'
    ]
  },
  {
    id: 2,
    title: 'UX/UI Design Workshop',
    date: 'FEB 07 & MAR 14, 2025',
    presenter: 'Philip James BARDON (UX Designer, Sourcemax Asia Co., Ltd.)',
    topics: [
      'UX/UI design principles',
      'Hands-on experience in creating prototypes',
      'User-centered design approaches'
    ]
  },
  {
    id: 3,
    title: 'Data Analytics Workshop',
    date: 'JAN 18 & 25, 2025',
    presenter: 'Felix Leuker & Solution BI Staff',
    topics: [
      'Data analytics using Python',
      'Data visualization with Power BI',
      'Transforming raw data into meaningful insights'
    ]
  },
  {
    id: 4,
    title: 'Project Management Workshop',
    date: 'FEB 08, 2025',
    presenter: 'Felix Leuker (Digital Project Manager)',
    topics: [
      'Understanding key roles including Jira, Git, and Scrum Master',
      'Development team tasks with user stories',
      'Agile methodologies and implementation'
    ]
  }
];

// Company visits
const companyVisits = [
  {
    company: 'Sourceamax',
    date: '01 Nov 2024',
    description: 'Explored new programming languages and digital project workflows'
  },
  {
    company: 'ADD',
    date: '01 Nov 2025',
    description: 'Gained insights into secure computing and digital service systems'
  },
  {
    company: 'Amret Microfinance',
    date: '02 Apr 2025',
    description: 'Learned about mobile app usage in fintech solutions'
  },
  {
    company: 'Bikay & Solution BI',
    date: '30 Apr 2025',
    description: 'Observed software development and business intelligence analytics'
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.skills-dashboard {
  font-family: 'Inter', sans-serif;
  color: #f8fafc;
  border-radius: 1rem;
  padding: 1.5rem;
  min-height: calc(100vh - 4rem);
  /* background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d1a14 100%); */
  position: relative;
  overflow: hidden;
}

.skills-bg-text {
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
.skills-header {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.skills-info {
  max-width: 1000px;
}

.skills-badge {
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

.skills-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.skills-subtitle {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
  max-width: 600px;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
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
  font-size: 0.875rem;
}

/* Content */
.skills-content {
  position: relative;
  z-index: 1;
}

/* Overview Section */
.overview-section {
  margin-bottom: 2rem;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.profile-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
  grid-column: span 2;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.profile-title {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.profile-contact {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
}

.contact-item i {
  color: rgba(255, 255, 255, 0.5);
}

.skills-card, .interests-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #ffffff;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.skill-percentage {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #7c3aed 0%, #6d28d9 100%);
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

.interests-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
}

.interest-item i {
  color: rgba(255, 255, 255, 0.5);
}

/* Technical Section */
.technical-section {
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* Experience Section */
.experience-section {
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title-section {
  flex: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.project-period {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 1rem;
  flex-shrink: 0;
}

.project-status.in-progress {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
}

.project-status.completed {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
}

.project-content {
  margin-bottom: 1rem;
  flex-grow: 1;
}

.project-role {
  margin-bottom: 1rem;
}

.role-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.role-position {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 0.5rem 0;
}

.role-tasks {
  padding-left: 1.25rem;
  margin: 0;
}

.task-item {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
  position: relative;
}

.task-item::before {
  content: "";
  position: absolute;
  left: -1rem;
  top: 0.5rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.project-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.project-team {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.team-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}

.team-members {
  display: flex;
  gap: 0.5rem;
}

.team-member {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.team-member img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-progress {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.progress-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  min-width: 70px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

.progress-fill.in-progress {
  background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
}

.progress-fill.completed {
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
}

.progress-percentage {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  min-width: 40px;
  text-align: right;
}

/* Education Section */
.education-section {
  margin-bottom: 2rem;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.education-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.education-title-section {
  flex: 1;
}

.education-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.education-institution {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.education-status {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 1rem;
  flex-shrink: 0;
}

.education-status.in-progress {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
}

.education-status.completed {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
}

.education-content {
  margin-bottom: 1rem;
  flex-grow: 1;
}

.education-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.education-focus {
  padding-left: 1.25rem;
  margin: 0;
}

.focus-item {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
  position: relative;
}

.focus-item::before {
  content: "";
  position: absolute;
  left: -1rem;
  top: 0.5rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.education-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.year-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}

.year-value {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
}

/* Tools Section */
.tools-section {
  margin-bottom: 2rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tools-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.tool-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.tool-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.tool-logo {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Languages Section */
.languages-section {
  margin-bottom: 2rem;
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.language-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.language-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.language-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.language-avatar.khmer {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.language-avatar.english {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
}

.language-info {
  flex: 1;
}

.language-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.language-level {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.language-skills {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.language-skill {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.language-skill .skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language-skill .skill-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.language-skill .skill-percentage {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

.language-skill .skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.language-skill .skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

.language-skill.khmer .skill-progress {
  background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
}

.language-skill.english .skill-progress {
  background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
}

/* Workshops Section */
.workshops-section {
  margin-bottom: 2rem;
}

.workshops-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.workshop-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.workshop-header {
  margin-bottom: 1rem;
}

.workshop-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.workshop-date {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.workshop-content {
  margin-bottom: 1rem;
}

.workshop-presenter {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1rem 0;
}

.presenter-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.workshop-topics {
  padding-left: 1.25rem;
  margin: 0;
}

.topic-item {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
  position: relative;
}

.topic-item::before {
  content: "";
  position: absolute;
  left: -1rem;
  top: 0.5rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.company-visits-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-top: 1.5rem;
}

.company-visits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.company-visit-card {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.company-visit-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.company-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #ffffff;
}

.visit-date {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 0.5rem 0;
}

.visit-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .profile-card {
    grid-column: span 1;
  }
  
  .skills-grid,
  .tools-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .projects-grid,
  .education-grid,
  .languages-grid,
  .workshops-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media (max-width: 768px) {
  .skills-dashboard {
    padding: 1rem;
  }
  
  .skills-title {
    font-size: 2rem;
  }
  
  .tab-navigation {
    gap: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .tab-btn {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  }
  
  .profile-contact {
    grid-template-columns: 1fr;
  }
  
  .skills-grid,
  .tools-grid,
  .projects-grid,
  .education-grid,
  .languages-grid,
  .workshops-grid,
  .company-visits-grid {
    grid-template-columns: 1fr;
  }
  
  .project-header,
  .education-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .project-status,
  .education-status {
    margin-left: 0;
    align-self: flex-start;
  }
  
  .project-footer {
    gap: 0.75rem;
  }
  
  .tools-list {
    grid-template-columns: 1fr;
  }
}
</style>