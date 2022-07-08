import React from 'react';
import {Searcher} from "../../Searcher/Searcher";
import {WeatherInfo} from "../../WeatherInfo/WeatherInfo";
import './SideMenu.css';

export const SideMenu = () => {
    return (
        <div className="side-menu">
            <Searcher/>
            <WeatherInfo/>
        </div>
    )
}
