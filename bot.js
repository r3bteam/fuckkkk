const Discord = require("discord.js");
const client = new Discord.Client();
const dateFormat = require('dateformat');
const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const fs = require('fs');
const moment = require('moment');
 
 
client.on('message',message =>{
  var prefix = "+";
  if(message.content.startsWith(prefix + 'top')) {
message.guild.fetchInvites().then(i =>{
var invites = [];
 
i.forEach(inv =>{
  var [invs,i]=[{},null];
   
  if(inv.maxUses){
      invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
  }else{
      invs[inv.code] =+ inv.uses;
  }
      invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
 
});
var embed = new Discord.RichEmbed()
.setColor("#000000")
.setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
.setThumbnail("https://i.imgur.com/GnR2unD.png")
         message.channel.send({ embed: embed });
 
});
 
  }
});
 
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 
client.on('message', msg =>{
  if(msg.author == client.user)return;
  if(!msg.guild) return;
  if(!msg.guild.roles.find(r => r.name == "muted")) return;
  if(!users[msg.author.id]) users[msg.author.id] = {sp:0};
  var user = users[msg.author.id]
  users[msg.author.id].sp++;
  setTimeout(()=>{
  users[msg.author.id].sp =0;
  },3000)
  if(user.sp >= 3){
          users[msg.author.id].sp  =0
      msg.guild.member(msg.author).addRole(msg.guild.roles.find(r => r.name == "muted"))
      msg.channel.fetchMessages({limit: 5}).then(messages => msg.channel.bulkDelete(messages)).catch(console.error);
      msg.reply(`Stop Spam -_-`);
       
return;
  }
});
 
    client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'mutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(true);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });
  client.on('message', message => {
    var prefix = "+";
    if(message.content.startsWith(prefix + 'unmutevoice')) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
       
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to mute.");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.reply("Try again.");
    }
    muteMember.setMute(false);
    if(muteMember) {
      message.channel.sendMessage("User muted successfully.");
    }
  }
});
 
 
const adminprefix = "+";
const devs = ['234454368072630283'];
 
client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/Procfile");
        console.log(`تم اعادة تشغيل البوت`);
    }
   
  });
 
 
  client.on(`guildCreate`, guild => {
    if(guild.memberCount < `25`) {
    guild.leave()
    }
    });
 
    client.on('message', message => {
        if(!message.channel.guild) return;
        var prefix = "+";
    if(message.content.startsWith(prefix + 'move')) {
        var cmdrole = message.guild.roles.find("name", config.cmdrole)
           if (message.member.hasPermission("MOVE_MEMBERS")) {
if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**I Don't Have `MOVE_MEMBERS` Permission**").then(msg => msg.delete(6000))
                  if (message.mentions.users.size === 0) {
                         return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
                  }
                  if (message.member.voiceChannel != null) {
                         if (message.mentions.members.first().voiceChannel != null) {
                                var authorchannel = message.member.voiceChannelID;
                                var usermentioned = message.mentions.members.first().id;
                               var embed = new Discord.RichEmbed()
                                  .setTitle("Succes!")
                                  .setColor("#000000")
                                  .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
                                var embed = new Discord.RichEmbed()
                                  .setTitle(`You are Moved in ${message.guild.name}`)
                                  .setColor("#000000")
                                  .setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
                                                              message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                                message.guild.members.get(usermentioned).send(embed)
                         } else {
                                message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
                         }
                  } else {
                         message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
                  }
           } else {
                  message.react("❌")
           }
        }
        });
 
