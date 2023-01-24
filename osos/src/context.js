import React from "react";
import { useState } from "react";
import { useContext } from "react";
import useFetch from "./useFetch";



const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("WAR")
    const { isLoading, isError, movie } = useFetch(`&S=${query}`);

    return (
        <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };

