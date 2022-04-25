import { Router } from "express";
import Tamales from "../Models/Tamales";

const route = Router();

route.get("/", async (req, res) => {
  try {
    const tamales = await Tamales.find().populate("bebidas");
    if (tamales < 1) return res.send("there are not anything");
    res.json(tamales);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const tamal = await Tamales.findById(req.params.id).populate("bebidas");
    res.json(tamal);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.post("/", async (req, res) => {
  try {
    const { nombre, imagen, precio, sabor, bebidas } = req.body;
    const nuevoTamal = new Tamales({
      nombre,
      imagen,
      precio,
      sabor,
      bebidas,
    });
    const guardarTamal = await nuevoTamal.save();
    res.json(guardarTamal);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.put("/:id", async (req, res) => {
  try {
    const updateTamal = await Tamales.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ msg: "Tamal actualizado" });
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    await Tamales.remove({ _id: req.params.id });
    res.send("Tamal eliminado");
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

export default route;