client.on('message', message => {
  id = client.user.id;
  guild = message.guild;
  emojiHasPermission = permission => {
    console.log(permission);
    if (guild.member(id).permissions.has(permission, false)) {
      return ':white_check_mark:';
    } else {
      return ':x:';
    }
  };
  if (message.content === '+per') {
  message.channel.send({embed: {
    title: ':tools: Permissions',
    color: 0x06DF00,
    fields: [
      {
 
        name: 'Administrator :',
        value: emojiHasPermission('ADMINISTRATOR'),
        inline: true
      },
      {
        name: 'Create Instant Invite :',
        value: emojiHasPermission('CREATE_INSTANT_INVITE'),
        inline: true
      },
      {
        name: 'Kick Members :',
        value: emojiHasPermission('KICK_MEMBERS'),
        inline: true
      },
      {
        name: 'Ban Members :',
        value: emojiHasPermission('BAN_MEMBERS'),
        inline: true
      },
      {
        name: 'Manage Channels :',
        value: emojiHasPermission('MANAGE_CHANNELS'),
        inline: true
      },
      {
        name: 'Manage Guild :',
        value: emojiHasPermission('MANAGE_GUILD'),
        inline: true
      },
      {
        name: 'Add Reactions :',
        value: emojiHasPermission('ADD_REACTIONS'),
        inline: true
      },
      {
        name: 'View Audit Log :',
        value: emojiHasPermission('VIEW_AUDIT_LOG'),
        inline: true
      },
      {
 
        name: 'Manage Messages :',
        value: emojiHasPermission('MANAGE_MESSAGES'),
        inline: true
      },
      {
        name: 'Embed Links :',
        value: emojiHasPermission('EMBED_LINKS'),
        inline: true
      },
      {
        name: 'Attach Files :',
        value: emojiHasPermission('ATTACH_FILES'),
        inline: true
      },
      {
        name: 'Read Message History :',
        value: emojiHasPermission('READ_MESSAGE_HISTORY'),
        inline: true
      },
      {
        name: 'Mention Everyone :',
        value: emojiHasPermission('MENTION_EVERYONE'),
        inline: true
      },
      {
        name: 'Use External Emojis :',
        value: emojiHasPermission('USE_EXTERNAL_EMOJIS'),
        inline: true
      },
      {
        name: 'Connect :',
        value: emojiHasPermission('CONNECT'),
        inline: true
      },
      {
        name: 'Speak :',
        value: emojiHasPermission('SPEAK'),
        inline: true
      },
      {
 
        name: 'Mute Members :',
        value: emojiHasPermission('MUTE_MEMBERS'),
        inline: true
      },
      {
        name: 'Deafen Members :',
        value: emojiHasPermission('DEAFEN_MEMBERS'),
        inline: true
      },
      {
        name: 'Move Members :',
        value: emojiHasPermission('MOVE_MEMBERS'),
        inline: true
      },
      {
        name: 'Use VAD :',
        value: emojiHasPermission('USE_VAD'),
        inline: true
      },
      {
        name: 'Change Nickname :',
        value: emojiHasPermission('CHANGE_NICKNAME'),
        inline: true
      },
      {
        name: 'Manage Nicknames :',
        value: emojiHasPermission('MANAGE_NICKNAMES'),
        inline: true
      },
      {
        name: 'Manage Roles :',
        value: emojiHasPermission('MANAGE_ROLES'),
        inline: true
      },
      {
        name: 'Manage Webhooks :',
        value: emojiHasPermission('MANAGE_WEBHOOKS'),
        inline: true
      },
      {
        name: 'Manage Emojis :',
        value: emojiHasPermission('MANAGE_EMOJIS'),
        inline: true
      }
    ]
  }
  });
  }
});
 
         client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "+";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)
 
                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}
 
});
client.on("message", message => {
    var prefix = "+";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix +"clear")) {
                if (!message.member.hasPermission("MANAGE_CHANNELS"))  return message.reply("**للأسف ليس لديك صلاحية `MANAGE_CHANNELS` Permission**");
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**للأسف البوت يحتاج صلاحية`MANAGE_CHANNELS`**");
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("clear <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("2000");
                                message.channel.sendEmbed(embed4) .then(msg => msg.delete(2000));
                            }
                          }
});
    client.on("guildCreate", guild => {
        client.channels.get("427613133826162698").send(`**Dragon** has been **added** :white_check_mark: from this server **(${guild.name})** , Server Owner 👑 **(${guild.owner.user.username})**`)
        });
         
        client.on("guildDelete", guild => {
        client.channels.get("427613133826162698").send(`**Dragon** has been **removed** :x: from this server **(${guild.name})** , Server Owner 👑 **(${guild.owner.user.username})**`)
        });    
        client.on('guildCreate', guild => {
            var embed = new Discord.RichEmbed()
            .setColor(0x5500ff)
            .setDescription(`** شكراّ على وثوقك في بوت دراجون واتمنى أن ينال اعجابكك  | :white_check_mark: **`)
                guild.owner.send(embed)
          });
     
          client.on('guildDelete', guild => {
            var embed = new Discord.RichEmbed()
            .setColor(0x5500ff)
            .setDescription(`**نتمى انكم استمتعتم  البوت :100: **`)
                guild.owner.send(embed)
          });
 
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const discord_token = process.env.BOT_TOKEN;
client.login(discord_token);
client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
    client.user.setGame(prefix + 'مساعدة || Moha');
});
 
   client.on('message', message => {
    if (message.content.startsWith("+bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Stats Bot / Info ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
            .setFooter('Dragon')
    })
}
});
 
 
function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
 
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
*/
client.on('ready', () => {});
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
 
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
 
client.on('message', function(message) {
var prefix = "+";
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');
 
    if (mess.startsWith(prefix + 'شغل')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
                .setDescription('**قم بإدراج رابط او اسم الأغنيه**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
                          ${videoInfo.title}
                          **`)
                        .setColor("RANDOM")
                        .setFooter('|| ' + message.author.tag)
                        .setThumbnail(videoInfo.thumbnailUrl)
                    message.channel.sendEmbed(play_info);
                    queueNames.push(videoInfo.title);
                    now_playing.push(videoInfo.title);
 
                });
            });
        }
        else {
 
            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('||**__تم تشغيل __**', `**${videoInfo.title}
                              **`)
                        .setColor("RANDOM")
                        .addField(`__من قبل__: ${message.author.username}`, `**By Moha**`)
                        .setThumbnail(videoInfo.thumbnailUrl)
                             
                    // .setDescription('?')
                    message.channel.sendEmbed(play_info)
                    message.channel.send(`__تم التشغيل__
                            **${videoInfo.title}** __اسم الأغنية__
              ${message.author.username}         __بواسطة__ `)
                    // client.user.setGame(videoInfo.title,'https://www.twitch.tv/Moha');
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'تخطي')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send(':ok:').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        });
    }
    else if (message.content.startsWith(prefix + 'صوت')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // console.log(args)
        if (args > 999999999) return message.channel.send('1 - 999999999 || **__لا أكثر ولا أقل__**')
        if (args < 1) return message.channel.send('1 - 999999999 || **__لا أكثر ولا أقل__**')
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`**__ ${dispatcher.volume*50}% مستوى الصوت __**`);
    }
    else if (mess.startsWith(prefix + 'وقف')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send(':ok:').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'كمل')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
            message.channel.send(':ok:').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'اطلع')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send(':ok:');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'تعال')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.member.voiceChannel.join().then(message.channel.send(':ok:'));
    }
    else if (mess.startsWith(prefix + 'شغل')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        if (isPlaying == false) return message.channel.send(':anger: || **__تم التوقيف__**');
        let playing_now_info = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
                  ${videoInfo.title}
                  **`)
            .setColor("RANDOM")
            .setFooter('طلب بواسطة: ' + message.author.tag)
            .setThumbnail(videoInfo.thumbnailUrl)
        //.setDescription('?')
        message.channel.sendEmbed(playing_now_info);
    }
});
 
