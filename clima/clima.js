const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=6a463bc40bdc7f2035911a5a2c08a595&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}