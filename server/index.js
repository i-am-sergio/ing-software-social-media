import express from "express";
import cors from "cors";
// import { PORT } from "./config.js";

const app = express();

// middelware
app.use(cors());
app.use(express.json());

// app.use(indexRoutes);
// app.use(tasksRoutes);

// app.listen(PORT);
app.listen(3000);

console.log(`Server on port ${3000}`);