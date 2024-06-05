require("dotenv/config");

async function POST(obj, url) {
  try {
    //Settings of the 'POST' request
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    const response = await fetch(url, config);
    const json = await response.json();
    if (response.ok) {
      const usersDiscord = obj.discordName;
      console.log(`🔵 ${usersDiscord} has verified.🔵`);
      return json;
    } else {
      console.log(json);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { POST };
