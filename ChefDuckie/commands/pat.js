const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent

exports.run = async (client, message, args, tools) => { //lets started your commands script
    if (!message.mentions.users.first()) return message.reply("you almost mention someone to pat them"); //if no one is mentions , lets reply as
    if (message.mentions.users.first().id === "803258495897174075") return message.channel.send('<a:yay:803572257858650123>'); //lets make a some a some funny reply |you can set a random emoji|
    const { body } = await superagent
    .get("https://nekos.life/api/pat"); 
    
    const embed = new Discord.MessageEmbed() 
    .setColor("#3bb9ff") //you can set it as you went
    .setTitle(`i see that is, ${message.author.username} patted ${message.mentions.users.first().username}`) //lets reply as whatever you put here! 
    .setImage(body.url) 
    .setFooter(`pat pat someone everyone likes pat lol`);  
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  module.exports.config = {
    name: "pat",
    description: "Pat someone hehee",
    usage: "pat",
    accessableby: "",
    aliases: []
}