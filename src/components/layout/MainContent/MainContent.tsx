import React from 'react';
import {Map} from "../../Map/Map";
import './MainContent.css';
import {SideMenu} from "../SideMenu/SideMenu";

export const MainContent = () => {
    return (
        <div className="main-content">
            <SideMenu/>
            <Map/>
        </div>
    )
}
