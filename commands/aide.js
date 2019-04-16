const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
        let embed = new Discord.RichEmbed()
        .setColor('#00FB00')
        .setTitle('Aide')
        .addField('!aide', 'avoir la liste des commandes')
        .addField('!asimo', 'avoir des informations sur asimo')
        .addField('!clear', 'effacer n messages du chat')
        .addField('!ping', 'répondre pong')
        .addField('!lancer', 'lancer une pièce qui tombe sur pile ou sur face')
        .addField('!shifumi', 'le jeu du pierre feuille ciseaux')
        return msg.channel.send(embed);
}

module.exports.help = {
	name:"aide"
}