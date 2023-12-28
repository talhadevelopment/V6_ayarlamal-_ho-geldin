const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "", //tokeniniz
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages","GuildMembers"],
  events: ["onMessage", "onInteractionCreate","onJoin","onLeave"],
  $setdatabase: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue" ,
    },
  },
});


client.loadCommands("./commands/");true

client.variables({
  hgbb:"açık" ,
  hgbbkanal:"1189609506481643640",
  hgmesaj:"deneme mesaj",
  bbmesaj:"deneme mesaj",
  
 
  
})


client.status({
  name: "Youtube ",
  type: "PLAYING",
  time: 12,
});

client.readyCommand({
  channel: "1180421335705456672", 
  code: `
Bot Aktif
`,
});

client.joinCommand({
  channel:"$getGuildVar[hgbbkanal]",
  code:`
 <a:hosgeldin:1189990168992681994>
**$getGuildVar[hgmesaj]**`

})

client.leaveCommand({
  channel:"$getGuildVar[hgbbkanal]",
  code:`
  <a:bb:1190000702165094523>
  **$getGuildVar[bbmesaj]**`

})
  
  
