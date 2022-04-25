import mongoose, { Schema, model } from "mongoose";

const allDataSchema = new Schema(
  {
    guajolotas: [{ type: mongoose.Types.ObjectId, ref: "guajolotas" }],
    bebidas: [{ type: mongoose.Types.ObjectId, ref: "bebidas" }],
    tamales: [{ type: mongoose.Types.ObjectId, ref: "tamales" }],
  },
  { versionKey: false }
);

export default model("allData", allDataSchema);
