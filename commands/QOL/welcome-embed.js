const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "welcome-embed",
    description: "This is for the welcome channel",
    devOnly: true,
  },

  run: (interaction) => {
    const welcomeEmbed = new EmbedBuilder()
      .setColor("Blurple")
      .setTitle("Leverage through Systems")
      .setURL("https://systemising.com")
      .setAuthor({
        name: "azuliate",
        iconURL: "https://pbs.twimg.com/media/DmTd3qCX0AAJprP.jpg",
      })
      .setDescription(
        "Welcome to Leverage through Systems. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      )
      .addFields({
        name: "Verify",
        value: "use /verify in <#1246221544838008853> to unlock content.",
        inline: true,
      })
      .setImage(
        "https://cdn.discordapp.com/attachments/1244461096186675251/1247852219693531166/Untitled_design_5.png?ex=66681ff1&is=6666ce71&hm=dcf9f847d0b8c96af4237706e5d0be9949231bf3c88191f9f7ea2421f3d51664&"
      )
      .setTimestamp();

    interaction.interaction.channel.send({ embeds: [welcomeEmbed] });
  },
};
