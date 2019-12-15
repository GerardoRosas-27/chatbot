
var express = require('express');
const morgan = require('morgan');
const path = require('path');
const Chapi = require('whatsapp-chapi');
const inst = "https://eu34.chat-api.com/instance86436";
const token = "hjzo5kodgia081x5";
const phone = "5217561019626";
//const url = "https://chatbot.herokuapp.com/";
const webhookUrl = "https://chatbotchapi.herokuapp.com/";


const app = express();
//app.use(url, bot.middleware());
const bot = new Chapi(inst, token, webhookUrl);

bot.signIn(phone)
.then(() => yourBot.doSomething())
.catch(err => console.log(err));

app.use(morgan('dev'));


app.post(webhookUrl,  function (req, res) {
    bot.sendMessage(req.body.messages[0].author, 'ECHO TEXT');
    console.log(req.body);
    res.sendStatus(200);
  });
 
// Wasn't that easy? Let's create HTTPS server and set the webhook:
const http = require('http');
const port = process.env.PORT || 4000;
 
// Chapi will push messages sent to this URL. Web server should be internet-facing.
http.createServer(app).listen(port, () => bot.setWebhook(webhookUrl));