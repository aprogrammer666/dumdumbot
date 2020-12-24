const Discord = require('discord.js')
const client = new Discord.Client()
// const config = require('./config.json')

client.on('ready', () => {
    console.log('Hazirim kaptan!')
})

client.login(process.env.djs_token)