const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Dont click me hehe!')
        .setURL('https://dsc.gg/Duckie')
        .setAuthor('Commands are listed below!')
        .setDescription('Here are a list of my commands!')
        .setColor('YELLOW')
        .setThumbnail('')
        .setImage('https://cdn.discordapp.com/attachments/721766902426370189/849649776759930930/ChefDuckiePromote.gif')
        .setFooter('Feel free to join the support server!')
        .addFields(
            { name: '`Play`', value: ' Play A Song From Youtube.',inline: true},
            { name: '`Pause`', value: ' Pause the current song playing!'},
            { name: '`Resume`', value: ' Resume the song playing before paused!'},
            { name: '`NP`', value: ' Get now playing songs info!'},
            { name: '`Skip`', value: ' Skip to the next song in the queue!'},
            { name: '`Stop`', value: ' Stop the currently playing song!'},
            { name: '`Volume`', value: ' Change the volume of the song playing!'},
            { name: '`Queue`', value: ' Check what songs are next in queue!'},

        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "music",
    description: "Learn the music commands using this command",
    usage: "music",
    accessableby: "@everyone",
    aliases: []
}