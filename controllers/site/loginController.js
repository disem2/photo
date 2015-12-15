"use strict";

var DataHelper = require("../abstracts/dataHelper");

class LoginController {
    get(req, res, next) {
        var data =  DataHelper.getData(req);
        data.title = 'Login';
        data.breadcrumbs = [{text:'Home', link:"/"},{text:'Login', setActive: 'active'}];
        res.render("screens/login", data)
    };

    post(req, res, next) {
        var data =  DataHelper.getData(req);
        data.title = 'Login';
        data.breadcrumbs = [{text:'Home', link:"/"},{text:'Login', setActive: 'active'}];
        res.render("screens/login", data)
    };
}
var controllerInstance = new LoginController();
module.exports = controllerInstance;
