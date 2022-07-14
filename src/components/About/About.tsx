import React from 'react';
import './About.css';
import {StringsList} from "../common/StringsList";

export const About = () => {
    return <div className="about">
        <h2>O projekcie</h2>
        <hr/>
        <p>Strona umożliwia wyświetlanie i dodawanie <strong>ciekawych miejscówek na mapie, które warto odwiedzić i
            gdzie warto
            polatać dronem.</strong></p>
        <p>Po wpisaniu miejscowości w wyszukiwarce zwracane są z bazy danych uprzednio dodane miejsca z ich krótkim
            opisem. Wyniki w danej miejscowości można dodatkowo zawęzić wpisując ulicę.</p>
        <p><strong>Aplikacja jest połączona z API pogodowym IMGW.</strong> Jeśli dana miejscowość posiada stację
            pogodową
            obsługiwaną przez IMGW to wyświetlane są dla niej ostatnie dostępne dane pogodowe.</p>
        <p>Dane pogodowe są walidowane i pojawia się odpowiednia informacja o tym czy aktualne warunki pogodowe są
            korzystne bądź nie do
            lotu.</p>
        <StringsList list={[
            "Obsługa dodawania (obsługę przy pomocy middleware'a 'multer' na [BE] przygotowano) i wyświetlnia zdjęć miejscówek,",
            "Obsługa rejestracji i logowania użytkowników (Passport JS),",
            "Umożliwienie dodawania / modyfikacji / usuwania miejscówek tylko dla osób zalogowanych (tylko w zakresie 'własnych' miejscówek),",
            "Znalezienie darmowego API z większą liczbą punktów (stacji) meteo i jego implementacja,",
            "Refactoring kodu."
        ]}>Najbliższe plany dot. dozbudowy projektu:</StringsList>
        <StringsList list={[
            "Node.js,",
            "framework Express,",
            "baza danych MySQL,",
            "TypeScript (backend + frontend),",
            "bibliotekę React."
        ]}>W projekcie wykorzystano:</StringsList>
    </div>
}
