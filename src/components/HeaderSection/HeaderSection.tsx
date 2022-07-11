import React from 'react';
import {Btn} from "../common/Btn";
import './HeaderSection.css';

export const HeaderSection = () => {
    return (
        <section className="header__section">
            <h1 className="header__title"><strong>Dronowisko</strong> - świat okiem drona</h1>
            <Btn to="/add" text="Dodaj miejscówkę"/>
        </section>
    )
}
