import mongoose from "mongoose";
import { MONGO_DB_URI } from "./config.js";

(async () => {
  try {
    const db = await mongoose.connect(MONGO_DB_URI);
    console.log("db is connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
