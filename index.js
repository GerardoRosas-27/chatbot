// First of all - set a webhook to URL like http://your_website.com/my_webhook_url

// Require Express JS и Body Parser for JSON POST acceptance
var app = require('express')();
var bodyParser = require('body-parser');
let enviar = require('./modelo');

app.use(bodyParser.json());
const webhookurl = "http://chatbotchapi.herokuapp.com/";

// Handle POST request
app.post(webhookurl, function (req, res) {
    var data = req.body; // New messages in the "body" variable
    for (var i = 0; i < data.messages.length; i++) { // For each message
        var message = data.messages[i];
        console.log(message.author + ': ' + message.body); //Send it to console
        
    }
    const data = {
        "phone": "5217561019626",
        "body": "texto cachado en el servidor"
    }
    const result = await enviar.post('https://eu34.chat-api.com/instance86436/sendMessage?token=hjzo5kodgia081x5', data);
    res.send('Ok'); //Response does not matter
});

app.listen(80);