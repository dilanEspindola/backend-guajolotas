"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("./database.js");

var _usersRoutes = _interopRequireDefault(require("./routes/users.routes.js"));

var _guajolotaRoutes = _interopRequireDefault(require("./routes/guajolota.routes.js"));

var _bebidasRoutes = _interopRequireDefault(require("./routes/bebidas.routes.js"));

var _tamalesRoutes = _interopRequireDefault(require("./routes/tamales.routes.js"));

var _allRoutes = _interopRequireDefault(require("./routes/all.routes.js"));

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000; // middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])()); // routes

app.use(_allRoutes["default"]);
app.use("/users", _usersRoutes["default"]);
app.use("/guajolotas", _guajolotaRoutes["default"]);
app.use("/bebidas", _bebidasRoutes["default"]);
app.use("/tamales", _tamalesRoutes["default"]); // starting server

app.listen(PORT, function () {
  console.log("server running on port", PORT);
});