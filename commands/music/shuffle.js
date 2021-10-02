module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar de nuevo ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No hay música en la cola de reproducción ${message.author}... intentar de nuevo ? ❌`);

        await queue.shuffle();

        return message.channel.send(`Lista shuffled **${queue.tracks.length}** song(s) ! ✅`);
    },
};