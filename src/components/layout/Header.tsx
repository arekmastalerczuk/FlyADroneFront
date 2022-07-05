import React from 'react';
import './Header.css'
import {Btn} from "../common/Btn";
import {MenuItem} from "../common/MenuItem";

export const Header = () => {
    return <>
        <header className="header">
            <section className="header__section">
                <h1 className="header__title"><strong>Dronowisko</strong> - świat okiem drona</h1>
                <Btn text="Dodaj miejscówkę" style={{
                    marginRight: "200px",
                }}/>
            </section>
            <nav className="menu">
                <ul className="menu__list">
                    <MenuItem text="Strona główna" to="/"/>
                    <MenuItem text="Rejestracja" to="/register"/>
                    <MenuItem text="Logowanie" to="/login"/>
                </ul>
            </nav>
        </header>
    </>
}
