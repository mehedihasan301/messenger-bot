const login = require("facebook-chat-api");

login({ email: process.env.EMAIL, password: process.env.PASSWORD }, (err, api) => {
  if (err) return console.error("Login error:", err);

  console.log("Bot is now listening...");

  api.listenMqtt((err, message) => {
    if (err) return console.error(err);

    const command = message.body.toLowerCase();

    if (command === "!hello") {
      api.sendMessage("Hello from your bot!", message.threadID);
    }

    if (command === "!anime") {
      api.sendMessage("Try One Piece, Jujutsu Kaisen or Demon Slayer!", message.threadID);
    }
  });
});
