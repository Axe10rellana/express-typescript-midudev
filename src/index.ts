//importaciones
import express from "express";
import diaryRouter from "./routes/diaries";

//variables
const app = express();
const PORT = 3000;

//middlewares
app.use(express.json()); // transforma la req.body a un json
app.use("/api/diaries", diaryRouter);

//routes
app.get("/ping", (_req, res) => {
  console.info("someone pinged here!!!");
  res.send("pong");
});

//ejecucion del servidor
app.listen(PORT, () => {
  console.info(`Servidor corriendo en el puerto ${PORT}`);
});