function skip_song(message) {
    if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
    dispatcher.end();
}
 
function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;
 
 
    voiceChannel.join().then(function(connectoin) {
        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];
 
        dispatcher = connectoin.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            }
            else {
                setTimeout(function() {
                    playMusic(queue[0], message);
                }, 500);
            }
        });
    });
}
 
function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYoutubeID(str));
    }
    else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}
 
function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYoutubeID(strID));
    }
    else {
        queue.push(strID);
    }
}
 
function search_video(query, cb) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
    });
}
 
 
function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;
}
 client.on('message', message => {
var prefix = "ppp";
     if (message.content === prefix +"sss") {
    const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`**__أوامر اغاني بوت دراجون__**`,`
.    **${prefix}تعال**
     عشان يدخل البوت الروم
     **${prefix}شغل**
     امر تشغيل الأغنية , !شغل الرابط او اسم الأعنية
     **${prefix}تخطي**
     تغير الأغنية
     **${prefix}وقف**
     ايقاف الأغنية
     **${prefix}كمل**
     مواصلة الأغنية
     **${prefix}صوت**
     مستوى الصوت 1-999999999
     **${prefix}اطلع**
     خروج البوت من الروم
      
      
     prefix = ${prefix}
     ping = ${Date.now() - message.createdTimestamp}ms
     for help = <@!2344543680726302839> 
     By Moha     `)
 
      message.channel.send({embed});
     }
    });
 
