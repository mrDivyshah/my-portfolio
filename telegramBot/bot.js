const TelegramBot = require('node-telegram-bot-api');
const token = '7043906034:AAEXhOZUI08nNWhbJSdt1cvtBE5lU3D7ZJQ';

// Create a new instance of the Telegram bot
const bot = new TelegramBot(token, { polling: true });

// Listen for messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Respond to the received message
    bot.sendMessage(chatId, `You said: ${messageText}`);
});