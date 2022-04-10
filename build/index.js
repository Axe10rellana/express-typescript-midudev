"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
//variables
const app = (0, express_1.default)();
const PORT = 3000;
//middlewares
app.use(express_1.default.json()); // transforma la req.body a un json
app.use("/api/diaries", diaries_1.default);
//routes
app.get("/ping", (_req, res) => {
    console.info("someone pinged here!!!");
    res.send("pong");
});
//ejecucion del servidor
app.listen(PORT, () => {
    console.info(`Servidor corriendo en el puerto ${PORT}`);
});