client.on('ready',  () => {
    console.log('تم تشغيل :dragon  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });
 
    client.on('message', message => {
        if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+moha')){
if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
 
  
 
client.on('ready', function(){
    var ms = 60000 ;
    var setGame = [,'+help| 350 Guilds','+help|+invite','+help| 350 Guilds','+help','+help|+invite ','By Moha','+help| 350 Guilds','+help','+help|+invite','+help|+invite','+help| 350 Guilds',];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/Dragon`);
    }, ms);
 
});
 
client.on("message", message => {
    var prefix = "+";
    const command = message.content.split(" ")[0];
 
    if(command == prefix+"voicekick"){
 
        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }
 
        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }
 
    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
 message.reply(' has been successfullly kicked from voice.');
     
      });
     });
    }
});
    
client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "+";
if(message.content.startsWith(prefix + 'channel')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("Channel Info")
      .setColor("#9932CC")
      .setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("Created At", `${channel.createdAt}`)
      .addField("Channel Type", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });
 
 client.on('message', message => {
var prefix = "+";
     if (message.content === prefix +"help") {
    const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setDescription(`
     ╭━━━┳━━━┳━━╮╱╭━━━━┳━━━┳━━━┳━╮╭━╮
     ┃╭━╮┃╭━╮┃╭╮┃╱┃╭╮╭╮┃╭━━┫╭━╮┃┃╰╯┃┃
     ┃╰━╯┣╯╭╯┃╰╯╰╮╰╯┃┃╰┫╰━━┫┃╱┃┃╭╮╭╮┃
     ┃╭╮╭╋╮╰╮┃╭━╮┃╱╱┃┃╱┃╭━━┫╰━╯┃┃┃┃┃┃
     ┃┃┃╰┫╰━╯┃╰━╯┃╱╱┃┃╱┃╰━━┫╭━╮┃┃┃┃┃┃
     ╰╯╰━┻━━━┻━━━╯╱╱╰╯╱╰━━━┻╯╱╰┻╯╰╯╰╯
     
═══════════ஜ۩۞۩ஜ════════════
 
يرجى استخدام الأوامر التالية :
 
**+help-public**
 
:earth_americas:لمعرفة كافة أوامر العامة:earth_americas:
 
**+help-admin**
 
👑لمعرفة أوامر الأدارية👑
 
**+help-games**
 
🎮لمعرفة أوامر الالعاب🎮


═══════════ஜ۩۞۩ஜ════════════`)
      message.channel.send({embed});
     }
    });
 
 
 
 
client.on("message", message => {
 if (message.content === "+help-games") {
        message.react("✅")
           message.react("📬")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setDescription(`
      ╭━━━┳━━━┳━━╮╱╭━━━━┳━━━┳━━━┳━╮╭━╮
      ┃╭━╮┃╭━╮┃╭╮┃╱┃╭╮╭╮┃╭━━┫╭━╮┃┃╰╯┃┃
      ┃╰━╯┣╯╭╯┃╰╯╰╮╰╯┃┃╰┫╰━━┫┃╱┃┃╭╮╭╮┃
      ┃╭╮╭╋╮╰╮┃╭━╮┃╱╱┃┃╱┃╭━━┫╰━╯┃┃┃┃┃┃
      ┃┃┃╰┫╰━╯┃╰━╯┃╱╱┃┃╱┃╰━━┫╭━╮┃┃┃┃┃┃
      ╰╯╰━┻━━━┻━━━╯╱╱╰╯╱╰━━━┻╯╱╰┻╯╰╯╰╯
      
     🎮「العاب」🎮
 
   🎮+كت تويت
 
   🎮+لو خيروك
    
   🎮+عواصم
 
   🎮+فكك 
 
   🎮+رياضيات
 
   🎮+لغز
 
   🎮+خواطر 
 
   🎮+صراحه
 
   🎮+animal
 

 `)
 
   message.author.sendEmbed(embed)
    
   }
   }); 
client.on("message", message => {
 if (message.content === "+help-admin") {
        message.react("✅")
           message.react("📬")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setDescription(`
      ╭━━━┳━━━┳━━╮╱╭━━━━┳━━━┳━━━┳━╮╭━╮
      ┃╭━╮┃╭━╮┃╭╮┃╱┃╭╮╭╮┃╭━━┫╭━╮┃┃╰╯┃┃
      ┃╰━╯┣╯╭╯┃╰╯╰╮╰╯┃┃╰┫╰━━┫┃╱┃┃╭╮╭╮┃
      ┃╭╮╭╋╮╰╮┃╭━╮┃╱╱┃┃╱┃╭━━┫╰━╯┃┃┃┃┃┃
      ┃┃┃╰┫╰━╯┃╰━╯┃╱╱┃┃╱┃╰━━┫╭━╮┃┃┃┃┃┃
      ╰╯╰━┻━━━┻━━━╯╱╱╰╯╱╰━━━┻╯╱╰┻╯╰╯╰╯
      
   👑「اوامر ادارية」👑
    
   👑+bc 「للبرودكاست بأميد」
 
   👑+bc2 「للبرودكاست بدون أميد」
 
   👑+bc3 「لأرسال برودكاست للاونلاين فقط」
 
   👑+bcrole 「لأرسال برودكاست لرتبة معينه」
 
   👑+muteall 「لقفل الشات」
 
   👑+unmuteall 「لفتح الشات」
 
   👑+mute 「 لاعطاء ميوت لشخص 」
 
   👑+mutevoice 「 لاعطاء ميوت صوتي 」
 
   👑+unmutevoice 「لفك ميوت صوتي 」
 
   👑+deafen 「لأعطاء ديفن」
 
   👑+undeafen 「لفك الديفن」
 
   👑+unmute 「 لفك الميوت」
 
   👑+color 150 「لعمل 150 لون」
 
   👑+color 100 「لعمل 100 لون」
 
   👑+color 50 「لعمل 50 لون」
 
   👑+ban 「لتعطي شخص باند مع السبب」
    
   👑+kick 「لتعطي شخص كيك مع السبب」
    
   👑+clear 「لمسح الشات」
    
   👑+v  「لانشاء روم صوتي مؤقت」
 
   👑+cc  「لانشاء كاتجوري 」
 
   👑+cv  「لانشاء روم صوتي دائم 」
 
   👑+ct  「لانشاء روم كتابي دائم 」
 
   👑+delet   「يحذف الـروم سواء صوتي او كتابي」
 
   👑+role  「لأعطاء رتبة」
 
   👑+roleremove  「 أزالة رتبة」
 
   👑+role all  「لأعطاء جميع الي في سيرفر رتبة」
 
   👑+role bots  「لأعطاء جميع البوتات رتبة」
 
   👑+role humans   「لأعطاء جميع الناس معدى البوتات رتبة 」
 
   👑+voicekick  「لطرد شخص من روم صوتي」
 
   👑+move  「لسحب الشخص الى الروم صوتي الخاص بك」
 

 `)
    
    
   message.author.sendEmbed(embed)
    
   }
   }); 
client.on("message", async message => {
    if(!message.channel.guild) return;
var prefix = "+";
if(message.content.startsWith(prefix + 'member')) {
    let guild = await message.guild.fetchMembers()
    let bots = guild.members.filter(m => m.user.bot).size
    let members = guild.memberCount
    let humans = members - bots
    let dndusers = guild.members.filter(member => member.user.presence.status === "dnd")
    let awayusers = guild.members.filter(member => member.user.presence.status === "idle")
    let onlineusers = guild.members.filter(member => member.user.presence.status === "online")
    let offlineusers = guild.members.filter(member => member.user.presence.status === "offline")
    var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle("Membercount")
          .setDescription("Membercount in " + guild.name)
          .addField("Members", `${members}`, true)
          .addField("Humans", `${humans}`, true)
          .addField("Bots", `${bots}`, true)
          .addField("Status Users", `Online Users: ${onlineusers.size}\nDND Users: ${dndusers.size}\nAway Users: ${awayusers.size}\nOffline Users: ${offlineusers.size}\nTotal Members: ${message.guild.memberCount}`, true)
          .setThumbnail(message.author.avatarURL)
          message.channel.send({ embed: embed });
 
  }
 
    });
 
client.on("message", message => {
 if (message.content === "+help-public") {
        message.react("✅")
           message.react("😵")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setDescription(`
      ╭━━━┳━━━┳━━╮╱╭━━━━┳━━━┳━━━┳━╮╭━╮
      ┃╭━╮┃╭━╮┃╭╮┃╱┃╭╮╭╮┃╭━━┫╭━╮┃┃╰╯┃┃
      ┃╰━╯┣╯╭╯┃╰╯╰╮╰╯┃┃╰┫╰━━┫┃╱┃┃╭╮╭╮┃
      ┃╭╮╭╋╮╰╮┃╭━╮┃╱╱┃┃╱┃╭━━┫╰━╯┃┃┃┃┃┃
      ┃┃┃╰┫╰━╯┃╰━╯┃╱╱┃┃╱┃╰━━┫╭━╮┃┃┃┃┃┃
      ╰╯╰━┻━━━┻━━━╯╱╱╰╯╱╰━━━┻╯╱╰┻╯╰╯╰╯
      
   🌎「اوامر عامة」💎
                            
   🌎+server 「يعرض لك معلومات السيرفر」
    
   🌎+id 「أمر الايدي」
 
   🌎+per 「لمعرفة خصائص رتبتك」
 
   🌎+bot 「معلومات عن البوت」 
 
   🌎+mb 「لمعرفة حالة الاعضاء」 
 
   🌎+member 「عدد وحالة اعضاء السيرفر」 
  
   🌎+report-owner 「لأرسال ابلاغ لصاحب السيرفر」 
 
   🌎+uptime 「لمعرفة مدة تشغيل البوت」 
    
   🌎+date 「لمعرفه التاريخ」
 
   🌎+dt 「لمعرفة التاريخ والوقت لدولة مصر والسعودية والامارات」
    
   🌎+ping 「لمعرفه سرعه البوت」
 
   🌎+emojis 「يعرض لك ايموجيات حقت السيرفر」
    
   🌎+rooms 「لعرض عدد واسماء الرومات」
 
   🌎+roles 「لعرض اسماءالرتب」
 
   🌎+channel 「يعرض لك معلومات عن الروم」
    
   🌎+embed 「خاصيه غرد لكن بغير طريقه」
    
   🌎+say 「لي يكرر الكلام الذي تقوله」
    
   🌎رابط
「لارسال رابط السيرفر على الخاص」
 
   🌎+invites 「يعرض لك كم جبت اعضاء لهذة السيرفر」
 
   🌎+invite-codes 「يرسل لك على الخاص جميع الروابط التي قمت بأنشائها لهذة السيرفر」
 
   🌎+top 「يعرض لك جميع روابط دعوات التي تم انشائها مع عدد الاشخاص الي دخلو من الرابط」
 
   🎴+avatar 「لي عرض صورتك او صوره اي شخص」
 
   🎴+image 「لي عرض صوره السيرفر」
 
  
   `)
    
    
   message.author.sendEmbed(embed)
    
   }
   }); 
 
 
 
 
client.on("message", message => {
    var prefix = "+";
    var args = message.content.split(' ').slice(1); 
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
 if (!message.member.hasPermission("ADMINISTRATOR"))  return message.reply("**للأسف ليس لديك صلاحية `ADMINISTRATOR`**").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**I Don't Have `ADMINISTRATOR` Permission**").then(msg => msg.delete(6000));
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }   
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        } 
    } 
});
client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('+un') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});
 
 client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "+";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Dragon";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
     
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
     
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
 
 
 
    client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'deafen')) {
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x:').catch(console.error);
    }
   
    const deafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (member.serverDeaf) return message.channel.send(`${member} **لديه ديفن بالفعل**:x:`);
      member.setDeaf(true).catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
    };
   
    message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
      }
      
  });  
   
  client.on('message', async message =>{
    var prefix = "+";
    if(message.content.startsWith(prefix + 'undeafen')) {
   
  if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
    return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
  }
  if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
    return message.reply('**للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x: ').catch(console.error);
    if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
  }
   
  const undeafenMember = (member) => {
    if (!member || !member.voiceChannel) return;
    if (!member.serverDeaf) return message.channel.send(`${member} `);
    member.setDeaf(false).catch(console.error);
  };
   
  message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
  message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
  }
  }); 
   
 
    client.on('message' , message => {
      var prefix = "+";
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bcrole")) {
        let args = message.content.split(" ").slice(1);
     
        if(!args[0]) {
          message.channel.send("قم بمنشنة الرتبة | !bc @everyone message")
            return;
        }
        if(!args[1]) {
          message.channel.send("قم بكتابة الرسالة | !bc @everyone message")
            return;
        }
     
          if(args[0] == "@everyone") {
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`)
            message.guild.members.forEach(m => {
              m.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${args[1]}` + "**"
              )
            })
            return;
          }
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${args[1]}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });
 
 
let points = JSON.parse(fs.readFileSync('./fkk/3wasmPTS.json', 'utf8'));
      
var prefix = "+";
 
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {
        points: 0,
        };
    if (message.content.startsWith(prefix + 'لغز')) {
        if(!message.channel.guild) return
     
    const type = require('./fkk/quiz.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
     
                 
    msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
                    .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
    لمعرفة نقطاك الرجاء كتابة .نقاطي**`);
            console.log(`[Typing] ${collected.first().author} typed the word.`);
                let userData = points[message.author.id];
                userData.points++;
                        })
                        .catch(collected => {
                            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                console.log('[Typing] Error: No one type the word.');
                        })
            })
        })
    }
    });
 
 
 
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {
        points: 0,
        };
    if (message.content.startsWith(prefix + 'عواصم')) {
        if(!message.channel.guild) return
     
    const type = require('./fkk/3wasm.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
     
                 
    msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
                    .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
    لمعرفة نقطاك الرجاء كتابة +نقاطي**`);
            console.log(`[Typing] ${collected.first().author} typed the word.`);
                let userData = points[message.author.id];
                userData.points++;
                        })
                        .catch(collected => {
                            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                console.log('[Typing] Error: No one type the word.');
                        })
            })
        })
    }
    });
 
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {
        points: 0,
        };
    if (message.content.startsWith(prefix + 'رياضيات')) {
        if(!message.channel.guild) return
     
    const type = require('./fkk/maths.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
     
                 
    msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
                    .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
    لمعرفة نقطاك الرجاء كتابة +نقاطي**`);
            console.log(`[Typing] ${collected.first().author} typed the word.`);
                let userData = points[message.author.id];
                userData.points++;
                        })
                        .catch(collected => {
                            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                console.log('[Typing] Error: No one type the word.');
                        })
            })
        })
    }
    });
 
 
 
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {
        points: 0,
        };
    if (message.content.startsWith(prefix + 'فكك')) {
        if(!message.channel.guild) return
     
    const type = require('./fkk/fkkk.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
     
                 
    msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
                    .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
    لمعرفة نقطاك الرجاء كتابة +نقاطي**`);
            console.log(`[Typing] ${collected.first().author} typed the word.`);
                let userData = points[message.author.id];
                userData.points++;
                        })
                        .catch(collected => {
                            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                console.log('[Typing] Error: No one type the word.');
                        })
            })
        })
    }
    });
 
 
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
    if(!message.channel.guild) return
    let userData = points[message.author.id];
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setColor('#000000')
    .setDescription(`نقاطك: \`${userData.points}\``)
    message.channel.sendEmbed(embed)
  }
  fs.writeFile("./fkk/3wasmPTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});
 
 
 
 
client.on('message', message => {
     var prefix = "+"
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;
 
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;
 
    while (notCompleted) {
 
        if (uptime >= 8.64e+7) {
 
            days++;
            uptime -= 8.64e+7;
 
        } else if (uptime >= 3.6e+6) {
 
            hours++;
            uptime -= 3.6e+6;
 
        } else if (uptime >= 60000) {
 
            minutes++;
            uptime -= 60000;
 
        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;
 
        }
 
        if (uptime < 1000)  notCompleted = false;
 
    }
 
    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");
 
 
}
});
 
