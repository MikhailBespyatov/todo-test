import React from 'react';
import { NavLink } from 'react-router-dom';
import './app-header.scss';

const AppHeader = () => {
    return (
        <div className="app-header">
            <h1 className="app-header-title">Todo List</h1>
            <nav className="app-header-nav">
                <NavLink to="/" exact
                    className="nav-link">Активные</NavLink>
                <NavLink to="/complited"
                    className="nav-link">Выполненные</NavLink>
            </nav>
        </div>
    );
};

export default AppHeader;