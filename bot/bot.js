const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
const bot = new Telegraf('YOUR_BOT_TOKEN');

bot.start((ctx) => {
  // Automatically send the web app link
  ctx.reply("Welcome! Here is the link to the web app: https://vue-telegram-sample.netlify.app/", {
    disable_web_page_preview: true // Optional: disables the link preview
  });
});

// Start the bot with error handling
bot.launch().then(() => {
  console.log('Bot is running...');
}).catch(err => {
  console.error('Error launching bot:', err);
});
