const ytdl = require('ytdl-core');
const ytsearch = require('yt-search');

module.exports = {
    name:'play',
    description: 'Joins and plays videos',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You do not have the permissions');
        if (!permissions.has('SPEAK')) return message.channel.send('You do not have the permissions');
        if (!args.length) return message.channel.send('I do not know what you want to play')

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
        
         
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });
 
            await message.reply(`:thumbsup: Now Playing ***/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/***`)
 
            return
        }

        const connection = await voiceChannel.join();

        const VideoFinder = async(query) =>{
            const VideoResult = await ytsearch(query);

            return (VideoResult.videos.length > 1) ? VideoResult.videos[0] : null;
        
        }

        const video = await VideoFinder(args.join(' '));
        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek:0, volume:1})
            .on('finish', () => {
                voiceChannel.leave();
            });

            await message.reply(`:thumbsup: Now Playing ${video.title}`)
        } else {
            message.channel.send('No video results found');
        }



    }
}