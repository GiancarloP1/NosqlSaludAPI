import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/config/mongo";
import userRoutes from "./src/interfaces/routes/userRoutes";
import morgan from "morgan";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Registro de las rutas
app.use("/api", userRoutes); // Monta las rutas en el prefijo `/api`

// Conectar a la base de datos y levantar el servidor
const PORT = process.env.PORT || 3000;
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
