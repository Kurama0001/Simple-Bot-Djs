module.exports = {
    TOKEN: "TokenBOT", // Bot Token https://discord.com/developers/
    PREFIX: "!", // Bot Prefix (<prefix>help)
    INTENTS: 32767, // Bot intents (Default=32767)
    CONNECT_BOT: true,
    ACTIVITIES: {
      NAME: "By Kurama#0001", // Bot activities name (Playing Discord Developer)
      TYPE: "PLAYING", // Bot type activities (PLAYING - STREAMING - LISTENING - WATCHING - CUSTOM - COMPETING)
      STATUS: "online" // Bot status (online - idle - invisible - dnd)
    },
    EVENTS: {
      READY: true,
      MESSAGE: true
    },
    COMMANDS: {
      PING: true,
      EMBED: true
    }
}