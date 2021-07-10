import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddTodos from '../add-todos/add-todos';
import AppHeader from '../app-header';
import { observer } from 'mobx-react';
import { ActiveTodos, ComplitedTodos } from '../pages';

import './app.scss';

const App = () => {
    return (
    <div className="app">   
        <AppHeader />
            <Route>
                <Switch>
                    <Route path='/' component={ActiveTodos} exact/>
                    <Route path='/complited' component={ComplitedTodos} />
                </Switch>
            </Route>
        <AddTodos />
    </div>
    );
};

export default observer(App);