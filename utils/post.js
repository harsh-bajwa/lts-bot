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
      console.log("Information has been sent.");
      return json;
    } else {
      console.log(json);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { POST };
