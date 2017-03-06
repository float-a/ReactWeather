var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWheatherMap = require('OpenWheatherMap');

var Weather = React.createClass({
    getDefaultProps: function() {
        return {
            title: "Get Weather"
        }
    },
    getInitialState() {
        return {
            isLoading: false  
        }
    },

    handleSearch(location) {
        var that = this;
        
        //debugger;

        this.setState({isLoading: true})
       OpenWheatherMap.getTemp(location).then(function(temp){
           that.setState({
               location: location,
               temp: temp,
               isLoading: false
           })
       }, function(errorMessage){
           that.setState({isLoading: false});
           console.log(errorMessage);           
           alert(errorMessage);
       });

    },

    render: function() {
        var {location, temp, isLoading} = this.state;
        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp}  />
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} /> 
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;