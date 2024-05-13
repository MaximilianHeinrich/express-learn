import express from "express";
import {createTodo, deleteTodoById, getTodoById, getTodos, patchTodoById} from "./todo.service";

const router = express.Router();

router.get("/all", async (req, res, next) => {
    try {
        const todos = await getTodos();
        res.json(todos);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const todoId = parseInt(req.params.id);
        const todo = await getTodoById(todoId);

        if (!todo) {
            res.status(404).json({message: "Todo not found"});
            return;
        }

        res.json(todo);
    } catch (error) {
        next(error);
    }
});


router.post("/create", async (req, res, next) => {
    try {
        if (req.body && req.body.todo) {
            const todo = await createTodo(req.body.todo);
            res.json(todo);
        } else {
            res.status(400).json({message: "Invalid request"});
        }
    } catch (error) {
        next(error);
    }
});

router.patch("/edit/:id", async (req, res, next) => {
    try {
        const todoId = parseInt(req.params.id);
        const todo = await patchTodoById(todoId, req.body.todo);
        res.json(todo);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const todoId = parseInt(req.params.id);
        await deleteTodoById(todoId);
        res.status(200).json({ message: `Successfully deleted item with id: ${todoId}` })
    } catch (error) {
        next(error);
    }
});

export default router;
