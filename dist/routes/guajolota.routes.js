"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _Guajolotas = _interopRequireDefault(require("../Models/Guajolotas.js"));

var route = (0, _express.Router)();
route.get("/", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var guajolotas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Guajolotas["default"].find().populate("bebidas");

          case 2:
            guajolotas = _context.sent;

            if (!(guajolotas < 1)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.send("there are not anything"));

          case 5:
            res.json(guajolotas);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
route.get("/:id", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var guajolota;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Guajolotas["default"].findById(req.params.id).populate("bebidas");

          case 3:
            guajolota = _context2.sent;
            res.json(guajolota);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.json({
              msg: "hubo un error ".concat(_context2.t0)
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
route.post("/", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, nombre, imagen, precio, sabor, bebidas, nuevoGuajolota, guardarGuajolota;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, imagen = _req$body.imagen, precio = _req$body.precio, sabor = _req$body.sabor, bebidas = _req$body.bebidas;
            nuevoGuajolota = new _Guajolotas["default"]({
              nombre: nombre,
              imagen: imagen,
              precio: precio,
              sabor: sabor,
              bebidas: bebidas
            });
            _context3.next = 5;
            return nuevoGuajolota.save();

          case 5:
            guardarGuajolota = _context3.sent;
            res.json(guardarGuajolota);
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            res.json({
              msg: "hubo un error ".concat(_context3.t0)
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
route.put("/:id", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updateGuajolota;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Guajolotas["default"].findByIdAndUpdate(req.params.id, req.body);

          case 3:
            updateGuajolota = _context4.sent;
            res.json({
              msg: "Gualolota actualizada"
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.json({
              msg: "hubo un error ".concat(_context4.t0)
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
route["delete"]("/:id", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Guajolotas["default"].remove({
              _id: req.params.id
            });

          case 3:
            res.send("Guajolota eliminado");
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            res.json({
              msg: "hubo un error ".concat(_context5.t0)
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = route;
exports["default"] = _default;