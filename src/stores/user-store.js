var Reflux = require('reflux');
var Actions = require('../actions.js');

var UserStore = Reflux.createStore({
    _login: false,
    _user: null,

    init: function() {
        this.login = this._login;
        this.user = this._user;
        Actions.loginUser.listen(this._loginUser);
        Actions.logoutUser.listen(this._logoutUser);
        this.trigger(this);
    },

    getInitialState: function () {
        return {
            login: this._login,
            user: this._user
        }
    },

    _loginUser: function (user) {
        this.login = true;
        this.user = user;
        console.log(user + " logged in.")
        this.trigger(this);
    },

    _logoutUser: function () {
        this.login = false;
        this.user = null;
        console.log("Logged out successfully.");
        this.trigger(this);
    }
})

module.exports = UserStore;
