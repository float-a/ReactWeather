var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWheatherMap = require('OpenWheatherMap');
var ErrorModal = require('ErrorModal');

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

        this.setState({
            isLoading: true, 
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

       OpenWheatherMap.getTemp(location).then(function(temp){
           that.setState({
               location: location,
               temp: temp,
               isLoading: false
           });
       }, function(e){
           that.setState({
               isLoading: false, 
               errorMessage: e.message
            });
       });

    },

    componentDidMount() {
        var location = this.props.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location) 
            window.location.hash = '#/';  
        }
    },

    componentWillReceiveProps(newProps) {
        var location = newProps.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location) 
            window.location.hash = '#/';  
        }
    },

    render: function() {
        var {location, temp, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp}  />
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} />
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} /> 
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;