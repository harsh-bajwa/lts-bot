const {
  EmbedBuilder,
  PermissionsBitField,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  PermissionFlagsBits,
  ApplicationCommandOptionType,
} = require("discord.js");

module.exports = {
  data: {
    name: "purge",
    description: "Purge X amount of messages.",
    type: 1,
    options: [
      {
        name: "amount",
        description: "The amount of messages to delete",
        minValue: 1,
        maxValue: 100,
        required: true,
        type: ApplicationCommandOptionType.Number,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.ManageMessages],
  },

  run: async (interaction) => {
    const purgeInteraction = interaction.interaction;

    let number = purgeInteraction.options._hoistedOptions[0].value;

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setDescription(`:white_check_mark: Deleted ${number} messages.`);

    await purgeInteraction.channel.bulkDelete(number);

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("purge")
        .setEmoji("🚮")
        .setStyle(ButtonStyle.Primary)
    );

    const message = await purgeInteraction.reply({
      embeds: [embed],
      components: [button],
    });

    const collector = message.createMessageComponentCollector();

    collector.on("collect", async (i) => {
      if (i.customId === "purge") {
        purgeInteraction.deleteReply();
      }
    });
  },
};
