# Discord Bot - Quick Start Guide

## Overview

This Discord bot is designed to perform various automated tasks in a server, including responding to commands, creating short URLs, and more.

## Features

* Responds to user interactions

* Generates short URLs

* Provides date-related commands

* Custom commands can be added

# Installation

To install and run the bot, follow these steps:

1. Prerequisites

Make sure you have the following installed on your system:

Node.js (version 16 or later)

Git

A Discord bot token (See Step 2)

2. Create a Discord Bot

Go to the Discord Developer Portal.

Click New Application and give it a name.

Navigate to the Bot tab and click Add Bot.

Copy the bot token (you will need this in Step 4).

3. Clone the Repository

```bash
git clone https://github.com/nishtha-902/Discord-bot.git
cd Discord-bot
```

4. Install Dependencies

```bash
npm install
```

5. Configure the Bot

Create a .env file in the root directory and add the following:

```bash
BOT_TOKEN=<your-token>
CMND=<your-command-token>
```

Replace your-bot-token-here with the token you copied earlier.

6. Invite the Bot to Your Server

Go to the OAuth2 tab in the Discord Developer Portal.

Under OAuth2 URL Generator, select bot scope.

Under Bot Permissions, choose required permissions (e.g., Send Messages, Read Message History).

Copy the generated URL and paste it into your browser to invite the bot to your server.

7. Start the Bot

```bash
node index.js
```

## Usage

Once the bot is running, you can use the following commands in any Discord server where the bot is added.

Available Commands

```bash
/ping    #Replies with "Pong!"

/date    #Displays the current date
```

## Example Usage

* !ping → Bot replies: "Pong!"

* !date → Bot replies: "Today's date is 2025-02-02"


## Custom Commands

To add a new command, modify index.js and add a new event listener:

```bash
client.on("messageCreate", (message) => {
    if (message.content === "!hello") {
        message.reply("Hello, user!");
    }
});
```

Restart the bot to apply changes.

## Troubleshooting

Bot not responding? Check that it has the correct permissions in your server.

Invalid Token Error? Ensure your token is correctly set in config.json.

Command not recognized? Verify the command prefix and syntax.

## License

This project is open-source and available under the MIT License.
