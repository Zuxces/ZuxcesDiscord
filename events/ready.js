const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`Logged in as ${bot.user.username}`)
    bot.user.setActivity(";help | v1.4", {type: "WATCHING"});
}
