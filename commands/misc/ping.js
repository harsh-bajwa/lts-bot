module.exports = {
  run: ({ interaction, client }) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
  data: {
    name: "ping",
    description: "Ping the bot.",
  },
};
