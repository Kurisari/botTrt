module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar de nuevo ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`No hay pistas anteriores ${message.author}... intentar de nuevo ? ❌`);

        await queue.back();

        message.channel.send(`Reproduciendo la **anterior** pista ✅`);
    },
};