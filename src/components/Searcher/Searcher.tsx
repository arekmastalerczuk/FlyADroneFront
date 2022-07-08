import React, {FormEvent, useContext, useState} from 'react';
import {SecondHeader} from "../common/SecondHeader";
import {Btn} from "../common/Btn";
import './Searcher.css';
import {SearchContext} from "../../contexts/search.context";

export const Searcher = () => {
    const {town, setTown, street, setStreet} = useContext(SearchContext);
    const [inputTown, setInputTown] = useState(town);
    const [inputStreet, setInputStreet] = useState(street);

    const setTownAndStreetFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setTown(inputTown);
        setStreet(inputStreet);
    }

    return <>
        <SecondHeader text="Wyszukiwarka"/>
        <form onSubmit={setTownAndStreetFromLocalState}>
            <label>Miejscowość
                <input type="text" value={inputTown} onChange={e => setInputTown(e.target.value)}/>
            </label>
            <label>Ulica
                <input type="text" value={inputStreet} onChange={e => setInputStreet(e.target.value)}/>
            </label>
            <Btn text="Wyszukaj" style={{
                display: "block",
                margin: "10px auto",
            }}/>
        </form>
    </>
}
