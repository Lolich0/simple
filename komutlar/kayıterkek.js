const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  member.setNickname(`${isim}`);
  member.removeRole('👥|• NÁTİON.☦')
  member.addRole('🤵|• MÂTE.☦')
const embed = new Discord.RichEmbed()

   .addField(`** VФЯΓΞЖ REGİSTER ** `,
   `\n**Kayıt Olundu! Kayıt Edilen Kullanıcı :
};             
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick", "isim"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "ArdaDemr Kayıt Sistemi",
  usage: "ArdaDemr Kayıt Sistemi"
};