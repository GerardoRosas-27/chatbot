const express = require("express");
const bodyParser = require("body-parser");
const enviar = require("./modelChat");
var fs = require("fs");


const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/chat",async function(req, res) {
    var result = req.body.messages[1];
   
    var mensaje = result.body;

    var autor = result.author; 
    var corte1 = autor.indexOf("@");
     var telefono = autor.substr(0,corte1);
    console.log(telefono);
    var entro = false;
    switch (mensaje) {
        case "hola":
           var datamensaje = {
                "phone": telefono,
                "body": "para el menu 1 = 1 || para el menu 2 = 2 || salir = salir"
            }
            var entro = true;
            break;
        case "1":
            var datamensaje = {
                "phone": telefono,
                "body": "entrastes al menu 1"
            }
            var entro = true;
           break;  
        case "2":
            var datamensaje = {
                "phone": telefono,
                "body": "entrastes al menu 2"
            }
           var entro = true;
           break; 
           case "salir":
            var datamensaje = {
                "phone": telefono,
                "body": "Grasias, si quieres entrar de nuevo escribe hola"
            }
           var entro = true;
           break;  
        default:
            break;
    }

  
    if(entro){
        const result = await enviar.post('https://eu97.chat-api.com/instance86894/sendMessage?token=90jjwn8m91ttl8un', datamensaje);
    }
return res.json(req.body);
});


restService.post("/corte",async function(req, res) {
    var contents = fs.readFileSync("usuario.json");
    // Define to JSON type
    var mensajes = JSON.parse(contents);
    var result = mensajes.messages[0];
    console.log(mensajes.messages[0]);
    var autor = result.author;
    
    var corte1=autor.indexOf("@");
     var telefono =autor.substr(0,corte1);
    console.log(telefono);
return res.json(req.body);
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
