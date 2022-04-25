import { Router } from "express";
import Guajolotas from "../Models/Guajolotas.js";

const route = Router();

route.get("/", async (req, res) => {
  const guajolotas = await Guajolotas.find().populate("bebidas");
  if (guajolotas < 1) return res.send("there are not anything");
  res.json(guajolotas);
});

route.get("/:id", async (req, res) => {
  try {
    const guajolota = await Guajolotas.findById(req.params.id).populate(
      "bebidas"
    );
    res.json(guajolota);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.post("/", async (req, res) => {
  try {
    const { nombre, imagen, precio, sabor, bebidas } = req.body;
    const nuevoGuajolota = new Guajolotas({
      nombre,
      imagen,
      precio,
      sabor,
      bebidas,
    });
    const guardarGuajolota = await nuevoGuajolota.save();
    res.json(guardarGuajolota);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.put("/:id", async (req, res) => {
  try {
    const updateGuajolota = await Guajolotas.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ msg: "Gualolota actualizada" });
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    await Guajolotas.remove({ _id: req.params.id });
    res.send("Guajolota eliminado");
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

export default route;
