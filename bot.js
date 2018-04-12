const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`HostingCommunity Discord Bot: Logged in as ${client.user.tag}!`);
  client.user.setGame("HostingCommunity");
});

client.on('message', msg => {
  console.log(msg.channel.guild.name + " #" + msg.channel.name + ": " + msg.author.username + ": " + msg.content);
});

client.login('');
