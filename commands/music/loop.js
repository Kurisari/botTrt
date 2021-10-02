const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar de nuevo ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Primero tienes que deshabilitar la música actual en el modo loop (${client.config.app.px}loop) ${message.author}... intentar de nuevo ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo loop **${queue.repeatMode === 0 ? 'deshabilitado' : 'habilitado'}** la cola de reproducción se repetirá sin parar 🔁` : `Algo salió mal! ${message.author}... intentar de nuevo ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Primero tienes que deshabilitar la música actual en el modo loop (${client.config.app.px}loop queue) ${message.author}... intentar de nuevo ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo loop **${queue.repeatMode === 0 ? 'deshabilitado' : 'habilitado'}** la cola de reproducción se repetirá sin parar (puedes recorrer la cola de reproducción con la opción <queue>) 🔂` : `Algo salió mal! ${message.author}... intentar de nuevo ? ❌`);
        };
    },
};