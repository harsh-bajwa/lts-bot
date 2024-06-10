module.exports = (message) => {
  if (!message.content.toLowerCase().includes("verify")) return;
  if (message.channel.id !== "1246221544838008853") return;

  try {
    const webhookArray = message.content.split(" ");
    const webhookArrayThird = webhookArray[2];
    const verifiedUserId = webhookArrayThird.replace(/[^0-9\.]+/g, "");

    const member = message.guild.members;
    message.delete();

    member.addRole({
      user: verifiedUserId,
      role: "1247018027963121694",
    });
  } catch (error) {
    console.log(`Error setting user to verified: ${error}`);
  }
};
