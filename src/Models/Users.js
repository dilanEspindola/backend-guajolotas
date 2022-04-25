import mongoose, { Schema, model } from "mongoose";

const usersSchema = new Schema(
  {
    usuario: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

export default model("users", usersSchema);
