module.exports = {
    name: 'gay',
    description: "this is a ping command!",
    execute(message, args){
        
        if(message.member.roles.cache.has('418517767931559936')){
            message.channel.send('shimu is the big smelly');



        } else {
    
            message.channel.send('Let me give you member role :D');
            message.member.roles.add('418517767931559936').catch(console.error);
        }

        
    }
}