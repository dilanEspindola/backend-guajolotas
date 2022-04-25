import mongoose from "mongoose";
import { MONGO_DB_URI } from "./config.js";

(async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://dilan:dilan3202280905@cluster-guajolotas.ddna5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log("db is connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
