import httpCommon from "../http-common";

class TodoService {
    getAllTodos = () => {
        return httpCommon.get("/todos");
    }

    getTodo(id) {
        return httpCommon.get(`/todos/${id}`);
    }

    createTodo(data) {
        return httpCommon.post("/todos", data);
    }

    updateTodo(id, data) {
        return httpCommon.put(`/todos/${id}`, data);
    }

    deleteTodo(id) {
        return httpCommon.delete(`/todos/${id}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoService();