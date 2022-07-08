import React, {useContext} from 'react';
import {SecondHeader} from "../common/SecondHeader";
import {SearchContext} from "../../contexts/search.context";

export const WeatherInfo = () => {
    const {town} = useContext(SearchContext);

    return (
        <section className="weather-info">
            {
                (town)
                    ? <>
                        <SecondHeader text="Warunki pogodowe"/>
                        <p>dla miejscowości <strong>{town}</strong>:</p>
                    </>
                    : null
            }
        </section>
    )
}
