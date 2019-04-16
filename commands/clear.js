const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.replay("Nope");
	if(!args[0]) return message.replay("Nope");
	message.channel.bulkDelete(args[0]).then(() => {
		message.channel.send(`Pouf !, ${args[0]} messages effacés.`).then(msg => {msg.delete(5000)})
	})
}

module.exports.help = {
	name:"clear"
}