client.on('message', message => {
        var prefix = "+"
  if(message.content.startsWith (prefix  + 'mb')) {
      if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`**:battery: حالة اعضاء السيرفر**
     
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
 
        message.channel.send()
 
message.channel.sendEmbed(embed)
}
});
 
 
var prefix= "+";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'ct')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
     
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return    message.channel.send('`MANAGE_CHANNELS` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
      message.guild.createChannel(nam, 'text') // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:white_check_mark:  تم عمل الروم الكتابي : \`${nam}\``);
    }
    });
 
var prefix= "+";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'cv2')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
     
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return    message.channel.send('`MANAGE_CHANNELS` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
      message.guild.createChannel(nam, 'voice')
      message.channel.send(`:white_check_mark:  تم عمل الروم الصوتي : \`${nam}\``);
    }
    });
 
 
 
 
    client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "+";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });
 
     client.on('message', message => {
        var prefix = "+"
        if(message.content === prefix + "emojis") {
          const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
          message.channel.send(emojiList);
        }
      });
 
 

 
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
 
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
         
    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
}); 
 
 
   client.on('message', function(message) {
    if(!message.channel.guild) return;
if(message.content ===  '+color 150') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('جاري عمل الالوان |✅')
}else{
message.channel.send('ما معاك البرمشن المطلوب  |❌')
}
}
});
 
