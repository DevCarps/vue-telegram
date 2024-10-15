const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
const bot = new Telegraf('7623273613:AAFmaxOgiur7E1uM70cuQa08LPqA-9FhVUQ');

bot.start((ctx) => {
  // Send a welcome message with the link to your web app
  ctx.reply("Welcome! Tap the button below to start", {
    reply_markup: {
      keyboard: [
        [
          { text: "Web app", web_app: { url: 'https://vue-telegram-sample.netlify.app/' } }
        ]
      ],
      one_time_keyboard: true, // Optional: hides the keyboard after selection
      resize_keyboard: true, // Optional: adjusts the keyboard size
    }
  });
});

// Start the bot with error handling
bot.launch().then(() => {
  console.log('Bot is running...');
}).catch(err => {
  console.error('Error launching bot:', err);
});


