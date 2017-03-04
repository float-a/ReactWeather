var axios = require('axios');

const OPEN_WHEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d6e5ea214ab03302f24e7b0591a84c49&units=metric';

// d6e5ea214ab03302f24e7b0591a84c49

module.exports = {
    getTemp(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WHEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log(requestUrl);
        return axios.get(requestUrl).then(function(response) {
            debugger;
            if(response.data.cod && response.data.message) {
                throw new Error(response.data.message);

            } else {
               console.log(response.data.main.temp);
                return response.data.main.temp;
            }
        }, function(response) {
            throw new Error(response.data.message);
        }); 
    }
}