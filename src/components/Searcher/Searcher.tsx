import React from 'react';
import {SecondHeader} from "../common/SecondHeader";
import {Btn} from "../common/Btn";
import './Searcher.css';

export const Searcher = () => {
    return <>
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
    </>
}
