import { DropdownComponent } from "../../components/Dropdown/Dropdown";
import { TableComponent } from "../../components/Table/Table";
import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { handleSetState } from "../../utils/Utils";

export const DataForContext = React.createContext();

function Home() {
    const [envID, setEnvID] = useState(0);
    const URL =
        "https://raw.githubusercontent.com/AC-Hadzic/JSON-Fetch-Practice/main/data.json";
    const DATA = useFetch(URL); // Fetch podataka sa URL

    return (
        <>
            {/* Stvoren Context sa values koje su dostupne Table i Dropdown komponenti */}
            <DataForContext.Provider
                value={{
                data: DATA,
                setEnvID: (data) => {handleSetState(data, setEnvID);},
                envID: envID,
                }}
            >
                <DropdownComponent />
                <TableComponent />
            </DataForContext.Provider>
        </>
    );
}

export { Home };