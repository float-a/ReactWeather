var React = require('react');

var WeatherMessage = ({temp, location}) => {
     return (
                <h3 className="text-center">Sunt {temp} grade la {location}</h3>
        );
}

module.exports = WeatherMessage;