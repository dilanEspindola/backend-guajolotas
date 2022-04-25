import mongoose, { Schema, model } from "mongoose";

const bebidasSchema = new Schema(
  {
    nombre: { type: String, trim: true },
    imagen: { type: String, required: true },
    precio: { type: String },
    sabor: { type: [Object], required: true },
  },
  { versionKey: false }
);

export default model("bebidas", bebidasSchema);
