const Discord = require('discord.js')
const client = new Discord.Client()
// const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('Hazirim kaptan!') // Bot aktif olunca konsolda bize haber veren mesaj.
})
client.on('message', function(message) {
    message.channel.send(message)
})


  // .ping >> Pong!   | Made for test purposes.  
  command(client, 'ping', (message) => {
      message.channel.send('Pong!') 
  })
  // Botun dahil olduğu sunucular ve o sunuculardaki üye sayıları hakkında bilgi verir.
  command(client, 'botbilgisi', (message) => {
      message.channel.send('**Şu sunucularda bulunuyorum**')
      client.guilds.cache.forEach((guild) => {     
          message.channel.send(
              `>> ${guild.name} toplamda ${guild.memberCount} üyeye sahip.`
          )
      })
  })
  
  command(client, 'toplusil', (message) => {
      if (message.member.hasPermission('ADMINISTRATOR')) {
          message.channel.messages.fetch().then(results => {
              console.log(results)
              message.channel.bulkDelete(results)
          })
      }
  })
  // ".status <input>" şeklinde botun durumunu ayarlamamızı sağlayan komut.
  command(client, 'status', (message) => {
      const content = message.content.replace('.status ', '')
  
      client.user.setPresence({
          activity: {
              name: content,
              type: 0,
  
          }
      })
  } )


client.login(process.env.djs_token)