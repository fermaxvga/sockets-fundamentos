var socket = io();
socket.on('connect', function() {
    console.log('Conectado al sevidor');
});

//ON: Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//EMIT: Enviar Información 
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta del server', resp);
});
//Esuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});