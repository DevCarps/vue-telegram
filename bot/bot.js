const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
const bot = new Telegraf('7623273613:AAFmaxOgiur7E1uM70cuQa08LPqA-9FhVUQ');

bot.start((ctx) => {
  // Send a welcome message with the link to your web app
  ctx.reply(`Welcome! Click here to open the app: https://vue-telegram-sample.netlify.app/`);
});

// Start the bot
bot.launch().then(() => {
  console.log('Bot is running...');
});
