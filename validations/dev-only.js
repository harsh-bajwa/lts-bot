module.exports = (interaction, commandObj, handler, client) => {
  if (commandObj.devOnly) {
    if (interaction.member.id !== "402351949795557387") {
      interaction.reply({
        content: "You do not have access to this command.",
        ephemeral: true,
      });
      return true;
    }
  }
};
