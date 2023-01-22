const Eris = require("eris");
const BOTTOKEN = require('./config.json').token;
const bot = new Eris(BOTTOKEN);
bot.on("ready", () => {
  console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
  if(msg.content === "!ping") {
    bot.createMessage(msg.channel.id, "Pong!");
    
  }
  if(msg.content === "!pong") {
    bot.createMessage(msg.channel.id, "ping!")
  }
});
bot.connect();