const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = process.env.DISCORD_BOT_TOKEN;

// Import your fruits data module
const fruits = require('./data');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignore messages from other bots

  if (message.content.toLowerCase() === '!ping') {
    message.reply('Pong!');
  }

  if (message.content.toLowerCase() === '!fruits') {
    try {
      // Use the imported fruits data directly
      const fruitNames = fruits.map(fruit => fruit.name).join(', ');

      // Send the list of fruits to the Discord channel
      message.reply(`Here are some fruits: ${fruitNames}`);
    } catch (error) {
      console.error('Error fetching fruits from data module:', error);
      message.reply('Error fetching fruits from data module.');
    }
  }

  // Your bot logic here
});

client.login(token);
