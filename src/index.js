import express from "express";
import cors from "cors";
import "./database.js";

import usersRoute from "./routes/users.routes.js";
import guajolotasRoute from "./routes/guajolota.routes.js";
import bebidasRoute from "./routes/bebidas.routes.js";
import tamalesRoute from "./routes/tamales.routes.js";
import allRoute from "./routes/all.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use(allRoute);
app.use("/users", usersRoute);
app.use("/guajolotas", guajolotasRoute);
app.use("/bebidas", bebidasRoute);
app.use("/tamales", tamalesRoute);

// starting server
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
