const prettyMs = require('pretty-ms');
const pusage = require('pidusage')
const RichEmbed = require("discord.js").RichEmbed;
const Attachment = require("discord.js").Attachment;
const Discord = require("discord.js");
const moment = require("moment")
const embedfooter = moment().format('h:mm:ss a') + 'EST on ' +  moment().format('MMMM Do YYYY')
const momentdate = moment().format('MMMM Do YYYY')
const momentday = moment().format('dddd')
module.exports.run = (client, message, args, data, game, announcement) => {
  var commandlock = data.lock
  if(commandlock.includes('true')) {       
    if(message.author.id !== data.ownerid) return message.channel.send('Sorry, but a command lock is in effect. Only the owner can use commands at this time.')   
  } 
  const modlog = message.guild.channels.find('name', 'mod-log');
  const announcements = message.guild.channels.find('name', 'announcements')
const total = 0;
  pusage.stat(process.pid, function (err, stat) {
    const cpuusage = parseFloat(Math.round(stat.cpu * 100) / 100).toFixed(2)
    const memusage = parseFloat(Math.round(stat.memory / 1000000 * 100) / 100).toFixed(2)
var infosembed = new Discord.RichEmbed()
    .setColor(data.embedcolor)
    .setTitle(data.name + ' Info')
    .setDescription('Please make sure to create a channel called #mod-log for mod-log support.')
    .addField('Announcement', announcement.announce, true)
    .addField('Owner', '`' + client.users.get('270375857384587264').username + '#' + client.users.get('270375857384587264').discriminator + '`', true)
    .addField('Host', '[Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)', true)
    .addField('Library', '[' + data.library + '](https://discord.js.org/)', true )
    .addField('Language', '[' + data.language + '](https://nodejs.org/)', true)
    .addField('Uptime', prettyMs(client.uptime, {verbose: true}), true)
    .addField('CPU Usage', cpuusage + '%', true)
    .addField('Memory Usage', memusage + 'MB', true)
    .addField('Invite', '[Sunset Invite](https://discordapp.com/oauth2/authorize?client_id=' + data.bot_client_id + '&scope=bot&permissions=' + data.bot_permissions + ')', true)
    .addField('Website', '[Sunset Website](https://skydevpage.weebly.com/sunset.html)',true)
    .addField('Server Count', client.guilds.size, true)
      .addField('Helpers', '@Google Drive#0831, @Bloxxer_DTC#1958, The Discord.js Discord Server', true)
    .addField('Testers', '@Corbs#9620, @Oganesson#8844, @Google Drive#0831, @Shadow The  |「Dimensions™」#5869, @Jackalope#6413, @XomberLight#3502', true)
    .addField('Version', data.newversion, true)
    .setThumbnail(client.user.displayAvatarURL)
    .setImage('https://i.imgur.com/ZfQo3rY.gif')
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setFooter(embedfooter)


    message.channel.send({embed: infosembed}).then( () => {
      pusage.unmonitor(process.pid)
    })
    var infosmlembed = new Discord.RichEmbed()
      .setColor(data.embedcolor)
      .setTitle('Info Command Used')
      .setDescription(message.author.username)
      .setAuthor(message.author.username ,message.author.avatarURL)
      .setFooter(embedfooter)
if(modlog) return modlog.send({embed: infosmlembed}).catch(console.error);
});
}
module.exports.help = {
  name: "info",
  info: "Get info on Sunset",
  usage: "info"
}