const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Click here to join our support server!')
        .setURL('https://discord.com/invite/FCFFpq8FEt')
        .setAuthor('')
        .setDescription('Invite me to your discord servers!')
        .setColor('YELLOW')
        .setThumbnail('')
        .setImage('')
        .setFooter('')
        .addFields(
            { name: 'Join our support server using this link! https://discord.com/invite/FCFFpq8FEt', inline: true},
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "support",
    description: "Sends link to the support server",
    usage: "support",
    accessableby: "@everyone",
    aliases: []
}