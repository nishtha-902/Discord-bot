const { REST, Routes } = require('discord.js');
const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
        name: 'create',
        description: 'Creates a new short url',
    },
    {
        name: 'date',
        description: 'shows current date',
    },
    {
        name: 'joke',
        description: 'generates a random joke',
    },
    {
        name: 'coinflip',
        description: 'generates a random joke',
    },
    {
        name: 'shorturl',
        description: 'generates a short url for your url provided',
    },
    {
        name: 'userinfo',
        description: 'gives current user information',
    },
    {
        name: 'uptime',
        description: 'gives the users uptime',
    },
];

const rest = new REST({ version: '10' }).setToken(
    "MTMwMzYwNzM0NDg4MTYwMjYyMA.GG1tm0.sTaos7Vlp9NuD-TPGz4wZMNdkcdcwV07pjpCB0"
);

try {
    console.log('Started refreshing application (/) commands.');
  
    rest.put(Routes.applicationCommands('1303607344881602620'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}