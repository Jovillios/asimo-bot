const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	let piece = Math.round(Math.random());
    if (piece == 1) {
        return msg.channel.send('Pile !');
    }
    else {
        return msg.channel.send('Face !');
    }
}

module.exports.help = {
	name:"lancer"
}