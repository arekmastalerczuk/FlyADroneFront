import React, {useContext} from 'react';
import {Map} from "../../Map/Map";
import './MainContent.css';
import {SearchContext} from "../../../contexts/search.context";
import {SideMenu} from "../SideMenu/SideMenu";

export const MainContent = () => {
    const {city, setCity} = useContext(SearchContext);
    return (
        <div className="main-content">
            <SideMenu/>
            <Map/>
        </div>
    )
}
