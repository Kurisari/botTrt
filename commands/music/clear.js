module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar de nuevo ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No hay música en la cola de reproducción ${message.author}... intentar de nuevo ? ❌`);

        await queue.clear();

        message.channel.send(`La cola de reproducción se ha **borrado** 🗑️`);
    },
};