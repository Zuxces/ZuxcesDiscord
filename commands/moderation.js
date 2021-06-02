const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Dont click me hehe!')
        .setURL('https://dsc.gg/Duckie')
        .setAuthor('Commands are listed below!')
        .setDescription('Keep in mind you need moderation perms!')
        .setColor('YELLOW')
        .setThumbnail('https://cdn.discordapp.com/emojis/780476171472732180.gif?v=1')
        .setImage('https://cdn.discordapp.com/attachments/721766902426370189/849649776759930930/ChefDuckiePromote.gif')
        .setFooter('Feel free to join the support server!')
        .addFields(
            { name: '`warn`', value: 'warn a user for being naughty!',inline: true},
            { name: '`warnings`', value: 'Check someones warnings with this command! '},
            { name: '`kick`', value: 'Kick a user for having to many warnings!'},
            { name: '`ban`', value: 'Ban someone for being SUPER naughty'},
            { name: '`purge`', value: 'Need to clear some messages FAST? Use this comamand!'},
            { name: '`removerole`', value: 'Remove someones role!'},
            { name: '`addrole`', value: 'Add a role to someone!'},
            { name: '`mute`', value: 'Mute someone for being annoying!'},
            { name: '`unmute`', value: 'If someone is muted and you want to unmute someone use this!'},
            { name: '`slowmode`', value: 'Change the slowmode using this command!'},
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "moderation",
    description: "",
    usage: "moderation",
    accessableby: "EVERYONE",
    aliases: []
}