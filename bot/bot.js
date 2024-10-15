require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

const web_link = 'https://vue-telegram-sample.netlify.app/';

bot.start((ctx) => {
  ctx.reply("Welcome! Tap the button below to start", {
    reply_markup: {
      keyboard: [
        [
          { text: "Web app", web_app: { url: web_link } }
        ]
      ],
      one_time_keyboard: true,
      resize_keyboard: true,
    }
  });
});

// Start the bot with error handling
bot.launch().then(() => {
  console.log('Bot is running...');
}).catch(err => {
  console.error('Error launching bot:', err);
});
