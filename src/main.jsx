var React = require('react');
var Reflux = require('reflux');
var ReactDOM = require('react-dom');

var Header = require('./components/header.jsx');


var Main = React.createClass({
    render: function() {
        return (
            <div className='betyou-app'>
                <Header />
            </div>
        );
    }
});

ReactDOM.render(React.createElement(Main), document.getElementById('react-container'));
