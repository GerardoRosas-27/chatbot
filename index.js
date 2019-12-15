'use strict';
var express = require('express');
const morgan = require('morgan');
const Chapi = require('whatsapp-chapi');
const inst = "https://eu34.chat-api.com/instance86436";
const token = "hjzo5kodgia081x5";
const phone = "5217561019626";
//const url = "https://chatbot.herokuapp.com/";
const url = "http://localhost:4000/";


const app = express();
//app.use(url, bot.middleware());
const bot = new Chapi(inst, token, url);

bot.signIn(phone)
.then(() => yourBot.doSomething())
.catch(err => console.log(err));

app.use(morgan('dev'));


bot.setWebhook(url)
  .then(() => yourBot.doSomething())
  .catch(err => console.log(err));

app.post(url,  function (req, res) {
    bot.sendMessage(req.body.messages[0].author, 'ECHO TEXT');
    console.log(req.body);
    res.sendStatus(200);
  });
 
// Wasn't that easy? Let's create HTTPS server and set the webhook:
const http = require('http');
const port = process.env.PORT || 4000;
 
// Chapi will push messages sent to this URL. Web server should be internet-facing.
const webhookUrl = process.env.WEBHOOK_URL;
http.createServer(app).listen(port, () => bot.setWebhook(webhookUrl));