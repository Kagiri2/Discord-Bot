module.exports = {
    name: 'kick',
    description: "Kicks People",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send('You do not have permissions to kick this person')
        }

    }
}