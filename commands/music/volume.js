const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música en la cola de reproducción ${message.author}... intentar de nuevo ? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`El volumen actual es ${queue.volume} 🔊\n*Para cambiar el volumen, ingresa un número válido entre **1** y **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`El volumen al que deseas cambiar ya es el actual ${message.author}... intentar de nuevo ? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`El número especificado no es válido. Ingresa un número entre **1** y **${maxVol}** ${message.author}... intentar de nuevo ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `El volumen se ha modificado a **${vol}**/**${maxVol}**% 🔊` : `Algo salió mal! ${message.author}... intentar de nuevo ? ❌`);
    },
};