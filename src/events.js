player.on('error', (queue, error) => {
    console.log(`Error emitido desde la cola ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitido por la conexión ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`Empezó a sonar ${track.title} en **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Pista ${track.title} añadida a la cola de reproducción ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Me desconectaron manualmente del canal de voz, despejando la cola de reproducción ... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nadie está en el canal de voz, saliendo del canal de voz ... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Terminé de reproducir la cola de reproducción ✅');
});