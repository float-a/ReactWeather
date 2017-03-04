var React = require('react');

var WeatherMessage = ({temp, location}) => {
     return (
            <div>
                <h1>Sunt {temp} grade la {location}</h1>
            </div>
        );
}

module.exports = WeatherMessage;