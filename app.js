const env = require("./env.js")
const git = require("./git.js")
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(env.DISCORD_TOKEN)

client.on('message', (msg) => {
    console.debug(`Received message: ${msg.author.username}:${msg.content}`);
    if (msg.channel.name !== env.CHANNEL_NAME || msg.author.username === env.BOT_NAME) {
        return;
    }

    if (msg.content.startsWith(env.SAVE_TO_GIT_COMMAND)) {
        saveGitWorldBackup(msg);
    }
});

function saveGitWorldBackup(msg) {
    let commitMessage = msg.content.substring(env.SAVE_TO_GIT_COMMAND.length).trim();
    if (!commitMessage) {
        commitMessage = `${env.WORLD_NAME}: ${new Date().toLocaleString()}`;
    }

    msg.channel.send(`Understood. Will sail back to git with the message: "${commitMessage}"`);

    git.gitSave(commitMessage, (err) => msg.channel.send(err));
}