import React, {useContext, useEffect, useState} from 'react';
import {SecondHeader} from "../common/SecondHeader";
import {SearchContext} from "../../contexts/search.context";
import {imgwInfo} from 'types';
import './WeatherInfo.css';
import {ReplacePolishAndSpecialChars} from "../../utils/replace-chars";


export const WeatherInfo = () => {

    const {town} = useContext(SearchContext);
    const [weatherInfo, setWeatherInfo] = useState<imgwInfo | null>(null);


    useEffect(() => {
        (async () => {
            const filteredTown = ReplacePolishAndSpecialChars(town);

            try {
                const res = await fetch(`https://danepubliczne.imgw.pl/api/data/synop/station/${filteredTown.toLowerCase()}`)

                if (res.status === 404) {
                    setWeatherInfo(null);
                    throw new Error(`Nie znaleziono danych pogodowych w API dla wskazanej miejscowości: ${town}.`)
                }

                const data = await res.json();

                setWeatherInfo({
                    stacja: data.stacja,
                    data_pomiaru: data.data_pomiaru,
                    godzina_pomiaru: Number(data.godzina_pomiaru),
                    temperatura: Number(data.temperatura),
                    predkosc_wiatru: Number(data.predkosc_wiatru),
                    wilgotnosc_wzgledna: Number(data.wilgotnosc_wzgledna),
                    suma_opadu: Number(data.suma_opadu),
                    cisnienie: Number(data.cisnienie),
                });
                console.log(data)
            } catch (err) {
                console.log(err);
            }
        })();
    }, [town]);

    return (
        <section className="weather-info">
            {
                ((town !== '') && (weatherInfo !== null))
                    ? <>
                        <SecondHeader text={`Warunki pogodowe dla miejscowości ${town.toUpperCase()}:`}/>
                        <p className="datetime">Stan na: {weatherInfo.data_pomiaru},
                            godz. {weatherInfo.godzina_pomiaru}:00</p>
                        <p>Temperatura: <strong>{weatherInfo.temperatura} °C</strong></p>
                        <p>Prędkość wiatru: <strong>{weatherInfo.predkosc_wiatru} m/s</strong></p>
                        <p>Suma opadu: <strong>{weatherInfo.suma_opadu} mm</strong></p>
                        <p>Wilgotność względna: <strong>{weatherInfo.wilgotnosc_wzgledna} %</strong></p>
                        <p>Ciśnienie: <strong>{weatherInfo.cisnienie} hPa</strong></p>
                        {
                            ((weatherInfo.suma_opadu > 1)
                                || (weatherInfo.predkosc_wiatru > 7.75)
                                || (weatherInfo.temperatura < 0)
                            )
                                ? <p className="weather-bad">niedobre by latać</p>
                                : <p className="weather-good">dobre by latać</p>
                        }
                    </>
                    : null
            }
        </section>
    )
}
