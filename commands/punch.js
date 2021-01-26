  
exports.run = (client, message) => { 
    var owner = "714633360256925756" 
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('wait person, You must mention someone to punch them. loser')
          if(user.id === owner){
            return message.reply("You can't hurt him you they are to ADVANCED."); 
    }else{
            message.reply('You have punched <@' + user.id + '>') 
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  module.exports.config = {
    name: "punch",
    description: "Is someone being annoying? then smack them using this command!",
    usage: "punch",
    accessableby: "",
    aliases: []
}