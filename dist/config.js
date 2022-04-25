"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET = exports.MONGO_DB_URI = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var MONGO_DB_URI = process.env.MONGO_DB_URI_PROD;
exports.MONGO_DB_URI = MONGO_DB_URI;
var SECRET = process.env.SECRET_KEY;
exports.SECRET = SECRET;