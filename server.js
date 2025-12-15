const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const TELEGRAM_TOKEN = '7755537289:AAFLJyTANI0Vgk8XUaH_sVatLNzG-yGJWZo';
const YOUR_CHAT_ID = '7866260721';
const NEWS_FILE = path.join(__dirname, 'news.json');

// Initialize news file if it doesn't exist
if (!fs.existsSync(NEWS_FILE)) {
  fs.writeFileSync(NEWS_FILE, JSON.stringify([]));
}

// Telegram webhook endpoint
app.post('/telegram-webhook', (req, res) => {
  const { message } = req.body;
  
  if (message && message.chat.id.toString() === YOUR_CHAT_ID) {
    const newsItem = {
      id: message.message_id,
      text: message.text,
      date: new Date(message.date * 1000).toISOString() // Convert Unix timestamp to ISO string
    };
    
    // Read existing news
    const news = JSON.parse(fs.readFileSync(NEWS_FILE));
    
    // Add new item at the beginning
    news.unshift(newsItem);
    
    // Save updated news
    fs.writeFileSync(NEWS_FILE, JSON.stringify(news, null, 2));
  }
  
  res.sendStatus(200);
});

// Serve news data
app.get('/api/news', (req, res) => {
  const news = JSON.parse(fs.readFileSync(NEWS_FILE));
  res.json(news);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});