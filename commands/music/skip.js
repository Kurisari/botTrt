module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar de nuevo ? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Música actual ${queue.current.title} skipped ✅` : `Algo salió mal! ${message.author}... intentar de nuevo ? ❌`);
    },
};