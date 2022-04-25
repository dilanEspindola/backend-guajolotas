import mongoose, { Schema, model } from "mongoose";

const tamalesSchema = new Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: String },
    sabor: { type: [Object], required: true },
    bebidas: [{ type: mongoose.Schema.Types.ObjectId, ref: "bebidas" }],
  },
  { versionKey: false }
);

export default model("tamales", tamalesSchema);
