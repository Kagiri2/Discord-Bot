module.exports = {
    name: 'member',
    description: "Subscribe to Kagiri",
    execute(message, args){
        message.channel.send("Loading...", { embed });
    }
  }
  
  const embed = {
    "title": "Rules",
    "description": "Hello",
    "color": 11219587,
    "footer": {
      "icon_url": "https://media.tenor.com/images/331b9cd0d1e3ed6a8f64c68abff81ec6/tenor.gif",
      "text": "Kagiri"
    },
    "image": {
      "url": "https://lh3.googleusercontent.com/OgzH209m8cemb8XZbXpmyVv5iGljuIceUvNAJPxAVO6ftqbVkw3LujRGAinEigFoSep02g=s85"
    },
    "fields": [
      {
        "name": "https://www.youtube.com/channel/UC_do58vBpfvNfORLYtatkqg",
        "value": "Subscribe and Like all my videos"
      }
    ]
  };
