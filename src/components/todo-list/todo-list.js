import React, { useContext } from 'react';
import TodoListItem from '../todo-list-item';
import StoreContext from '../../store-context';
import { observer } from 'mobx-react';
import './todo-list.scss';

const TodoList = ({todoData}) => {
    const store = useContext(StoreContext);

    return (
        <ul className="todo-list">
            {
                todoData.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <TodoListItem name={todo.name} complited={todo.complited}
                                removeTodo={store.removeTodo} 
                                compliteTodo={store.compliteTodo} id={todo.id}  />
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default observer(TodoList);