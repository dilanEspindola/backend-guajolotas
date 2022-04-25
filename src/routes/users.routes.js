import { Router } from "express";
import Users from "../Models/Users.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { SECRET } from "../config.js";
const route = Router();

route.get("/", (req, res) => {
  res.send("hello");
});

route.post("/register", async (req, res) => {
  const { usuario, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 8);
    const nuevoUsuario = Users({ usuario: usuario, password: hashPassword });
    await nuevoUsuario.save();
  } catch (error) {
    res.status(200).json({
      userCreated: false,
      msg: `Error al guardar el usuario ${error.message}`,
    });
  }
});

route.post("/login", async (req, res) => {
  const { usuario, password } = req.body;

  const getUser = await Users.findOne({ usuario: usuario });
  if (getUser) {
    const validatePassword = await bcrypt.compare(password, getUser.password);
    if (validatePassword) {
      const getId = getUser._id;
      const token = jsonwebtoken.sign({ getId }, "KsWeOnXZgx", {
        expiresIn: "1d",
      });
      res.json({ auth: true, password: true, token, user: getUser.usuario });
    } else {
      res.json({ auth: false, msg: "contraseña incorrecta" });
    }
  } else {
    res.json({ auth: false, msg: "usuario no existe" });
  }
});

export default route;
