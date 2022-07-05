import React from 'react';
import {Header} from './components/layout/Header';
import {Footer} from "./components/layout/Footer";
import {MainContent} from "./components/layout/MainContent";

export const App = () => {
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    );
};
