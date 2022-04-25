import { Router } from "express";
import Bebidas from "../Models/Bebidas.js";

const route = Router();

route.get("/", async (req, res) => {
  try {
    const bebidas = await Bebidas.find();
    if (bebidas < 1) return res.send("there are not anything");
    res.json(bebidas);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const bebida = await Bebidas.findById(req.params.id);
    res.json(bebida);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.post("/", async (req, res) => {
  try {
    const { nombre, imagen, precio, sabor } = req.body;
    const nuevaBebida = new Bebidas({ nombre, imagen, precio, sabor });
    const guardarBebida = await nuevaBebida.save();
    res.json(guardarBebida);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.put("/:id", async (req, res) => {
  try {
    const updateBebidda = await Bebidas.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ msg: "bebida actualizada" });
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    await Bebidas.remove({ _id: req.params.id });
    res.json({ msg: "bebida eliminada" });
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});
export default route;
