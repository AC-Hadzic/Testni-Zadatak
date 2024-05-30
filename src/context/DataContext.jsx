import React, {useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const DataContext = React.createContext();

function DataProvider({ children }) {
    const [envID, setEnvID] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams({ env: 0 });
    const URL = import.meta.env.VITE_API_URL;
    const DATA = useFetch(URL);

    const handleSetState = (data) => {
        setEnvID(data);
    };

    return (
        <DataContext.Provider
            value={{
                data: DATA,
                setEnvID: handleSetState,
                envID: envID,
                searchParams: searchParams,
                setSearchParams: setSearchParams,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider };