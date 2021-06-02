const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`Logged in as ${bot.user.username}`)
    bot.user.setActivity(";help | v3.2", {type: "PLAYING"});
}