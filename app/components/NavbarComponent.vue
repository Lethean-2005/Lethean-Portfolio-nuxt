<!-- components/Sidebar.vue -->
<template>
    <aside :class="['sidebar', expanded ? 'expanded' : 'collapsed']">
        <!-- Header with toggle button positioned under logo when collapsed -->
        <div class="sidebar-header">
            <div class="logo-container" @click="navigateTo('/')">
                <div class="logo">
                    <svg class="logo-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
                    </svg>
                </div>
                <div v-if="expanded" class="logo-text">
                    <div class="brand-name">Lethean Seourn</div>
                    <div class="brand-plan">Software Developer</div>
                </div>
            </div>
            <button @click="$emit('toggle')" class="toggle-btn">
                <svg class="toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        :d="expanded ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'" />
                </svg>
            </button>
        </div>

        <!-- Rest of the template remains unchanged -->
        <div class="sidebar-content">
            <!-- Search -->
            <div class="search-box" :class="{ 'search-collapsed': !expanded }">
                <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input v-if="expanded" type="text" placeholder="Search" class="search-input" />
            </div>

            <!-- Main Nav -->
            <nav class="nav-section">
                <NuxtLink v-for="item in mainNav" :key="item.label" :to="item.path" class="nav-item"
                    :class="{ 'nav-collapsed': !expanded, active: isActive(item.path) }">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                    </svg>
                    <span v-if="expanded">{{ item.label }}</span>
                    <span v-if="item.badge && expanded" class="badge">{{ item.badge }}</span>
                    <span v-if="item.badge && !expanded" class="badge-dot"></span>
                </NuxtLink>
            </nav>

            <!-- Shared -->
            <div class="section">
                <div v-if="expanded" class="section-header"><span class="section-title">SHARED</span></div>
                <NuxtLink v-for="item in sharedNav" :key="item.label" :to="item.path" class="nav-item"
                    :class="{ 'nav-collapsed': !expanded, active: isActive(item.path) }">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                    </svg>
                    <span v-if="expanded">{{ item.label }}</span>
                </NuxtLink>
            </div>

            <!-- Projects -->
            <div class="section">
                <div v-if="expanded" class="section-header"><span class="section-title">PROJECTS</span></div>
                <NuxtLink v-for="p in projects" :key="p.label" :to="p.path" class="nav-item"
                    :class="{ 'nav-collapsed': !expanded, active: isActive(p.path) }">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="p.icon" />
                    </svg>
                    <span v-if="expanded">{{ p.label }}</span>
                </NuxtLink>
            </div>

            <!-- Bottom Nav -->
            <nav class="nav-section bottom-nav">
                <NuxtLink v-for="item in bottomNav" :key="item.label" :to="item.path" class="nav-item"
                    :class="{ 'nav-collapsed': !expanded, active: isActive(item.path) }">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                    </svg>
                    <span v-if="expanded">{{ item.label }}</span>
                </NuxtLink>
            </nav>

            <!-- User Profile Section -->
            <div class="section user-profile-section">
                <div class="user-profile">
                    <img src="/assets/images/logo/my-profile.jpg" alt="User" class="avatar" />
                    <div v-if="expanded" class="user-info">
                        <div class="user-name">Lethean Seourn</div>
                        <div class="user-email">letheanseourn05@gmail.com</div>
                    </div>
                </div>
                <!-- Profile menu items -->
                <div class="profile-menu">
                    <NuxtLink v-for="m in profileMenu" :key="m.label" :to="m.path" class="menu-item"
                        :class="{ 'menu-collapsed': !expanded, active: isActive(m.path) }">
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="m.icon" />
                        </svg>
                        <span v-if="expanded">{{ m.label }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { navigateTo } from '#app'

defineProps({ expanded: Boolean })
defineEmits(['toggle'])

const route = useRoute()

// Helper function to check if a route is active
const isActive = (path) => {
    return route.path === path
}

const mainNav = [
    { label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', path: '/profile' },
    { label: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z', path: '/education' },
    { label: 'Skills', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', path: '/skills' },
]

const sharedNav = [
    { label: 'News', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z', path: '/news' },
    { label: 'Team', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', path: '/team' },
]

const projects = [
    { label: 'Personal', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', path: '/personal' },
   { label: 'Schools', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M9 22V12h6v10', path: '/schools' },
    { label: 'Company', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', path: '/company' },
]

const bottomNav = [
    { label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', path: '/settings' },
    { label: 'Help', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', path: '/help' },
]

const profileMenu = [
    { label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', path: '/about' },
    { label: 'Download CV', icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', path: '/cv' },
    { label: 'Hire Me', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', path: '/hire' },
    { label: 'Chat', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', path: '/chat' },
]
</script>

<style scoped>
/* Keep your existing styles here */
.sidebar {
    position: fixed;
    top: 1rem;
    left: 1rem;
    bottom: 1rem;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(20px);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: width 0.3s ease;
    z-index: 10;
}

.sidebar.expanded {
    width: 220px;
}

.sidebar.collapsed {
    width: 60px;
}

.sidebar-header {
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.sidebar.collapsed .sidebar-header {
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.5rem 0.3rem;
}

.logo-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    cursor: pointer;
    outline: none;
}

.sidebar.collapsed .logo-container {
    justify-content: center;
}

.logo {
    width: 32px;
    height: 32px;
    background: #1a1a1a;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.logo-icon {
    width: 18px;
    height: 18px;
    color: white;
}

.logo-text {
    flex: 1;
    min-width: 0;
}

.brand-name {
    font-weight: 600;
    font-size: 0.8rem;
    color: #1a1a1a;
}

.brand-plan {
    font-size: 0.65rem;
    color: #6b7280;
}

.toggle-btn {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.sidebar.expanded .toggle-btn {
    margin-left: auto;
}

.toggle-btn:hover {
    background: #f3f4f6;
}

.toggle-icon {
    width: 14px;
    height: 14px;
    color: #6b7280;
}

.sidebar-content {
    flex: 1;
    overflow-y: auto;
    padding: 0.5rem;
    scrollbar-width: none;
}

.sidebar.collapsed .sidebar-content {
    padding: 0.3rem 0.5rem;
}

.sidebar-content::-webkit-scrollbar {
    display: none;
}

.search-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #f3f4f6;
    border-radius: 8px;
    padding: 0.4rem 0.5rem;
    margin-bottom: 0.5rem;
}

.search-collapsed {
    justify-content: center;
    padding: 0.4rem;
}

.search-input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 0.75rem;
    color: #374151;
    width: 100%;
}

.icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #6b7280;
}

.icon-sm {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: #9ca3af;
}

.nav-section {
    margin-bottom: 0.5rem;
}

.nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.5rem;
    border-radius: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.75rem;
    color: #374151;
    transition: background 0.2s;
    text-align: left;
    text-decoration: none;
    position: relative;
}

.nav-item.nav-collapsed {
    justify-content: center;
    padding: 0.4rem;
}

.nav-item:hover {
    background: rgba(0, 0, 0, 0.05);
}

.nav-item.active {
    background: rgba(0, 0, 0, 0.08);
}

.badge {
    margin-left: auto;
    background: #f97316;
    color: white;
    font-size: 0.6rem;
    padding: 0.1rem 0.35rem;
    border-radius: 9999px;
}

.badge-dot {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 6px;
    height: 6px;
    background: #f97316;
    border-radius: 50%;
}

.section {
    margin-bottom: 0.5rem;
}

.section-header {
    padding: 0 0.5rem;
    margin-bottom: 0.25rem;
}

.section-title {
    font-size: 0.6rem;
    font-weight: 500;
    color: #9ca3af;
    letter-spacing: 0.05em;
}

.bottom-nav {
    margin-top: auto;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    margin-bottom: 0.5rem;
}

.user-profile-section {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    padding-top: 0.5rem;
}

.user-profile {
    padding: 0.4rem 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
}

.sidebar.collapsed .user-profile {
    padding: 0.4rem;
    justify-content: center;
}

.avatar {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    object-fit: cover;
    flex-shrink: 0;
}

.user-info {
    flex: 1;
    min-width: 0;
}

.user-name {
    font-weight: 500;
    font-size: 0.75rem;
    color: #1a1a1a;
}

.user-email {
    font-size: 0.6rem;
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.profile-menu {
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
}

.sidebar.collapsed .profile-menu {
    gap: 0.1rem;
}

.menu-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.5rem;
    border-radius: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.75rem;
    color: #374151;
    transition: background 0.2s;
    text-decoration: none;
}

.menu-item:hover {
    background: rgba(0, 0, 0, 0.05);
}

.menu-item.menu-collapsed {
    justify-content: center;
    padding: 0.4rem;
}
</style>