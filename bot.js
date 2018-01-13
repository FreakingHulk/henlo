const discord = require('discord.js')
const bot = new discord.Client()
bot.login(process.env.tok)

bot.on("ready", () => {
   bot.user.setGame("HENLO")
})

bot.on("message", message => {
  if (message.content == "henlo") {
    message.channel.send("henlo")
  }
})
