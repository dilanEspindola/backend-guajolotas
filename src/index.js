import express from "express";
import cors from "cors";
import "./database";

import usersRoute from "./routes/users.routes";
import guajolotasRoute from "./routes/guajolota.routes";
import bebidasRoute from "./routes/bebidas.routes";
import tamalesRoute from "./routes/tamales.routes";
import allRoute from "./routes/all.routes";

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
