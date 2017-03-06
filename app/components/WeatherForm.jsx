var React = require('react');

var WeatherForm = React.createClass({
    
    handleSubmit(e) {
        e.preventDefault(); // prevents reloading the entire page

        var location = this.refs.location.value;
        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },


    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="location"/>
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;