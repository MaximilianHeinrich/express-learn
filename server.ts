import express from "express";
import todoRouter from "./routes/todo.controller";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/todo", todoRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
