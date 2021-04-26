module.exports = {
    name: 'ban',
    description: "Bans People",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("https://i.gyazo.com/c6e72ed80839e1ac88fbfb61eacfc840.png");
        }else{
            message.channel.send('You do not have permissions to ban this person')
        }

    }
}