import React, {useContext} from 'react';
import TodoList from '../todo-list';
import StoreContext from '../../store-context';
import { observer } from 'mobx-react';

const ComplitedTodos = () => {
    const store = useContext(StoreContext);
    const { todoData } = store;
    
    const complitedTodos = todoData.filter((todo) => todo.complited);

    return <TodoList todoData={complitedTodos}/>;
};

export default observer(ComplitedTodos);