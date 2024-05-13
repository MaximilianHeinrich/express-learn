import {Todo} from "./todo.model";

const todos: Todo[] = [];

export const getTodos = async () => {
    return todos;
}

export const createTodo = async (todo: Todo) => {
    todo.id = todos.length + 1;
    todos.push(todo)
    return todo;
}

export const getTodoById = async (id: number) => {
    return todos[id - 1];
}

export const patchTodoById = async (id: number, updatedTodo: Todo) => {
    const index = todos.findIndex(t => t.id === id);

    if (index !== -1) {
        todos[index] = { ...todos[index], ...updatedTodo };
        return todos[index];
    }
}

export const deleteTodoById = async (id: number) => {
    delete todos[id - 1];
}

