require("dotenv").config();
const webhooks = require("twilio/lib/webhooks/webhooks");

const url = process.env.URL;
const params = {};

const authToken = process.env.AUTH_TOKEN;

const signature = webhooks.getExpectedTwilioSignature(authToken, url, params);
console.log(signature);
