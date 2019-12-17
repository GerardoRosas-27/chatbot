const express = require("express");
const bodyParser = require("body-parser");
const enviar = require("./modelChat");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/chat",async function(req, res) {
  const datamensaje = {
    "phone": "5215534122853",
    "body": "resultados" + req.body
}
const result = await enviar.post('https://eu97.chat-api.com/instance86894/sendMessage?token=90jjwn8m91ttl8un', datamensaje);
  return res.json(req.body);
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
