//Title: Executor JS
// Wrtten by: Mr Wiskers
// Main Bot/Command Logger
const Discord = require("discord.js");


const client = new Discord.Client();


const config = require("./config.json");


var staff = ['220325685888155649','351224485539610625','287290204145057792','243463772981821442','214719404154421248','288024015392735233','195495653978275840','290557774725644288','312762029645496321','310494772378992650','297566802521882624','98542555272060928','416373017590104065']
var blacklistedm8 = ['422213647931015181']
var lock = false
var lockid = 0
client.on("ready", () => {
 
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity('With Remote Access');
});







client.on("message", async message => {

if(lock === true){
    if(staff.indexOf(message.author.id)<0){
    if(message.channel.id === lockid){
       console.log (`l o c k b o i ${message.guild.name}|${message.author.username}|${message}`)
      message.delete().catch(O_o=>{}); 
    }}
   }
  
  
 
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  console.log (`${message.guild.name}|${message.author.username}|${message}`)
if(blacklistedm8.indexOf(message.author.id)>-1){  
  const m = await message.channel.send("");
setTimeout(function(){
m.edit(`OH`)
}, 500)
 setTimeout(function(){
m.edit(`YEAH`)
}, 1000)
 setTimeout(function(){
m.edit(`MR`)
}, 1500)
setTimeout(function(){
m.edit(`KRABS`)
}, 2000)    

setTimeout(function(){
m.edit(`CONGRATULATIONS`)
}, 5500)
setTimeout(function(){
m.edit(`YOU HAD YOUR ANAL VIRGINITY STOLEN BY JACKS OFFICE STAPLER`)
}, 7500)
setTimeout(function(){
m.edit(`YOU HAVE CONTRACTED **STAPLER INDUCED AIDS!**`)
}, 9500)
setTimeout(function(){
m.edit(`COURTESY OF ***JACKS OFFICE SUPPLY SHIT!***`)
}, 10500)
setTimeout(function(){
m.edit(`GET KNUCKLEFUCKLED`)
}, 12500)
setTimeout(function(){
m.edit(`Copyright jacks office supply shit, forceing the Make-A-Wish foundation to give kids with full blown Stapler Induced Aids and there parents false hope since 2003!`)
}, 13500)
return; 
}
  if (command === "stats"){
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Executor#9376`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Info", `**ID**: ${message.client.user.id}\n**Prefix:** -\n**Owners**:\nmr wiskers#5831\ngereralpetrowski#3183\n**Development Team**:\nmr wiskers#5831\ngereralpetrowski#3183\nMr.Foster#3108\nboppers#4690\nCave_Johnson#2497\nInsidiousJohny#1217\n**Version**: 1.6.7\n**Update Logs:** -ver\n**Support Server**: https://discord.gg/5HA8YAZ`)
  message.channel.send(embed);
}
  if (command === "ver"){
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Version 1.6.7`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("10/14/2018", `**•Fixed**\nThe error when you try to use the bot.\n#BlameGer for breaking it`)
  message.channel.send(embed);
}
  if (command === "commands"){
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Commands`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Current Commands:", `**Public Commands**:\n-commands\n-ping\n-stats\n-ver\n-stats\n-loss\n-credits\n**Private commands**:\n-set\n-purge\n-kick\n-ban\n-uptime\n-server\n-check\n-blacklist\-unblacklist\n-bl`)
  message.channel.send(embed);
}
  if (command === "credits"){
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Credits`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Thanks to", `**Hornald the horny horn#7093**\n for loss.`)
  message.channel.send(embed);
}
  
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing. 
    // And we get the bot to say the thing: 
    message.channel.send(`-say ${sayMessage}`);
  }
  
   if(command === "kick") {
    
    if(staff.indexOf(message.author.id)>-1){
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kick by ${message.author.tag} because: ${reason}`);
  }
   }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(staff.indexOf(message.author.id)>-1){
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  }
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
   if(staff.indexOf(message.author.id)>-1){
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply("Couldn't delete messages because of: ${error}"));
  }
  }
  if(command === "set") {
    if(staff.indexOf(message.author.id)>-1){
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
   
    client.user.setActivity(sayMessage);
  }
  }
   if(command === "uptime") {
     if(staff.indexOf(message.author.id)>-1){

     
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;  
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
   
  message.channel.send({embed: {
  color: 3447003,
  description:(uptime)
}});
   }
}
  if (command === "loss"){
    message.delete().catch(O_o=>{});
    message.channel.send({embed:{
            title: "***LOSS***",
            color:125477,
            fields:[
                {
                    name:"***| ||***",
                    value:"**|| |_**"
                },
            ],
        }})
  }
  
  if(command === "name"){
    if(staff.indexOf(message.author.id)>-1){
    message.delete().catch(O_o=>{}); 
      const name = args.join(" ");
    message.guild.members.forEach(function(guildMember) {
    guildMember.setNickname(name)
    });
  }
}
   if(command === "unname"){
    if(staff.indexOf(message.author.id)>-1){
    const name = args.join(" ");
    message.guild.members.forEach(function(guildMember) {
    guildMember.setNickname(" ")
    });
  }
}
  if(command === "server"){
    if(staff.indexOf(message.author.id)>-1){
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Created • ${month}.${day}.${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Name", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Region", message.guild.region, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Members", message.guild.memberCount, true)
   .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roles", message.guild.roles.size, true);
   message.channel.send(serverembed);
    }
  }
  if(command === "check"){
    if(staff.indexOf(message.author.id)>-1){
    const check = args.join(" ");
    if(staff.indexOf(check)>-1){
    message.channel.send(`User id ${check} is authorized.`)
   
    }
      
  }
  }
 if(command === "blacklist"){
    if(staff.indexOf(message.author.id)>-1){
      const bl = args.join(" ");
      blacklistedm8.push(bl)
      let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Jacks office supply shit, how can i be of assistance?`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Oooo! Another fuckwad messed up!!!!", `${bl} was added to the blacklist.`)
  message.channel.send(embed);
    }}
if(command === "unblacklist"){
    if(staff.indexOf(message.author.id)>-1){
      const ubl = args.join(" ");
      var nob = blacklistedm8.indexOf(ubl)
      blacklistedm8.splice(nob, 1)
      let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Jacks office supply shit, how can i be of assistance?`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Looks like a fuckwad proved themself.", `${ubl} was removed`)
  message.channel.send(embed);
    }}
if(command === "bl"){
 if(staff.indexOf(message.author.id)>-1){
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Jacks office supply shit, how can i be of assistance?`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Blacklisted UserID's",`${blacklistedm8}`)
  message.channel.send(embed);
}}
 if(command === "whitelist"){
    if(staff.indexOf(message.author.id)>-1){
      const wl = args.join(" ");
      staff.push(wl)
      let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Executor > Settings.json`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Admin List", `${wl} was added to the stafflist.`)
  message.channel.send(embed);
    }}
if(command === "wl"){
 if(staff.indexOf(message.author.id)>-1){
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Executor>Settings.json`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Whitelisted UserID's",`${staff}`)
  message.channel.send(embed);
}}
if(command === "unwhitelist"){
    if(staff.indexOf(message.author.id)>-1){
      const ubl = args.join(" ");
      var nob = staff.indexOf(ubl)
      staff.splice(nob, 1)
      let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Executor>Settings.json`)
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .addField("Remove WL", `${ubl} was removed`)
  message.channel.send(embed);
    }}
  if(command === "ssu"){
    if(staff.indexOf(message.author.id)>-1){
      const scn = args.join(" ");
      message.channel.send("@everyone")
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Server Start Up!`)
  .setThumbnail(`https://cdn.discordapp.com/icons/455967443530022932/2cd6f09b15b439494120e528ef675bf3.jpg`)
  .addField("Current Scinerio is:", `${scn}`)
  .addField("Come to https://www.roblox.com/games/2022598128", `${message.author.username} is hosting!`)
  message.channel.send(embed);
    }}
if(command === "get"){
    message.reply(`${message.guild.iconURL}`)
    }
if(command === "lock"){
    if(staff.indexOf(message.author.id)>-1){
    lock = true
    lockid = (message.channel.id)
      message.channel.send(`${message.author.username} has locked the channel`)
    }}
if(command === "unlock"){
    if(staff.indexOf(message.author.id)>-1){
    lock = false 
      message.channel.send(`${message.author.username} has removed the lock`)
    }}
  if(command === "lockid"){
    if(staff.indexOf(message.author.id)>-1){
    message.channel.send(`Current Locked Channel ID is ${lockid}`)
    }}
if(command === "executeorder66"){ 
if(staff.indexOf(message.author.id)>-1){  message.guild.members.forEach(function(guildMember) {
    guildMember.ban(" ")
});
}
}
});   

client.login(process.env.TOKEN);




const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 25000);