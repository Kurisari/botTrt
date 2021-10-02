module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar de nuevo ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Música actual ${queue.current.title} reanudada ✅` : `Algo salió mal! ${message.author}... intentar de nuevo ? ❌`);
    },
};