exports.handler = function (context, event, callback) {
  console.log(`send-sms called.`);
  console.dir(event);
  const client = context.getTwilioClient();
  client.messages
    .create({
      body: "Hello, I'm M5Stack!",
      from: "M5Stack",
      to: context.TO,
    })
    .then((message) => {
      callback(null, message.sid);
    })
    .catch((err) => {
      callback(err);
    });
};
