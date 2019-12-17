const express = require('express');
var request = require("request");
const morgan = require('morgan');
const enviar = require('./modeloChat');

const app = express();
//-- middlewares de la cabecera

app.use((req, res, next) => {
    // Dominio que tengan acceso (ej. 'http://example.com')
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });

  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

var options = { method: 'POST',
  url: 'https://api.mercury.chat/sdk/v1/whatsapp/webhook',
  qs: { api_token: '5df8f63a0c63380019241e21RJa4Zqs3J' },
  headers: { 'Content-Type': 'application/json' },
  body: 
   { is_webhook_enable: true,
     webhook_url: 'https://chatbotchapi.herokuapp.com/' },
  json: true };


request(options,async function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  const datamensaje = {
      "phone": "5217561019626",
      "body": "hola es una prueba del servidor"
  }
  const result = await enviar.post('https://eu97.chat-api.com/instance86894/sendMessage?token=90jjwn8m91ttl8un', datamensaje);
  console.log(result);
  console.log("actividad en whapsat");
  
});


app.post('https://chatbotchapi.herokuapp.com/',async function (req, res) {
    var data = req.body; // New messages in the "body" variable
    console.log(data); //Response does not matter

    const datamensaje = {
      "phone": "5217561019626",
      "body": "hola es una prueba del servidor"
  }
  const result = await enviar.post('https://eu97.chat-api.com/instance86894/sendMessage?token=90jjwn8m91ttl8un', datamensaje);

   res.json(data);
});




/*
var getwebhok = { method: 'GET',
  url: 'https://api.mercury.chat/sdk/v1/whatsapp/webhook',
  qs: { api_token: '5df8f63a0c63380019241e21RJa4Zqs3J' } };

request(getwebhok, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
*/


app.set('port', process.env.PORT || 4000);


app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
