var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });

client.on("ready", () => {
  const startTimestamp = Date.now();
  setInterval(() => {
    client.request("SET_ACTIVITY", {
      pid: process.pid,
      activity: {
        details: "Vibing my night away",
        state: "Chillin to music",
        type: 0,
        timestamps: {
          start: startTimestamp,
        },
        assets: {
          large_image: "123",
          large_text: "Wanna vibe with me?",
        },
        party: {
          size: [1, 2],
        },
        buttons: [
          { label: "Here's some info", url: "https://discord.bio/p/aesthetix" },
          {
            label: "Chill shit",
            url: "https://www.youtube.com/watch?v=vdloO6YdFPg",
          },
        ],
      },
    });
  }, 2500);
  console.log("started");
});
client.login({ clientId: "836292328603648071" }).catch(console.error);
