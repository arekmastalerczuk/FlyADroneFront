import {createContext} from "react";

export const SearchContext = createContext({
    town: '',
    setTown: (s: string) => {
    },
    street: '',
    setStreet: (s: string) => {
    },
})
