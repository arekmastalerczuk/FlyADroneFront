import React from 'react';
import './App.css';

export const App = () => {
    return (
        <>
            <header className="header">
                <section className="header__section">
                    <h1 className="header__title"><strong>Dronowisko</strong> - świat okiem drona</h1>
                    <button className="header__button">Dodaj miejscówkę</button>
                </section>
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__item"><a className="menu__link" href="/">Strona główna</a></li>
                        <li className="menu__item"><a className="menu__link" href="/register">Rejestracja</a></li>
                        <li className="menu__item"><a className="menu__link" href="/login">Logowanie</a></li>
                    </ul>
                </nav>
            </header>
            <div className="main-content">
                <div className="search">
                    <h2 className="search__title">Wyszukiwarka</h2>
                    <label>Miejscowość
                        <input type="text"/>
                    </label>
                    <label>Ulica
                        <input type="text"/>
                    </label>
                    <button className="search__button">Wyszukaj</button>
                    <section className="weather-info">
                        <h2 className="weather-info__title">Warunki pogodowe</h2>
                    </section>
                </div>
                <div className="map">
                    Mapa
                </div>
            </div>
            <footer className="footer"><p className="footer__copyrights">&copy; {new Date().getFullYear()} Arkadiusz
                Mastalerczuk</p></footer>
        </>
    );
};
