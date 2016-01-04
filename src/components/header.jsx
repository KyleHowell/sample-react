var React = require('react');
var UserStore = require('../stores/user-store');


var Header = React.createClass({
    getInitialState: function() {
        return {
            user: null,
            login: false
        }
    },

    componentWillMount: function() {
        var self = this;
        UserStore.listen(function(store) {
            self.setState({
                user: store.user,
                login: store.login
            })
        })
    },

    render: function() {
        var user = (this.state.user) ? this.state.user : "Sign up for an account"
        return (
            <div className="betyou-header">
                <h1 className="header">BetYou</h1>
                {user}
            </div>
        );
    }
});

module.exports = Header;
