exports.run = (client, message) => { //from here your script is started
    let args = message.content.split(" ").slice(1); // let's check about your args and msg
    message.delete(); //The bot will delete the message you wrote , The message will become the bot which write it and not you : For bots, it requires permission MANAGE_MESSAGE
    if (args.join(" ") === "@everyone" || args.join(" ") === "@here") return message.channel.send("You aren't making me ping anyone loser!"); // Let’s see what’s going on if you want everyone
    message.channel.send(args.join(" ")); // What you write will be shown as bot 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [], // leave it empty
    permLevel: 0
};

module.exports.config = {
    name: "say",
    description: "the bot shall repeat anything you so!",
    usage: "say",
    accessableby: "MANAGE_MESSAGE",
    aliases: []
}