client.on('message', message=>{
if (message.content ===  '+color 150'){
if(!message.channel.guild) return;
if(message.member.hasPermission('MANAGE_ROLES')) {
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < 151; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});
 
 
   client.on('message', function(message) {
    if(!message.channel.guild) return;
if(message.content ===  '+color 100') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('جاري عمل الالوان |✅')
}else{
message.channel.send('ما معاك البرمشن المطلوب  |❌')
}
}
});
 
client.on('message', message=>{
if (message.content ===  '+color 100'){
if(!message.channel.guild) return;
if(message.member.hasPermission('MANAGE_ROLES')) {
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < 101; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});
    
 
 
   client.on('message', function(message) {
    if(!message.channel.guild) return;
if(message.content ===  '+color 50') {
 if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('جاري عمل الالوان |✅')
}else{
message.channel.send('ما معاك البرمشن المطلوب  |❌')
}
}
});
 
client.on('message', message=>{
if (message.content ===  '+color 50'){
if(!message.channel.guild) return;
if(message.member.hasPermission('MANAGE_ROLES')) {
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < 51; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});
 
 
 
 
 
 
 
 
client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
           
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
 
 
client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('+ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setThumbnail('https://media.discordapp.net/attachments/417477494950854656/438706305125974017/maxresdefaul1t.jpg?width=339&height=353')
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms")
.addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
}
});
 
var prefix = "+";
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
   
  
 
if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }
 
 
});
 
 
var prefix= "+";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'cc')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
     
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return    message.channel.send('`MANAGE_CHANNELS` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
      message.guild.createChannel(nam, 'category') //  
      message.channel.send(`:white_check_mark:  تم عمل مجموعة : \`${nam}\``);
    }
    });
 
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});
 
 
 
