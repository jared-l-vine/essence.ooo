import Discord from "discord.js";
const client = new Discord.Client();

["DISCORD_TOKEN"].forEach(variableName => {
  if (!process.env[variableName])
    throw new Error(`Could not find environment variable '${variableName}`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
