const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

// -------- LIRE COMMANDES -----------

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.lengh <= 0) {
        console.log("Commande non trouvée");
        return;
    }
    jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} chargé`);
    bot.commands.set(props.help.name, props);
    });
})

// -------- LIRE COMMANDES -----------
                                
bot.on('ready', () => {
    console.log(`${bot.user.tag} est connecté!`);
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.find('name', '🎉accueil').send(`Salutations citoyen ${member}. Mon nom est Asimo, droide de protocole.`);
})

bot.on('emojiCreate', emoji => {
    let emojiName = emoji.name;
    let date = emoji.createdAt;
    let identifiant = emoji.identifier;

    let channelEmoji = emoji.guild.channels.find('name', '😀émoji');
    let embed = new Discord.RichEmbed()
    .setColor('#F417F1')
    .setTitle('Nouvel émoji créé !')
    .addField('Nom', emojiName)
    .addField('Identifiant', identifiant)
    .addField('Date', date)
    
    channelEmoji.send(embed);
    
    return;    
})

bot.on('message', message => {
    // Si le message provient du bot, l'ignorer
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    let prefix = '!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.splice(1);

    // ----------- COMMANDES -------------

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
    
})

bot.login(process.env.BOT_TOKEN);
