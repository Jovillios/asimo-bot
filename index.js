const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.tag} est connecté!`);
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.find('name', 'bienvenue').send(`Hello ${member.user.username}, bienvenue dans la guild codex !`);

})

bot.on('emojiCreate', emoji => {
    let emojiName = emoji.name;
    let date = emoji.createdAt;
    let identifiant = emoji.identifier;

    let channelEmoji = emoji.guild.channels.find('name', 'émoji');
    let embed = new Discord.RichEmbed()
    .setColor('#F417F1')
    .setTitle('Nouvel émoji créé !')
    .addField('Nom', emojiName)
    .addField('Identifiant', identifiant)
    .addField('Date', date)
    
    channelEmoji.send(embed);
    
    return;    
})

bot.on('message', msg => {
    // Ignorer les messages qui ne viennent pas de la guilde
    if(!msg.guild) return;
    // Si le message provient du bot, l'ignorer
    if(msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
    let prefix = '!';
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.splice(1);
    
    let numberMsg = 0;
    
    if(msg.content.startsWith('!ping'))
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
            return msg.channel.send('Pile !');
        }
        else {
            return msg.channel.send('Face !');
        }
    }
    
    let joueur1;
    let joueur2;
    
    if(cmd == `${prefix}shifumi`) {
        let message = '';
        msg.delete();
        numberMsg += 1;
        if(args == 'ciseaux') {
            message += '✂️ ';
        }
        else if(args == 'feuille') {
            message +='📄 ';
        }
        else if(args == 'pierre') {
            message += '💎 ';
        }
        else {
            retun msg.channel.send("Impossible, c'est seulement pierre feuille ou ciseaux");
        }
        if(numberMsg == 2) {
            return msg.channel.send(message);
        }
 
    }

    
})

bot.login(process.env.BOT_TOKEN);
