const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Dont click me hehe!')
        .setURL('https://zuoers.dev/')
        .setAuthor('Commands are listed below!')
        .setDescription('')
        .setColor('BLACK')
        .setThumbnail('')
        .setImage('')
        .setFooter('Feel free to join the support server!')
        .addFields(
            { name: '`Help` 🆘', value: '**You are are currently looking at this command!**',inline: true},
            { name: '`Moderation` 🔨', value: '**Want to punish someone? Perfect use this command to find out me hehe**'},
            { name: '`Actions` 😊', value: '**Lists all action commands such as Pat and more!**'},
            { name: '`Music` 🎵', value: '__**Coming Soon!**__'},
            { name: '`extra` 🙌', value: '**Useful commands such as memberinfo or serverinfo and much more!**'},
            )
        
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "help",
    accessableby: "Members",
    aliases: []
}