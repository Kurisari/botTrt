module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar de nuevo ? ❌`);

        message.author.send(`Haz guardado la pista ${queue.current.title} | ${queue.current.author} desde el servidor ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Te mandé el nombre de la pista por mensaje privado ✅`);
        }).catch(error => {
            message.channel.send(`No puedo enviarte mensaje privado ${message.author}... intentar de nuevo ? ❌`);
        });
    },
};