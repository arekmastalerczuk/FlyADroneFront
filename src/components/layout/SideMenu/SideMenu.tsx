import React from 'react';
import {Searcher} from "../../Searcher/Searcher";
import {WeatherInfo} from "../../WratherInfo/WeatherInfo";
import './SideMenu.css';

export const SideMenu = () => {
    return (
        <div className="side-menu">
            <Searcher/>
            <WeatherInfo/>
        </div>
    )
}
