import React, { useContext, useState } from 'react';
import StoreContext from '../../store-context';
import './add-todos.scss';

const AddTodos = () => {
    const store = useContext(StoreContext);
    const [name, setName] = useState('');
    const [id, setId] = useState(100);

    const { addTodo } = store;

    const onInputChange = (evt) => {
        setName(evt.target.value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        setId((id) => id + 1);
        const newTodo = {
            id,
            name,
            complited: false
        };
        addTodo(newTodo);
        setName('');
    }

    return (
        <form className="add-todos-panel" onSubmit={onSubmit}>
            <input className="add-todos-input" type="text" placeholder="Добавьте задачу"
                onChange={onInputChange} value={name}/>
            <button className="add-todos-button">
                <span>Добавить</span>
            </button>
        </form>
    );
};

export default AddTodos;