"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _Users = _interopRequireDefault(require("../Models/Users.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config.js");

var route = (0, _express.Router)();
route.get("/", function (req, res) {
  res.send("hello");
});
route.post("/register", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, usuario, password, hashPassword, nuevoUsuario;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, usuario = _req$body.usuario, password = _req$body.password;
            _context.prev = 1;
            _context.next = 4;
            return _bcryptjs["default"].hash(password, 8);

          case 4:
            hashPassword = _context.sent;
            nuevoUsuario = (0, _Users["default"])({
              usuario: usuario,
              password: hashPassword
            });
            _context.next = 8;
            return nuevoUsuario.save();

          case 8:
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            res.status(200).json({
              userCreated: false,
              msg: "Error al guardar el usuario ".concat(_context.t0.message)
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
route.post("/login", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, usuario, password, getUser, validatePassword, getId, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, usuario = _req$body2.usuario, password = _req$body2.password;
            _context2.next = 3;
            return _Users["default"].findOne({
              usuario: usuario
            });

          case 3:
            getUser = _context2.sent;

            if (!getUser) {
              _context2.next = 11;
              break;
            }

            _context2.next = 7;
            return _bcryptjs["default"].compare(password, getUser.password);

          case 7:
            validatePassword = _context2.sent;

            if (validatePassword) {
              getId = getUser._id;
              token = _jsonwebtoken["default"].sign({
                getId: getId
              }, "KsWeOnXZgx", {
                expiresIn: "1d"
              });
              res.json({
                auth: true,
                password: true,
                token: token,
                user: getUser.usuario
              });
            } else {
              res.json({
                auth: false,
                msg: "contraseña incorrecta"
              });
            }

            _context2.next = 12;
            break;

          case 11:
            res.json({
              auth: false,
              msg: "usuario no existe"
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = route;
exports["default"] = _default;