export default  {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    WORLD_NAME: process.env.WORLD_NAME,
    CHANNEL_NAME: process.env.CHANNEL_NAME,
    BOT_NAME: process.env.BOT_NAME,
    SAVE_TO_GIT_COMMAND: process.env.SAVE_TO_GIT_COMMAND || "save",
    REPO_DIR: process.env.REPO_DIR,
    PUSH_ENABLED: process.env.PUSH_ENABLED || true,
    ENABLE_GIT_LOGS: process.env.ENABLE_GIT_LOGS || false
}