client.on("message", message => {
    const prefix = "+"
               
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
   
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()
 
   message.channel.send({embed});
      }
  });
 
 
     
 
 
 
 
client.on('message', message =>{
    if(message.content == "+roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});
 
client.on('message', message => {
    if (message.content === "+rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;
 
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
         
.addField(':arrow_down:اسماء الرومات. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
 
 
 
 
 
    var prefix = "+";
    const HeRo = new Discord.Client();
    client.on('message', message => {
        if (message.content === prefix + "date") {
            if (!message.channel.guild) return message.reply('** This command only for servers **');  
            var currentTime = new Date(),
                Year = currentTime.getFullYear(),
                Month = currentTime.getMonth() + 1,
                Day = currentTime.getDate();
   
                var Date15= new Discord.RichEmbed()
                .setTitle("**「  Date - التاريخ 」 **")
                .setColor('RANDOM')
                .setTimestamp()
                .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
                .setFooter(`+help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
                 message.channel.sendEmbed(Date15);
        }
    });
       
    var prefix= "+";
    client.on("message", message => {
        if(message.content.startsWith(prefix + 'v')) {
         let args = message.content.split(" ").slice(1);
           var nam = args.join(' ');
         
          if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
          if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
          message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
          message.channel.send(`:ballot_box_with_check: تم عمل الروم الصوتي : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
        }
        });
 
 
 
        client.on('message', message => {
                     var prefix = "+";
            if(message.content === prefix + "muteall") {
                                if(!message.channel.guild) return message.reply('** This command only for servers**');
      
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                   message.channel.overwritePermissions(message.guild.id, {
                 SEND_MESSAGES: false
      
                   }).then(() => {
                       message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                   });
                     }
     
         if(message.content === prefix + "unmuteall") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
      
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                   message.channel.overwritePermissions(message.guild.id, {
                 SEND_MESSAGES: true
      
                   }).then(() => {
                       message.reply("**__تم فتح الشات__:white_check_mark:**")
                   });
                     }
                      
               
             
     });
 
 
client.on('message', message => {
    var prefix = "+"
      if (message.author.omar) return;
      if (!message.content.startsWith(prefix)) return;
      var command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
      var args = message.content.split(" ").slice(1);
      if (command == "kick") {
       if(!message.channel.guild) return message.reply('** This command only for servers**');
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
      var user = message.mentions.users.first();
      var reason = message.content.split(" ").slice(2).join(" ");
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user).kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
      const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({embed : kickembed})
      user.send(reason).then(()=>{
    message.guild.member(user).kick();
      })
    }
    });
   
 
 
 
  client.on('message', message => {
var prefix = "+"
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لايوجد لديك ` BAN_MEMBERS ` صلاحية**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي صلاحيات لتبنيد العضو **");
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).banable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BAN!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});
 
 
   
var prefix = "+"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
          
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
 
 
          client.on("message", (message) => {
            if (message.content.startsWith('+delet')) {
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("ليس لديك خاصية `MANAGE_CHANNELS` Premissions ");
         
                let args = message.content.split(' ').slice(1);
                let channel = message.client.channels.find('name', args.join(' '));
                if (!channel) return message.reply('**مافي روم بهل اسم -_-**').catch(console.error);
                channel.delete()
            }
        });
  client.on("message", async message => {
    var prefix = '+';
    if(message.author.bot) return;
      if(message.channel.type === "dm") return;
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
         var heg;
         if(men) {
             heg = men
         } else {
             heg = message.author
         }
       var mentionned = message.mentions.members.first();
          var h;
         if(mentionned) {
             h = mentionned
         } else {
             h = message.member
         }
   
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
      moment.locale('ar-TN');
    if(command === `${prefix}id`) {
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`تفاصيل حساب : ${message.author.username}`)
        .setColor("#9932CC")
        .setThumbnail("https://i.imgur.com/GnR2unD.png")
        .addField("اسمك الكامل", `${message.author.username}#${message.author.discriminator}`)
        .addField("أيدي", message.author.id)
              .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``)
                        .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``)
              .setThumbnail(message.author.avatarURL)
               
   
      message.channel.sendEmbed(embed);
   
      return;
    }
 
 
     
});
 
 
client.on("message", message => {
  var prefix = "+";
          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "report-owner")) {
let reportMember = message.guild.member(message.mentions.members.first());
let reportReason = args.slice(1).join(" ");
 
if (message.mentions.users.size === 0) {
  message.channel.send("**منشن الشخص المراد الابلاغ عليه** :x:")
  return;
} else {
  if(!reportMember) {
      message.channel.send("**هذه الشخص غير موجود في السيرفر** :x:")
      return; }}
  
if (reportMember.id == message.author.id) {
  message.channel.send("**لا يمكنك الابلاغ عن نفسك** :facepalm:")
  return; }
 
if (args[1] === undefined) {
  message.channel.send("**ضع سبب الابلاغ** :x:")
  return; }
 
message.guild.owner.send({embed:{
  fields: [{
      name: "ابلاغ جديد من سيرفر : " + message.guild.name + "!",
      value: "تفاصيل:\n\n**صاحب الأبلاغ:** " + message.author.username + "\n**قام بالأبلاغ عن ::** " + reportMember.user.username + "\n**السبب:** " + reportReason + "\n**الروم المرسل منه الأبلاغ:** " + message.channel
    }
  ],
  thumbnail: {
      url: reportMember.user.displayAvatarURL
  },
  timestamp: new Date(),
  color: 0xFF0000
}}).catch(err => {
  message.author.send("A error occured sending your report to the server owner! Error: " + err)
  return;
})
message.channel.send("تم ارسال الأبلاغ بنجاح\n\nمعلومات عن الأبلاغ:\n  **قمت بالابلاغ عن :** " + reportMember.user.username + "\n  **السبب:** " + reportReason + "\n  **الروم الذي قمت بأرسال الابلاغ منه:** " + message.channel)
 
}
});
 
 
client.on('message', async message =>{
  var prefix = "+";
 
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
   
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
   
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
   
   
  //end of module
  }
 
 
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "muted");
   
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});
 
 
  client.on('message', message => {
    if (message.content.split(' ')[0] == '+bc2')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 
 
           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
             
                                                    });
             
                                                  });
   client.on("message", message => {
       var prefix = "#";
  
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "ظظظظظ")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 
                          if (!args[1]) {
                             
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                             
                                        } else {
 
                             
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                                
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
 
 
 
                client.on("message", message => {
                     var prefix = "+";
                    if (message.content.startsWith(prefix + "bc3")) {
                                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
          let args = message.content.split(" ").slice(1);
          var argresult = args.join(' '); 
          message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
         m.send(`${argresult}\n ${m}`);
        })
         message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
         message.delete(); 
        };     
        });
 

 
            var prefix = "+";
