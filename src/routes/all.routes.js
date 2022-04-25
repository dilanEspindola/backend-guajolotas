import { Router } from "express";
import AllData from "../Models/All";
const route = Router();

route.get("/", async (req, res) => {
  try {
    const data = await AllData.find()
      .populate({
        path: "guajolotas",
        populate: {
          path: "bebidas",
          model: "bebidas",
        },
      })
      .populate({
        path: "bebidas",
      })
      .populate({
        path: "tamales",
        populate: {
          path: "bebidas",
          model: "bebidas",
        },
      });
    if (data < 1) {
      return res.json({ msg: "vacio" });
    } else {
      res.json(data);
    }
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
});

route.post("/", async (req, res) => {
  try {
    const { guajolotas, bebidas, tamales } = req.body;
    const setData = new AllData({ guajolotas, bebidas, tamales });
    const guardarData = await setData.save();
    res.json(guardarData);
  } catch (error) {
    res.json({ msg: `hubo un error ${error}` });
  }
  res.send("received");
});

export default route;
