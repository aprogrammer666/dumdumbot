const Discord = require('discord.js')
const client = new Discord.Client()
// const config = require('./config.json')
const command = require('./commands')

client.on('ready', () => {
    console.log('Hazirim kaptan!')
})

command(client, 'ping', message=> {
    message.channel.send('Pong!')
})

client.on('message', msg=> {
    if(msg.content === 'sa') {
        msg.reply('as.');
    }
});


client.login(process.env.djs_token)