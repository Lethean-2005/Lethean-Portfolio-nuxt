<!-- app.vue -->
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// App-level setup
useHead({
  title: 'Lethean Seourn - Software Developer',
  meta: [
    { name: 'description', content: 'Portfolio website of Lethean Seourn, Software Developer' },
    { name: 'keywords', content: 'Software Developer, Portfolio, Web Development, Vue.js, Nuxt.js' },
    { name: 'author', content: 'Lethean Seourn' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: #f8fafc;
  color: #334155;
  line-height: 1.6;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* Focus styles for accessibility */
/* :focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
} */

/* Button reset */
button {
  font-family: inherit;
  cursor: pointer;
}

/* Link reset */
a {
  color: inherit;
  text-decoration: none;
}
</style>