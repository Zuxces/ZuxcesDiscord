const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Invite Link below! Or just click me!')
        .setURL('https://dsc.gg/chefduckie')
        .setAuthor('')
        .setDescription('')
        .setColor('YELLOW')
        .setThumbnail('')
        .setImage('')
        .setFooter('')
        .addFields(
            { name: 'Use this link to invite Chef Duckie!', value: 'https://dsc.gg/chefduckie', inline: true},
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    description: "Invite Chef Duckie",
    usage: "invite",
    accessableby: "Members",
    aliases: []
}