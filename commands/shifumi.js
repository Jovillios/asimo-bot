const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
        msg.delete();
        if(args == 'ciseaux') {
            return msg.channel.send('✂️');
        }
        else if(args == 'feuille') {
            return msg.channel.send('📄');
        }
        else if(args == 'pierre') {
            return msg.channel.send('💎');
        }
        else {
            return msg.channel.send("Impossible, c'est seulement pierre feuille ou ciseaux");
        }
}

module.exports.help = {
	name:"shifumi"
}