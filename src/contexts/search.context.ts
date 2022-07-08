import {createContext} from "react";

export const SearchContext = createContext({
    city: '',
    setCity: (s: string) => {
    },
    street: '',
    setStreet: (s: string) => {
    },
})
