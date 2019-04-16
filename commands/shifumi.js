const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
        message.delete();
        if(args == 'ciseaux') {
            return message.channel.send('✂️');
        }
        else if(args == 'feuille') {
            return message.channel.send('📄');
        }
        else if(args == 'pierre') {
            return message.channel.send('💎');
        }
        else {
            return message.channel.send("Impossible, c'est seulement pierre feuille ou ciseaux");
        }
}

module.exports.help = {
	name:"shifumi"
}