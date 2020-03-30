const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obetener el clima',
        demand: true
    }
}).argv;

/*
const lugar = lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(console.log);

const clima = clima.getClima(lat, lng)
    .then(console.log)
    .catch(console.log);
*/


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima ${direccion}`
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);