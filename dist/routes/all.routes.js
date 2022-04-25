"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _All = _interopRequireDefault(require("../Models/All.js"));

var route = (0, _express.Router)();
route.get("/", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _All["default"].find().populate({
              path: "guajolotas",
              populate: {
                path: "bebidas",
                model: "bebidas"
              }
            }).populate({
              path: "bebidas"
            }).populate({
              path: "tamales",
              populate: {
                path: "bebidas",
                model: "bebidas"
              }
            });

          case 3:
            data = _context.sent;

            if (!(data < 1)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.json({
              msg: "vacio"
            }));

          case 8:
            res.json(data);

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.json({
              msg: "hubo un error ".concat(_context.t0)
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
route.post("/", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, guajolotas, bebidas, tamales, setData, guardarData;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, guajolotas = _req$body.guajolotas, bebidas = _req$body.bebidas, tamales = _req$body.tamales;
            setData = new _All["default"]({
              guajolotas: guajolotas,
              bebidas: bebidas,
              tamales: tamales
            });
            _context2.next = 5;
            return setData.save();

          case 5:
            guardarData = _context2.sent;
            res.json(guardarData);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.json({
              msg: "hubo un error ".concat(_context2.t0)
            });

          case 12:
            res.send("received");

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = route;
exports["default"] = _default;