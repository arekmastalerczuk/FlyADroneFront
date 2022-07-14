import React from 'react';
import './About.css';
import {StringsList} from "../common/StringsList";

export const About = () => {
    return <div className="about">
        <h2>O projekcie</h2>
        <hr/>
        <p>Strona umożliwia wyświetlanie i dodawanie ciekawych miejscówek na mapie, które warto odwiedzić i gdzie warto
            polatać dronem.</p>
        <p>Po wpisaniu miejscowości w wyszukiwarce zwracane są z bazy danych uprzednio dodane miejsca z ich krótkim
            opisem. Wyniki w danej miejscowości można dodatkowo zawęzić wpisując ulicę.</p>
        <p>Aplikacja jest połączona z API pogodowym IMGW. Jeśli dana miejscowość jest posiada stację pogodową
            obsługiwaną przez IMGW to wyświetlane są dla niej ostatnie dostępne dane pogodowe.</p>
        <p>Dane pogodowe są walidowane i pojawia się odpowiednia informacja o tym czy warunki są dobre bądź niedobre do
            lotu w chwili obecnej.</p>
        <StringsList list={[
            "Obsługa dodawania i wyświetlnia zdjęć miejsówek,",
            "Obsługa rejestracji i logowania (Passport JS),",
            "Umożliwienie dodawania / modyfikacji / usuwania miejscówek tylko dla osób zalogowanych (tylko w zakresie własnych miejscówek),",
            "Znalezienie darmowego API z większą liczbą punktów (stacji) meteo i jego implementacja,",
            "Refactoring kodu."
        ]}>Najbliższe plany dot. dozbudowy projektu:</StringsList>
    </div>
}
