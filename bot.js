const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')
const ytdl = require('ytdl-core')


////////////////////////////////////////////////////////////////
// Made by minato#1337                                        //
// Github: https://github.com/aprogrammer666                  //
// Steam: https://steamcommunity.com/id/professorgrizwald666/ //
// I'll also make a website-managed version.                  //
////////////////////////////////////////////////////////////////


client.on('ready', function(message) {
    console.log('Hazirim kaptan!') // Bot aktif olunca konsolda bize haber veren mesaj.
});
// 'sa' yazanlara karşılık olarak 'as' cevabını veriyor.
client.on('message', function(message) {
    if(message.content.toLowerCase === 'sa') {
        message.channel.send('as');
    }
});

/*  
    command(client, 'love', message => {
      const args = message.content.slice(prefix.length).trim().split(' ');
      const command = args.shift().toLowerCase();
      if (!args[2]) return message.reply('.love kisi1 kisi2 | Şeklinde kullanabilirsiniz.');
      var rnumber = Math.floor(Math.random() * 100) + 1;
      message.channel.send()
})
*/

// .ping >> Pong!   | Klasik.
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

// Yazılan kanaldaki silinebilen bütün mesajları siler. (Botlar 14 günden eski mesajları silemez.)
command(client, 'toplusil', (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.messages.fetch().then(results => {
            message.channel.bulkDelete(results)
            message.channel.send('Bu kanaldaki silebildiğim bütün mesajlar başarıyla silindi!')
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
})

// .duyuru <mesaj> || Adminlerin sunucuda duyuru yapabilmesini sağlayan bir komut.
command(client, 'duyuru', (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        let embedDuyuru = message.content.substring(9);
        let embed = new Discord.MessageEmbed();
        message.channel.send(embed);
    } else {
        message.reply('Bu komudu sadece adminler kullanabilir.');
    }
})


// Hayır, tokenimi çalamazsınız ;)
client.login(process.env.djs_token)