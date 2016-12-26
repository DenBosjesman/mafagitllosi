const Discord = require('discord.js');
const client = new Discord.Client();

var giphy = require('giphy-wrapper')('dc6zaTOxFJmzC');

let prefix = "!";

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame('Merry Xmas fags <3');
});

client.login('MjYxNDg4MzQ5MzU1ODM1Mzkz.Cz3wvA.uudmogbsWWu5XRo52lmlZpSYWzU');

client.on('message', (msg) =>{
    if(msg.content.startsWith(prefix) == false) return;

    if(msg.content.startsWith(prefix + "ping")){
        //message.reply('pong');
        msg.channel.sendMessage("pong");
        
        console.log(msg.author.username + " used command 'ping'");
    }

    if(msg.content.startsWith(prefix + "help")){
        msg.author.sendMessage("mafagitllosi bot commands:" + '\r\n' +
        '\r\n' + "__**help**__" + '\r\n' + "returns this page" + '\r\n' +
        '\r\n' + "__**hello**__" + '\r\n' + "returns 'You're a faggot'" + '\r\n' +
        '\r\n' + "__**faggot**__" + '\r\n' + "returns -" + '\r\n' +
        '\r\n' + "__**raid**__" + '\r\n' + "returns raid instructions" + '\r\n' +
        '\r\n' + "__**meme**__" + '\r\n' + "returns the dankest memes" + '\r\n' +
        '\r\n' + "__**bosjesman**__" + '\r\n' + "returns a bosjesman" + '\r\n' +
        '\r\n' + "__**request [feature]**__" + '\r\n' + "let's you request a new feature for mafagitllosi"
        );
        
        console.log(msg.author.username + " used command 'help'");
    }

    if(msg.content.startsWith(prefix + "hello")){
        msg.channel.sendMessage("You're a faggot!");
        console.log(msg.author.username + " used command 'hello'");
    }

    if(msg.content.startsWith(prefix + "faggot") || msg.content.startsWith(prefix + "faggit")){
        msg.channel.sendMessage("You mean Dreiga?");
        console.log(msg.author.username + " used command 'faggot'");
    }

    if(msg.content.startsWith(prefix + "raid")){
        msg.channel.sendMessage("Step 1: Jump from the bridge");
        msg.channel.sendMessage("Step 2: Fuck off");
        console.log(msg.author.username + " used command 'raid'");
    }

    if(msg.content.startsWith(prefix + "meme")){
        var r = randomIntInc(1, 13);
        msg.channel.sendFile('racism\\' + r.toString() + ".png");
        console.log(msg.author.username + " used command 'meme'");
    }

    if(msg.content.startsWith(prefix + "bosjesman")){
        var r = randomIntInc(1, 20);
        msg.channel.sendFile('bushmen\\' + r.toString() + ".jpg");
        console.log(msg.author.username + " used command 'bosjesman'");
    }

    if(msg.content.startsWith(prefix + "gif")){
        msg.channel.sendMessage("This is a gif!");
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