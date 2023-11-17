// const dgram = require('dgram');
// const client = dgram.createSocket('udp4');

// const Discord = require('discord.js');
// const { GatewayIntentBits } = require('discord-api-types/v9');
// const clientDiscord = new Discord.Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });

// const prefix = '!'; // Customize your bot's command prefix

// clientDiscord.on('messageCreate', (message) => { // Update from 'message' to 'messageCreate'
//   if (!message.content.startsWith(prefix) || message.author.bot) return;

//   const args = message.content.slice(prefix.length).trim().split(' ');
//   const command = args.shift().toLowerCase();

//   if (command === 'getip') {
//     const udpMessage = Buffer.from([0x1, 0x0, 0x46, 0x0, 0x0, 0x0, 0x0, 0x0, 0x00]); // Replace with your UDP packet data
//     const udpPort = 12345; // Replace with your voice port

//     client.send(udpMessage, udpPort, 'your_external_ip', (err) => {
//       if (err) {
//         console.error(err);
//         message.reply('Error sending UDP packet.');
//       } else {
//         message.reply('UDP packet sent successfully.');
//       }
//     });
//   }
// });

// clientDiscord.login('MTA5MDk2OTMwMTYyMTY3ODEzMQ.GQ4943.D1GMeOT9L1KeqFzZc5B0mlqVME3e-jaxNXOeqM');
