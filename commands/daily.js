module.exports = {
    name: 'daily',
    description: "Genshin Impact Daily Login",
    execute(message, args){
        message.channel.send("https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481");

    }
}