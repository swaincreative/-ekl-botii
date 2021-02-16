const Discord = require('discord.js')//ghost creative
const moment = require('moment')//ghost creative
const db = require('quick.db')//ghost creative
const ayarlar = require('../ayarlar.json')//ghost creative
const client = new Discord.Client();//ghost creative
require("moment-duration-format");//ghost creative
const prefix = ayarlar.prefix//ghost creative
exports.run = async (bot, msg, args) => {//ghost creative

        const çekiliş = new Discord.MessageEmbed()//ghost creative
                .setColor('GOLD')//ghost creative
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)//ghost creative
        .setAuthor('Ghost Creative Giveaways Bot Çekiliş Menüsü')//ghost creative
        .setThumbnail('https://cdn.discordapp.com/attachments/797488386746220584/797489886374264842/wynex_sunucu_gif.gif')//ghost creative
        .setDescription('Botu Davet Etmek İçin `g!davet` yazabilirisiniz.',false)//ghost creative
        .addField('**__Çekliş Başlat__**',' `g!çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )//ghost creative
        .addField('**__Çekiliş Yenile__**','  `g!çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)//ghost creative
        .addField('**__Çekiliş Liste__**',' `g!çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)//ghost creative
        .addField('**__Çekiliş Bitir__**', '`g!çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)//ghost creative
        .addField('**__Bilgilendirme__**', '  `g!davet` | Botu Sununuya Davet Edersiniz \n `-botbilgi` | Botun İslatistiklerini Görürsünüz \n  `-sunucu` | Sunucuya Özel Komutlar',true)
  
msg.channel.send(çekiliş)//ghost creative
    
}
exports.conf = {//ghost creative
  enabled: true,//ghost creative
  guildOnly: true,//ghost creative
 aliases: ['çekiliş', 'giveawey'],//ghost creative
  kategori: 'yardım',//ghost creative
  permLevel: 0//ghost creative
};
exports.help = {
  name: 'yardım',//ghost creative
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yardım'
};