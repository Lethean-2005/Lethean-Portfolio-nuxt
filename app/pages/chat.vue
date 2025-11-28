<template>
  <div>
    <h1>Chat</h1>
    <p>This is the chat page content.</p>
    <div class="chat-container">
      <div class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="message.sender">
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="chat-input">
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message...">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([
  { text: 'Hello! How can I help you today?', sender: 'other' }
])
const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ text: newMessage.value, sender: 'user' })
    newMessage.value = ''
    
    // Simulate a response after a short delay
    setTimeout(() => {
      messages.value.push({ text: 'Thank you for your message. I will get back to you soon!', sender: 'other' })
    }, 1000)
  }
}
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
}
.chat-messages {
  height: 300px;
  overflow-y: auto;
  padding: 1rem;
  background-color: #f9f9f9;
}
.message {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  max-width: 80%;
}
.message.user {
  background-color: #e3f2fd;
  margin-left: auto;
  text-align: right;
}
.message.other {
  background-color: #f1f1f1;
}
.chat-input {
  display: flex;
  padding: 0.5rem;
  border-top: 1px solid #ddd;
}
.chat-input input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
}
.chat-input button {
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>