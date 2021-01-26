const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`Logged in as ${bot.user.username}`)
    bot.user.setActivity("zuoers.dev | ?help", {type: "WATCHING"});
}