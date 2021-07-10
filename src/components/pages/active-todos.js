import React, {useContext} from 'react';
import TodoList from '../todo-list';
import StoreContext from '../../store-context';
import { observer } from 'mobx-react';

const ActiveTodos = () => {
    const store = useContext(StoreContext);
    const { todoData } = store;
    const activeTodos = todoData.filter((todo) => !todo.complited);

    return <TodoList todoData={activeTodos}/>;
};

export default observer(ActiveTodos);