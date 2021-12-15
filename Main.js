//Import Discord.js
const {
  Client, MessageEmbed
} = require('discord.js');

//Import Config
const BOT = require('./Config');

this.client = new Client({ intents: parseInt(BOT.INTENTS) });

//Events
this.client.on("ready", () => {
  if(BOT.EVENTS.READY !== true) return;
  console.log([this.client.user.tag], "Online!");
  this.client.user.setPresence({ activities: [{ name: BOT.ACTIVITIES.NAME, type: BOT.ACTIVITIES.TYPE }], status: BOT.ACTIVITIES.STATUS });
});

this.client.on('messageCreate', (message) => {
  if(BOT.EVENTS.MESSAGE !== true) return;
  if(message.content.startsWith(`${BOT.PREFIX}ping`)) {
    if(BOT.COMMANDS.PING !== true) return;
    message.channel.send({ content: `Pong! 🏓\nBot : **${this.client.ws.ping}ms**\nBot Commands : **${message.createdTimestamp - Date.now()}ms**` });
  };

  if(message.content.startsWith(`${BOT.PREFIX}embed`)) {
    if(BOT.COMMANDS.EMBED !== true) return;
    message.channel.send({ embeds: [new MessageEmbed().setAuthor("Embed - Author").setColor("RANDOM").setDescription("Embed Description").setFooter("Embed Footer").setImage(this.client.user.avatarURL()).setThumbnail(message.author.avatarURL({ dynamic: true })).setTimestamp().setTitle("Embed Title").setURL("https://discord.js.org/#/docs/main/stable/general/welcome").addField("Embed Field 01", "Embed Field 02")] })
  };
});

//Login 
if(BOT.CONNECT_BOT !== true) return;
this.client.login(BOT.TOKEN);