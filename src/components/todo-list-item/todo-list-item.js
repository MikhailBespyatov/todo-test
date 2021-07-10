import React from 'react';
import './todo-list-item.scss';
import '../common-scss/visually-hidden.scss';

const TodoListItem = ({ name, complited, id, removeTodo, compliteTodo }) => {
    const className = complited ? 'todo-list-link todo-list-link--complited'
        : 'todo-list-link';

    return (
        <span className="todo-list-item">
            <label className={className}>
                <input className="visually-hidden" type='checkbox' onClick={() => {
                compliteTodo(id)
            }}/>
                {name}
            </label>
            <button className="button button-trash" onClick={() => {
                removeTodo(id);
            }}>
                <span className="visually-hidden">Удалить задачу</span>
            </button>
        </span>
    );
};

export default TodoListItem;