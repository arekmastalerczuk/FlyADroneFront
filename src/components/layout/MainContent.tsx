import React from 'react';
import {SecondHeader} from "../common/SecondHeader";
import {Btn} from "../common/Btn";
import {Map} from "../Map/Map";
import './MainContent.css';

export const MainContent = () => {
    return <>
        <div className="main-content">
            <div className="search">
                <SecondHeader text="Wyszukiwarka"/>
                <label>Miejscowość
                    <input type="text"/>
                </label>
                <label>Ulica
                    <input type="text"/>
                </label>
                <Btn text="Wyszukaj" style={{
                    display: "block",
                    margin: "10px auto",
                }}/>
                <section className="weather-info">
                    <SecondHeader text="Warunki pogodowe"/>
                </section>
            </div>
            <Map/>
        </div>
    </>
}
