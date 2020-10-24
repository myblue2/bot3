const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');

exports.run = (bot, message, args) => {
    
    let gAvatar = message.guild.displayAvatarURL;
    let embed = new Discord.RichEmbed()

    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;

    embed.setTimestamp()
    embed.setTitle(`${message.guild.name}`)
    embed.setThumbnail('https://cdn.discordapp.com/emojis/646064870642679812.png?v=1')
    embed.setColor("RANDOM")
    embed.setDescription(`Algumas informações do nosso Discord **${message.guild.name}**!`)
    embed.addField(`✅ ID do servidor`,message.guild.id)
    embed.addField(`⚠️ Fundador do Servidor`, message.guild.owner, true)
    embed.addField(`🏳️ Região do Servidor`, message.guild.region, true)
    embed.addField(`🔊 Total de Canais`, message.guild.channels.size)
    embed.addField(`📅 Este Discord foi criado em`, moment(message.guild.createdAt).format('LL'))
    embed.addField(`📥 Você entrou aqui no dia`, moment(message.member.joinedAt).format('LL'))
    embed.addField(`🤖 Bots:`, message.guild.members.filter((mem) => mem.user.bot === true).size)
    embed.addField(`👩‍🦰 Membros (${message.guild.memberCount})`, `<:online:645347857351835658> Online: ${online}\n<:ocupado:645347857146314782> Ocupado: ${ocupado}\n<:ausente:645347857083400202> Ausente: ${ausente}\n<:offline:645347857481728028> Offiline: ${offline}`)
    embed.addField(`Cargos (${message.guild.roles.size - 1})`, message.guild.roles.map(a => a).join(", "))
    embed.setFooter('Rede Infinite - BOT', message.client.user.avatarURL)

    message.react('🆗');
    message.channel.sendEmbed(embed);
}

exports.help = {
    name: "serverinfo"
}