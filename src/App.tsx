import React, {useState} from 'react';
import {Header} from './components/layout/Header/Header';
import {Footer} from "./components/layout/Footer/Footer";
import {MainContent} from "./components/layout/MainContent/MainContent";
import {SearchContext} from './contexts/search.context';

export const App = () => {
    const [town, setTown] = useState('');
    const [street, setStreet] = useState('');
    return (
        <SearchContext.Provider value={{town, setTown, street, setStreet}}>
            <Header/>
            <MainContent/>
            <Footer/>
        </SearchContext.Provider>
    );
};
