const Discord = require('discord.js');
let days = 0;
let week = 0;

exports.run = (client, message, args) =>{
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let servers = client.guilds.cache.size;
    let users = client.users.cache.size;

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let serverembed = new Discord.MessageEmbed()
        .setColor("#9400D3")
        .setAuthor(`Zuoers & Zoclhas`, client.user.displayAvatarURL)
        .addField(`Version`,`1.0`, true)
        .addField(`Library`,`Discord.js` , true)
        .addField(`Creator`,`Zuoers#6666 & Zoclhas#8399`, true)
        .addField(`Servers`, `${servers}`, true)
        .addField(`Users`, `${users}`, true)
        .addField(`Invite`, `[Invite Chef Duckie](https://discordapp.com/oauth2/authorize?client_id=803258495897174075&scope=bot&permissions=26)`, true)
        .setFooter(`Uptime: ${uptime}`);

    message.channel.send(serverembed);    

}

module.exports.config = {
    name: "info",
    description: "Shows some information about the bot",
    usage: "info",
    accessableby: "@everyone",
    aliases: []
}