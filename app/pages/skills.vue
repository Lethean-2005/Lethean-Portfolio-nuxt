<template>
  <div>
    <h1>Skills</h1>
    <div class="mt-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Technical Skills</h2>
          <ul class="space-y-2">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              JavaScript / TypeScript
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Vue.js / Nuxt.js
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Node.js / Express
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Tailwind CSS
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              MongoDB / PostgreSQL
            </li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Soft Skills</h2>
          <ul class="space-y-2">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Problem Solving
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Team Collaboration
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Project Management
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Communication
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Continuous Learning
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Skills | Lethean Seourn',
  meta: [
    { name: 'description', content: 'Technical and soft skills of Lethean Seourn' }
  ]
})
</script>