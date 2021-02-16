const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')
const ytdl = require('ytdl-core')

client.on('ready', function(message) {
    const botdev = '274235277969588225'
    console.log('Hazirim kaptan!') // Bot aktif olunca konsolda bize haber veren mesaj.
    client.users.get("botdev").send("Hazırım kaptan!");
});
// 'sa' yazanlara karşılık olarak 'as' cevabını veriyor.
client.on('message', function(message) {
    if(message.content.toLowerCase === 'sa') {
        message.channel.send('as');
    }
});


command(client, 'play', (message) => {
    const music2 = message.content;
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(music2, { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
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
    });
});

command(client, 'toplusil', (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.messages.fetch().then(results => {
            console.log(results)
            message.channel.bulkDelete(results)
        });
    }
});
// ".status <input>" şeklinde botun durumunu ayarlamamızı sağlayan komut.
command(client, 'status', (message) => {
    const content = message.content.replace('.status ', '')

    client.user.setPresence({
        activity: {
            name: content,
            type: 0,

        }
    });
} )

// Hayır, tokenimi çalamazsınız ;)
client.login(process.env.djs_token)