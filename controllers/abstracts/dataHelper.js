"use strict";
class DataHelper {

    static getData(_req) {
        var resources = require('../../config/resources');
        var data = {};
        data = _req.flash();
        data.title = 'no title';
        data.email = (!!_req.user) ? _req.user.email : null;
        data.role = (!!_req.user) ? resources.roles[_req.user.role] : null;
        data.isProfileFilled = (!!_req.user) ? _req.user.isProfileFilled : null;
        return data;
    }
}
module.exports = DataHelper;