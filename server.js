import express from "express";
import routes from "./src/routes/routes.js";
import "./src/config/database.js";

const app = express();


app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log("server running on PORT 3333"));

