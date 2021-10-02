const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar de nuevo ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`El tiempo indicado es mayor que el tiempo total de la canción actual ${message.author}... intentar de nuevo ? ❌\n*Prueba, por ejemplo, un tiempo válido como ** 5s, 10s, 20 seconds, 1m** ...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Tiempo establecido en la canción actual **${ms(timeToMS, { long: true })}** ✅`);
    },
};