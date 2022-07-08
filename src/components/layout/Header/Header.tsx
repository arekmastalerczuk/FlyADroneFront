import React from 'react';
import './Header.css'
import {HeaderSection} from "../../HeaderSection/HeaderSection";
import {Menu} from "../../Menu/Menu";

export const Header = () => {
    return (
        <header className="header">
            <HeaderSection/>
            <Menu/>
        </header>
    )
}
