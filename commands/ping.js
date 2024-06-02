module.exports = {
  deleted: true,
  run: ({ interaction, client }) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
  data: {
    name: "ping",
    description: "Ping the bot.",
  },
};
