const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");



client.on('ready', async () => {
      let ReBeL = ["هاي£!£!!_!_!£;£!3!*jdhffjjdndnx هاي ","كيفكndnrjdnfndم شباب","spam£++4+_+__+ming ","شو انكم نفسياتdndndndnnrndnsnsnrnd مدري ليش ","hhhhhhhhhhhaaaaaaaaaacccccccccckkkkkkkkkksssssssss","spahddjhdjdjxnxming2222","qwertasdfzxcv","lalaldndndnendndalalal","استخفر الله و اتوب اليه","الحمد الله","AIzdnnddnnd12345678910aSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8","ahjrjrbrhfrbufrbufrbhfrbhdrbxhrbxhrbhxrbdjjejxjsnwnwjdjdjdurhr in the morning of Friday night s igs I need wait to be" ]
  setInterval(() => {
client.channels.get("675480836858183736").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},7000);
});


client.on('ready', async () => {
      let ReBeL = ["اشعد ان لا اله الا الله محمد رسول الله","الله يسعدك ربي","نا بساوي سبام خيري","07853","610483374733883857388347388375388374834847388457837473874;!;+)+;;;027,","WELCOME TØ **‏ ‏ ℍ𝔼𝔸ℝ𝕋𝕊 ** Server","AIzaSyAdORXg7UZUo7sePv9","jdjrrjdndjdnd bjdjjdbdbdjrhhdbr I am looking forward to be aw man in a here are in blood pressure and 13 in a here to be aw man who had to Openww I am not sure what you think about the future of Discord in the future of our games","##########8283838838######","هاي£!£!!_!_!£;£!3!*jdhffjjdndnx هاي ","كيفكndnrjdnfndم شباب","spam£++4+_+__+ming ","شو انكم نفسياتdndndndnnrndnsnsnrnd مدري ليش ","hhhhhhhhhhhaaaaaaaaaacccccccccckkkkkkkkkksssssssss","spahddjhdjdjxnxming2222","qwertasdfzxcv","lalaldndndnendndalalal","استخفر الله و اتوب اليه","الحمد الله","AIzdnnddnnd12345678910aSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8","ahjrjrbrhfrbufrbufrbhfrbhdrbxhrbxhrbhxrbdjjejxjsnwnwjdjdjdurhr in the morning of Friday night s igs I need wait to be"]
  setInterval(() => {
client.channels.get("675480855161864203").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},7000);
});



client.on('ready', async () => {
      let ReBeL = ["#profile","#credits"]
  setInterval(() => {
client.channels.get("675480873671327767").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},190000);
});



client.on('ready', async () => {
      let ReBeL = ["#rep <@531662951380156417>"]
  setInterval(() => {
client.channels.get("675480873671327767").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},1440000);
});



client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['spam','2'];
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
        client.user.setGame(setGame[i],`http://www.twitch.tv/idk`);
    }, ms);
    console.log(` L U X Y |> Name: ${client.user.username}`);
 console.log(` L U X Y |> Servers: ${client.guilds.size}`);
 console.log(` L U X Y |> Members: ${client.users.size}`);
 console.log(` L U X Y |> Channels: ${client.channels.size}`);
 console.log(` L U X Y |> Channels: ${client.channels.size}`);
 console.log(` L U X Y |> Id: ${client.user.id}`);
 console.log(` L U X Y`);
 console.log(` L U X Y`);
});



client.on("message", msg => {
  if (msg.content === "p") {  
    msg.reply("#profile"); 
  }
});

client.on('message', msg=> {
  if (msg.content === "#profile") {
    msg.react('✅');
  }
});


client.login(process.env.BOT_TOKEN);
