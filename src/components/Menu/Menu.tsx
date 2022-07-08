import React from 'react';
import {MenuItem} from "../common/MenuItem";
import './Menu.css';

export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <MenuItem text="Strona główna" to="/"/>
                <MenuItem text="Rejestracja" to="/register"/>
                <MenuItem text="Logowanie" to="/login"/>
            </ul>
        </nav>
    )
}
