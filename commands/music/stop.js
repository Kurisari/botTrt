module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música en la cola de reproducción ${message.author}... intentar de nuevo ? ❌`);

        queue.destroy();

        message.channel.send(`La música se detuvo en este servidor, nos vemos la próxima vez! ✅`);
    },
};