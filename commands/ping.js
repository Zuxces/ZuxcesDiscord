  
exports.run = (client, message) => { 
    message.channel.send('Ping?').then(m => m.edit(`Roundtrip took: ${message.createdTimestamp - m.createdTimestamp}ms. Heartbeat: ${Math.round(client.ws.ping)}ms.`))
  }; 
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  module.exports.config = {
    name: "ping",
    description: "Simple Ping Pong command",
    usage: "ping",
    accessableby: "EVERYONE",
    aliases: []
}