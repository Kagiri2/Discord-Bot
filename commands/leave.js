module.exports = {
    name: 'leave',
    description: 'disconnects the bot',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command');
        await voiceChannel.leave();
        await message.channel.send('Succesfuly disconnected')

    }
}
    