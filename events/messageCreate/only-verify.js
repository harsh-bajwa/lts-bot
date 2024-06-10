/**
 * Delete messages that are not /verify to ensure that the discord channel doesn't get used for other things.
 */
module.exports = (message) => {
  if (message.content.toLowerCase().includes("verify")) return;
  if (message.channel.id !== "1246221544838008853") return;

  message.delete();
};
