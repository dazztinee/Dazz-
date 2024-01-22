const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Manila',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1163670746225201312') //ApplicationID
    .setType('STREAMING')
    .setURL('https://twitch.tv/discord') //Twitch Link
    .setState(' ') //Text 2
    .setName(' ') //Name
    .setDetails(`Open for Bot Comms`) //Text 1
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/971271501363965965/1192302769328115793/IMG_9574.jpg?ex=65a8957c&is=6596207c&hm=750b8390a01675b840ca1d6bf1efc1703eb673e870b6e1ba74280f128b857d9a&') //Large Image here
    .setAssetsLargeText(' ') //Text 3
    .setAssetsSmallImage('https://media.discordapp.net/attachments/971271501363965965/1192302769328115793/IMG_9574.jpg?ex=65a8957c&is=6596207c&hm=750b8390a01675b840ca1d6bf1efc1703eb673e870b6e1ba74280f128b857d9a&') //Small Image here
    .setAssetsSmallText('car') //Text when you hover the Small image
    .addButton('Shop', 'https://discord.gg/jjstash') //Button 1
    .addButton('Vouches', 'https://discord.gg/jjstash'); //Button 2

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Open for Bot Comms`; //Text 1 Also
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000);
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);