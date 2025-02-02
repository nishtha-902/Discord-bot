// copy from discord.js docs
const axios = require("axios");
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ] 
}); 
// intent means kya permission dere ho virtual client ko
// Guild msg to CRUD msg




// client.on("messageCreate", (message) => {
//     if(message.author.bot) return;
//     if(message.content.startsWith("create")){
//         const url= message.content.split("create")[1];
//         return message.reply({
//             content:"Generating Short Id for "+url,
//         });
//     }
//     message.reply({
//         content:"Hi, I'm a bot"
//     });
// });




// all commands 

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!!");
    } 
    
    else if (interaction.commandName === "date") {
        const today = new Date().toLocaleDateString();
        await interaction.reply(`Today's date is: ${today}`);
    }

    else if (interaction.commandName === "joke") {
        try {
            const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
            const joke = `${response.data.setup}\n${response.data.punchline}`;
            await interaction.reply(joke);
        } catch (error) {
            await interaction.reply("Couldn't fetch a joke, try again later!");
        }
    }

    else if (interaction.commandName === "coinflip") {
        const result = Math.random() < 0.5 ? "Heads" : "Tails";
        await interaction.reply(`🪙 The coin landed on: **${result}**`);
    }

    else if (interaction.commandName === "shorturl") {
        const url = interaction.options.getString("url");

        try {
            const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
            await interaction.reply(`Shortened URL: ${response.data}`);
        } catch (error) {
            await interaction.reply("Failed to shorten the URL.");
        }
    }

    else if (interaction.commandName === "userinfo") {
        await interaction.reply(`👤 Username: **${interaction.user.username}**\n🆔 ID: **${interaction.user.id}**`);
    }

    else if (interaction.commandName === "uptime") {
        const uptime = process.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        await interaction.reply(`I've been running for: **${hours}h ${minutes}m ${seconds}s**`);
    }
});

// client.on("interactionCreate", (interaction) => {
//     interaction.reply("Pong!!")
// });

// client.on("interactionCreate", (interaction) => {
//     const today = new Date().toLocaleDateString();
//     interaction.reply(`Today's date is : ${today}`)
// });


client.login(process.env.BOT_TOKEN);