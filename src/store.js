import { makeAutoObservable } from 'mobx';

class Store {
    todoData = [
        { id: 1, name: 'Приготовить ужин', complited: false },
        { id: 2, name: 'Сходить на работу', complited: false },
        { id: 3, name: 'Прочитать книгу', complited: false },
        { id: 4, name: 'Позаниматься спортом', complited: false },
        { id: 5, name: 'Учиться программированию', complited: false },
    ];

    constructor() {
        makeAutoObservable(this)
    }

    addTodo = (todo) => {
        this.todoData.push(todo);
    };

    removeTodo = (id) => {
        this.todoData = this.todoData.filter((todo) => todo.id !== id);
    };

    compliteTodo = (id) => {
        this.todoData = this.todoData.map((todo) => todo.id === id
            ? { ...todo, complited: !todo.complited } : todo);
    }
}

export default new Store();
