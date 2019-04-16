const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
        let icon = bot.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
        .setColor('#FEAD00')
        .setTitle('Info Asimo')
        .addField('Nom du robot', bot.user.username)
        .addField('Spécialisation','Accueil des membres')
        .addField('Codeur', 'Jovillios')
        .setThumbnail(icon);
        return msg.channel.send(embed);
}

module.exports.help = {
	name:"asimo"
}