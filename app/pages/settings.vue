<template>
  <div>
    <h1>Settings</h1>
    <div class="mt-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Account Settings</h2>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" value="Lethean Seourn" class="w-full px-3 py-2 border border-gray-300 rounded-md">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value="letheanseourn05@gmail.com" class="w-full px-3 py-2 border border-gray-300 rounded-md">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md">Software Developer with expertise in modern web technologies.</textarea>
          </div>
          <div>
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Settings | Lethean Seourn',
  meta: [
    { name: 'description', content: 'Account settings for Lethean Seourn' }
  ]
})
</script>