client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
             
            }  
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
 
 
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
  
 
                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "「التاريخ  والوقت」")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "「"+ hours + ":" + minutes +":"+ seconds + "」")
                 .addField('مكه المكرمه',
                "「"+ hours2 + ":" + minutes +":"+ seconds  + "」") 
                .addField('مصر',
                "「"+ hours3 + ":" + minutes +":"+ seconds  + "」") 
                 
                .addField('Date',
                "「"+ Day + "-" + Month + "-" + Year +  "」")
 
                 message.channel.sendEmbed(Date15);
        }
    });
 
                client.on('message', message => {
                    var prefix = "+";
                     
                      if (!message.content.startsWith(prefix)) return;
                      var args = message.content.split(' ').slice(1);
                      var argresult = args.join(' ');
                      if (message.author.id == 410835593451405312) return;
                     
                     
                    if (message.content.startsWith(prefix + 'playing')) {
                    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                    client.user.setGame(argresult);
                        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
                    } else
                     
                      
                    if (message.content.startsWith(prefix + 'streem')) {
                    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                    client.user.setGame(argresult, "http://twitch.tv/SMILE");
                        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
                    } else
                     
                    if (message.content.startsWith(prefix + 'setname')) {
                    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                      client.user.setUsername(argresult).then
                          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
                      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
                    } else
                         
                    if (message.content.startsWith(prefix + 'setavatar')) {
                    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                    client.user.setAvatar(argresult);
                        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
                    } else
                     
                     
                    if (message.content.startsWith(prefix + 'watching')) {
                    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                        client.user.setActivity(argresult, {type : 'watching'});
                     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
                    }
                     
                     });
////games
 
 
var prefix = "+";
var viper = ["https://f.top4top.net/p_682it2tg6.png%22","https://e.top4top.net/p_682a1cus5.png%22","https://d.top4top.net/p_682pycol4.png%22","https://c.top4top.net/p_682vqehy3.png%22","https://b.top4top.net/p_682mlf9d2.png%22","https://a.top4top.net/p_6827dule1.png%22","https://b.top4top.net/p_682g1meb10.png%22","https://a.top4top.net/p_682jgp4v9.png%22","https://f.top4top.net/p_682d4joq8.png%22","https://e.top4top.net/p_6828o0e47.png%22","https://d.top4top.net/p_6824x7sy6.png%22","https://c.top4top.net/p_682gzo2l5.png%22","https://b.top4top.net/p_68295qg04.png%22","https://a.top4top.net/p_682zrz6h3.png%22","https://f.top4top.net/p_6828vkzc2.png%22","https://e.top4top.net/p_682i8tb11.png",]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var lo = new Discord.RichEmbed()
.setImage(viper[Math.floor(Math.random() * viper.length)])
message.channel.sendEmbed(lo);
    }
});
 
 
 
const secreT = [
    "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
    "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
    "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
    "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
    "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
    "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
    "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
    "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
    "**المناقشات العقيمة لا تنجب افكارا**.", 
    "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
    "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  ]
   
   
   client.on('message', message => {
     if (message.content.startsWith("+خواطر")) {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
   
     .setThumbnail(message.author.avatarURL) 
   .addField('لعبه خواطر' ,
    `${secreT[Math.floor(Math.random() * secreT.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[id] Send By: ' + message.author.username)
      }
  });
 
 
 
const cuttweet = [
    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت ‏| كلمة للصُداع؟',
    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    '‏كت تويت | وش يفسد الصداقة؟',
    '‏كت تويت | شخص لاترفض له طلبا ؟',
    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    '‏كت تويت |أقوى كذبة مشت عليك ؟',
    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
    '‏كت تويت | مطلبك الوحيد الحين ؟',
    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
client.on('message', message => {
  if (message.content.startsWith("+كت تويت")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});
 
 
    var prefix = "+";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
 
const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',                                                                                                                                            
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('+صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});                           
 
 
client.login(process.env.BOT_TOKEN);
