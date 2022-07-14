import React from 'react';
import {Btn} from "../common/Btn";
import './HeaderSection.css';

export const HeaderSection = () => {
    return (
        <section className="header__section">
            <a className="header__title" href="/"><h1><strong>Dronowisko</strong> - świat okiem drona</h1></a>
            <Btn to="/add" text="Dodaj miejscówkę"/>
        </section>
    )
}
