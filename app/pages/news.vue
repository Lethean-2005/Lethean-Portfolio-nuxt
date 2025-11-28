<template>
  <div>
    <h1>News</h1>
    <div class="mt-6">
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-2">New Project Launch</h2>
          <p class="text-gray-600 mb-2">Published on June 15, 2023</p>
          <p>Excited to announce the launch of my latest project, an e-commerce platform built with Vue.js and Node.js.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-2">Speaking at Tech Conference</h2>
          <p class="text-gray-600 mb-2">Published on May 2, 2023</p>
          <p>I'll be speaking at the annual Web Developers Conference about modern state management in Vue.js applications.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'News | Lethean Seourn',
  meta: [
    { name: 'description', content: 'Latest news and updates from Lethean Seourn' }
  ]
})
</script>