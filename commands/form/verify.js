const {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

const post = require("../../utils/post");

module.exports = {
  run: async ({ interaction }) => {
    const requiredChannel = "1246221544838008853";

    //Anti-spam method
    if (requiredChannel !== interaction.channel.id) {
      interaction.reply({
        content: `You can only use this command in <#${requiredChannel}>.`,
        ephemeral: true,
      });
      return;
    }

    const modal = new ModalBuilder({
      customId: `verify-${interaction.user.id}`,
      title: "Verify Form",
    });

    const firstNameInput = new TextInputBuilder({
      customId: "firstNameInput",
      label: "Please enter your first name.",
      style: TextInputStyle.Short,
    });

    const emailInput = new TextInputBuilder({
      customId: "emailInput",
      label: "Please enter your email.",
      style: TextInputStyle.Short,
    });

    const reasonInput = new TextInputBuilder({
      customId: "reasonInput",
      label: "What do you want to learn from the server?",
      style: TextInputStyle.Paragraph,
    });

    const firstActionRow = new ActionRowBuilder().addComponents(firstNameInput);
    const secondActionRow = new ActionRowBuilder().addComponents(emailInput);
    const thirdActionRow = new ActionRowBuilder().addComponents(reasonInput);

    modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

    await interaction.showModal(modal);

    const filter = (interaction) =>
      interaction.customId === `verify-${interaction.user.id}`;

    interaction
      .awaitModalSubmit({ filter, time: 600_000 })
      .then((modalInteraction) => {
        const nameValue =
          modalInteraction.fields.getTextInputValue("firstNameInput");
        const emailValue =
          modalInteraction.fields.getTextInputValue("emailInput");
        const reasonValue =
          modalInteraction.fields.getTextInputValue("reasonInput");

        modalInteraction.reply(`Hello ${nameValue}! Enjoy the content!`);

        //Get data for 'POST' request with webhook
        const userData = {
          name: nameValue,
          email: emailValue,
          discordName: interaction.user.username,
        };

        post.POST(userData, process.env.GHL);
      })
      .catch((err) => {
        console.log(`Modal Error: ${err}`);
      });
  },
  data: {
    name: "verify",
    description: "Verifies you on the discord.",
  },
};
