import mongoose, { Schema, model } from "mongoose";

const guajolotasSchema = new Schema(
  {
    nombre: { type: String, trim: true },
    imagen: { type: String, required: true },
    precio: { type: String },
    sabor: { type: [Object], required: true },
    bebidas: [{ type: mongoose.Schema.Types.ObjectId, ref: "bebidas" }],
  },
  { versionKey: false }
);

export default model("guajolotas", guajolotasSchema);
