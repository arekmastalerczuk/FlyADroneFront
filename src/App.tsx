import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {SearchContext} from './contexts/search.context';
import {Header} from './components/layout/Header/Header';
import {MainContent} from "./components/layout/MainContent/MainContent";
import {Footer} from "./components/layout/Footer/Footer";
import {AddForm} from './components/AddForm/AddForm';

export const App = () => {
    const [town, setTown] = useState('');
    const [street, setStreet] = useState('');
    return (
        <SearchContext.Provider value={{town, setTown, street, setStreet}}>
            <Header/>
            <Routes>
                <Route path="/" element={<MainContent/>}/>
                <Route path="/add" element={<AddForm/>}/>
            </Routes>
            <Footer/>
        </SearchContext.Provider>
    );
};
