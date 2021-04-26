const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '#';
const DisTube = require('distube');
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });


const fs = require('fs');
 
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.once('ready', () =>{
    console.log('Yuuki is here!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Members');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.add('418526423263739908').send(`<@${guildMember.user.id} > https://lh3.googleusercontent.com/proxy/bgi8MNWfLy0GZAlfzgQWNa6YC_34wvMpBmynqPeCqpijYohqPq_3qTcSOUdAaex80O-ZZbUbZrEi3UaJ4To2j6Cr2lLp_71eA96jv51IKA`)

});


client.on('message', message =>{
 
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'gay'){
        client.commands.get('gay').execute(message, args);
    } else if (command == 'genshinmap'){
        client.commands.get('genshinmap').execute(message, args);
    } else if (command == 'daily'){
        client.commands.get('daily').execute(message, args);
    } else if (command == 'member'){
        client.commands.get('member').execute(message, args);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'play'){
        client.commands.get('play').execute(message, args);
    } else if (command == 'leave'){
        client.commands.get('leave').execute(message, args);
    } else if (command == 'ticket'){
        client.commands.get('ticket').execute(message, args);
    } else if (command == 'skip'){
        client.commands.get('skip').execute(message, args);
    } else if (command == 'stop'){
        client.commands.get('stop').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);

    }
 
 
});

 
 
client.login('NDE5NjI5Mzk0MzQ5MzkxODcy.WpsoUw.BW1g1nzkkZPjOs-cswdB2-A4a8I');


