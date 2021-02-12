const Discord = require('discord.js')
const client = new Discord.Client()
// const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('Hazirim kaptan!')
})

command(client, 'ping', (message) => {
    message.channel.send('Pong!')
})

command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
        message.channel.send(
            `${guild.name} toplamda ${guild.memberCount} üyeye sahip.`
        )
    })
})


client.login(process.env.djs_token)