const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*
const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obetener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(console.log);
    */

clima.getClima(32.549999, -114.860001)
    .then(console.log)
    .catch(console.log);