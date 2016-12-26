const Discord = require('discord.js');
const client = new Discord.Client();

//var api = "http://api.giphy.com/v1/gifs/search?";
//var apiKey = "&api_key=dc6zaTOxFJmzC";
//var query = "&q=rainbow";
//var text;

let prefix = "!";

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame('Merry Xmas faggots!');
});

client.login('MjYxNTg4OTEyNTg4MTkzNzky.C0CI2A.GLhrlknHCOAyF74VO3uuuk6gXi4');

client.on('message', (msg) =>{
    if(msg.content.startsWith(prefix) == false) return;

    if(msg.content.startsWith(prefix + "ping")){
        //message.reply('pong');
        msg.author.sendMessage("pong" + '\r\ntext:');
        
        console.log("Command used 'ping'");
    }

    if(msg.content.startsWith(prefix + "help")){
        msg.author.sendMessage("mafagitllosi bot commands:" + '\r\n' +
        '\r\n' + "__**help**__" + '\r\n' + "returns this page" + '\r\n' +
        '\r\n' + "__**hello**__" + '\r\n' + "returns 'You're a faggot'" + '\r\n' +
        '\r\n' + "__**faggot**__" + '\r\n' + "returns -" + '\r\n' +
        '\r\n' + "__**raid**__" + '\r\n' + "returns raid instructions" + '\r\n' +
        '\r\n' + "__**meme**__" + '\r\n' + "returns the dankest memes" + '\r\n' +
        '\r\n' + "__**request [feature]**__" + '\r\n' + "let's you request a new feature for mafagitllosi"
        );
        
        console.log(msg.author.username + " used command 'help'");
    }

    if(msg.content.startsWith(prefix + "hello")){
        msg.channel.sendMessage("You're a faggot!");
        console.log(msg.author.username + " used command 'hello'");
    }

    if(msg.content.startsWith(prefix + "faggot")){
        msg.channel.sendMessage("You mean Dreiga?");
        console.log(msg.author.username + " used command 'faggot'");
    }

    if(msg.content.startsWith(prefix + "gif")){
        msg.channel.sendMessage(text);
        console.log(msg.author.username + " used command 'gif'");
    }

    if(msg.content.startsWith(prefix + "raid")){
        msg.channel.sendMessage("Step 1: Jump from the bridge");
        msg.channel.sendMessage("Step 2: Fuck off");
        console.log(msg.author.username + " used command 'raid'");
    }

    if(msg.content.startsWith(prefix + "meme")){
        var r = randomIntInc(1, 13);
        msg.channel.sendFile('racism\\' + r.toString() + ".png", "95056.png");
        console.log(msg.author.username + " used command 'meme'");
    }

    if(msg.content.startsWith(prefix + "request")){
        //msg.channel.sendMessage(msg.content.substring(9));
        appendToFile('requests.txt', msg.content.substring(9));
        msg.channel.sendMessage("New feature request submitted succesfully!");
        console.log(msg.author.username + " used command 'request'");
    }
});

function appendToFile(filename, text) {
    fs = require('fs');
    fs.appendFile(filename, '\r\n' + text);
}
function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}