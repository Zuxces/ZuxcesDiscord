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
            { name: '`memberinfo`', value: 'Check out someones info!',inline: true},
            { name: '`meme`', value: 'Want a funny meme? Well this command is perfect for you!'},
            { name: '`say`', value: 'Want the bot to say something? Use this command!'},
            { name: '`ping`', value: 'Simple Ping and Pong command!'},
            { name: '`embed`', value: 'Test embed command that is all that this is'},
            { name: '`wallpaper`', value: 'Want a awesome anime wallpaper? awesome!'},
            { name: '`cooldown`', value: 'Check if you are still in command cooldown!'},
            )
        
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "extra",
    description: "Some useful commands are found here!",
    usage: "extra",
    accessableby: "EVERYONE",
    aliases: []
}