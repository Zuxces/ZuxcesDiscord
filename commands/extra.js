const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Dont click me hehe!')
        .setURL('https://dsc.gg/Duckie')
        .setAuthor('Commands are listed below!')
        .setDescription('')
        .setColor('YELLOW')
        .setThumbnail('')
        .setImage('https://cdn.discordapp.com/attachments/721766902426370189/849649776759930930/ChefDuckiePromote.gif')
        .setFooter('Feel free to join the support server!')
        .addFields(
            { name: '`memberinfo`', value: 'Check out someones info!',inline: true},
            { name: '`meme`', value: 'Want a funny meme? Well this command is perfect for you!'},
            { name: '`say`', value: 'Want the bot to say something? Use this command!'},
            { name: '`ping`', value: 'Simple Ping and Pong command!'},
            { name: '`embed`', value: 'Test embed command that is all that this is'},
            { name: '`wallpaper`', value: 'Want a awesome anime wallpaper? awesome!'},
            { name: '`cooldown`', value: 'Check if you are still in command cooldown!'},
            { name: '`serverinfo`', value: 'Check some informaion about the server you are currently in!'},
            { name: '`serverinvite`', value: 'Sends a invite link to a specific channel!'},
            { name: '`Support`', value: 'Sends a link to the support server!'},
            { name: '`setafk`', value: 'Use this if you are planning on going AFK inside a server.'},
            { name: '`uptime`', value: 'Check how long the discord bot has been up for!'},
            { name: '`info`', value: 'Sends informaion about Chef Duckie! Such as, member count, server count and uptime!'},
            )
        
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "extra",
    description: "Some useful commands are found here!",
    usage: "extra",
    accessableby: "@everyone",
    aliases: []
}