const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.tag} est connecté!`);
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.find('name', 'bienvenue').send(`Hello ${member.user.username}, bienvenue dans la guild codex !`);

})

bot.on('emojiCreate', emoji => {
    let authorUser = emoji.fetchAuthor();
    let emojiName = emoji.name;
    let authorName = authorUser.username;
    let date = emoji.createdAt;
    let channelEmoji = emoji.guild.channels.find('name', 'émoji');
    let embed = new Discord.RichEmbed()
    .setColor('#F417F1')
    .setTitle('Nouvel émoji créé')
    .setField('Nom', emojiName)
    .setField('Auteur', authorName)
    .setField('Date', date)
    
    channelEmoji.send(embed);
    
    return;    
})

bot.on('message', msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
    let prefix = '!';
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.splice(1);
    if(cmd === `${prefix}ping`)
    {
        return msg.channel.send('Pong !');
    }
    if(cmd === `${prefix}aide`)
    {
        let embed = new Discord.RichEmbed()
        .setColor('#00FB00')
        .setTitle('Aide')
        .addField('!aide', 'avoir la liste des commandes')
        .addField('!asimo', 'avoir des informations sur asimo')
        .addField('!ping', 'répondre pong')
        .addField('!lancer', 'lancer une pièce qui tombe sur pile ou sur face')
        return msg.channel.send(embed);
    }
    if(cmd === `${prefix}asimo`)
    {
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
    if(cmd == `${prefix}lancer`){
        let piece = Math.round(Math.random());
        if (piece == 1) {
            return msg.channel.send('Pile !')
        }
        else {
            return msg.channel.send('Face !')
        }
    }

    
})

bot.login(process.env.BOT_TOKEN);
