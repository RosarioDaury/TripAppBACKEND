"use strict";
exports.__esModule = true;
exports.Place = void 0;
var mongoose_1 = require("mongoose");
var LocationSchema = new mongoose_1.Schema({
    Longitude: { type: Number, required: true },
    Latitude: { type: Number, required: true },
    Country: { type: String, required: true },
    City: { type: String, required: true }
});
var PlacesSchema = new mongoose_1.Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Image: { type: String, required: true },
    Rate: { type: Number, required: true },
    Location: { type: LocationSchema, required: true }
});
var Place = (0, mongoose_1.model)('Places', PlacesSchema);
exports.Place = Place;
