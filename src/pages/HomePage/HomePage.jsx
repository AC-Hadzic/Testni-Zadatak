import { DropdownComponent } from "../../components/Dropdown/DropdownComponent";
import { TableComponent } from "../../components/Table/TableComponent";
import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const DataForContext = React.createContext();

function HomePage() {
    const [envID, setEnvID] = useState(0);
    const URL = import.meta.env.VITE_API_URL;
    const DATA = useFetch(URL); // Fetch podataka sa URL

    // Handler funkcija za setEnvID
    const handleSetState = (data) => {
        setEnvID(data);
    };

    return (
        <>
            {/* Stvoren Context sa values koje su dostupne Table i Dropdown komponenti */}
            <DataForContext.Provider
                value={{
                    data: DATA,
                    setEnvID: handleSetState,
                    envID: envID,
                }}
            >
                <DropdownComponent />
                <TableComponent />
            </DataForContext.Provider>
        </>
    );
}

export { HomePage };