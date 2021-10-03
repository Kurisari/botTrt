let lyrics = require("findthelyrics");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lyrics",
    aliases: ['ly'],
    utilisation: '{prefix}lyrics',
    voiceChannel: false,
    async execute (client, message, args) {
        if(!args[0]) return message.reply({content: "Por favor, ingresa el nombre de una canción"});

        let find = lyrics.find(args[0], function(error,response){
            const embed = new MessageEmbed();
            embed.setColor('RED');
            embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));
            embed.setDescription(response);
            embed.setTimestamp();
            embed.setFooter('❤️', message.author.avatarURL({ dynamic: true }));

            if(!error){
                message.channel.send({ embeds: [embed] });
            } else {
                message.channel.send(error)
            }
        
        })
    }
}