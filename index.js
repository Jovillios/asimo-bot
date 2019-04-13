const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.tag} est connecté!`);
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.find('name', 'bienvenue').send(`Hello ${member.user.username}, bienvenue dans la guild codex !`);

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
        .addField('!ping', 'répondre Pong !')
        .addField('!asimo', 'avoir des informations sur asimo')
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
    if(cmd == `${prefix}flip`){
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
