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

const token = process.env.DISCORD_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!ping') {
    message.reply('Pong!');
  } else if (message.content.toLowerCase() === '!joke') {
    // Make an API call to get a Chuck Norris joke
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      message.reply(response.data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error.message);
      message.reply('Sorry, I couldn\'t fetch a joke at the moment.');
    }
  }
});

client.login(token);
