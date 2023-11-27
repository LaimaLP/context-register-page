import { createContext, useState } from 'react';

export const initialContext = {
    isLogedIn: false,
    updateLoginStatus: () => { },
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
    const [isLogedIn, setIsLogedIn] = useState(initialContext.isLogedIn);

    function updateLoginStatus(status) {
        console.log("test")
        setIsLogedIn(status);
    }

    const value = {
        isLogedIn,
        updateLoginStatus,
        testas:"testas",
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}