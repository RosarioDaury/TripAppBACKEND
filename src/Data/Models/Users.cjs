"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Username: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    FavoritePlaces: { type: [String], "default": [] }
});
var User = (0, mongoose_1.model)('Users', UserSchema);
exports.User = User;
