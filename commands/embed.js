const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('.')
        .setURL('')
        .setAuthor('')
        .setDescription('This is a test Description which we will see.')
        .setColor('#FF2D00')
        .setThumbnail('')
        .setImage('')
        .setFooter('')
        .addFields(
            { name: 'Test Number 1', value: 'This is a example value', inline: true},
            { name: 'Test Number 2', value: 'This is a example value', inline: true},
            { name: 'Test Number 3', value: 'This is a example value'},
            { name: 'Test Number 4', value: 'This is a example value'}
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "embed",
    accessableby: "Members",
    aliases: []
}