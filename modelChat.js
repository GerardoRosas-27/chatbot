let request = require('async-request');
  
const enviar = {};
enviar.post = async (url, data) => {
    try {
        const respuesta = await request(url, {
            // This example demonstrates all of the supported options.
            // Request method (uppercase): POST, DELETE, ...
            method: 'POST',
            data: data ,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //proxy: 'http://127.0.0.1:8000',
            // To create a new cookie jar.
            //cookieJar: true,
            // To use a custom/existing cookie jar.
            // https://www.npmjs.com/package/tough-cookie
           // cookieJar: new tough.CookieJar()
        });
        return respuesta;
    } catch (e) {
        return e;
    }
}
enviar.get = async (url) => {
    try {
        const respuesta = await request(url, {
            // This example demonstrates all of the supported options.
            // Request method (uppercase): POST, DELETE, ...
            method: 'GET',
            data: '' ,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //proxy: 'http://127.0.0.1:8000',
            // To create a new cookie jar.
            //cookieJar: true,
            // To use a custom/existing cookie jar.
            // https://www.npmjs.com/package/tough-cookie
           // cookieJar: new tough.CookieJar()
        });
        return respuesta;
    } catch (e) {
        return e;
    }
}
module.exports = enviar;
