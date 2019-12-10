const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido al canal'
    })


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Esuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*  if (mensaje.usuario) {
          
          callback({
                  respuesta: 'Salio OK'
              });
          } else {
              callback({
                  resp: 'BAD!!!'
              })
          }*/



    });


});