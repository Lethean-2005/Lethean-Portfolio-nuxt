<!-- layouts/default.vue -->
<template>
<div class="app">
  <navbar-component :expanded="isExpanded" @toggle="isExpanded = !isExpanded" />
  <main :class="['content', isExpanded ? 'expanded' : 'collapsed']">
    <slot />
  </main>
</div>
</template>

<script setup>
import { ref } from 'vue'
import NavbarComponent from '~/components/NavbarComponent.vue';

const isExpanded = ref(true)
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
.app {
min-height: 100vh;
background: url('https://4kwallpapers.com/images/wallpapers/windows-11-stock-official-light-2048x2048-5664.jpg') center/cover fixed;
padding: 1rem;
}
.content {
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(20px);
border-radius: 1rem;
padding: 1.5rem;
max-height: calc(100vh - 2rem);
overflow-y: auto;
scrollbar-width: none;
transition: margin-left 0.3s;
}
.content::-webkit-scrollbar { display: none; }
.content.expanded { margin-left: 236px; }
.content.collapsed { margin-left: 76px; }
.content h1 { font-size: 1.25rem; font-weight: 600; color: #1a1a1a; margin-bottom: 1.5rem; }
.content p { color: #6b7280; margin-bottom: 0.75rem; line-height: 1.5; font-size: 0.875rem; }
</style>