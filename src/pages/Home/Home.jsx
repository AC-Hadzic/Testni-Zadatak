import { DropdownComponent } from '../../components/Dropdown/Dropdown';
import { TableComponent } from '../../components/Table/Table';
import React, { useState } from 'react';
import "../../assets/CSS/home-page.scss";
import { useFetch } from '../../hooks/useFetch';

export const DataForContext = React.createContext();

function Home() {

    const [envID, setEnvID] = useState(0);
    const URL = "https://raw.githubusercontent.com/AC-Hadzic/JSON-Fetch-Practice/main/data.json";
    const DATA = useFetch(URL); // Fetch podataka sa URL

    // Handler funkcija za setEnvID
    const setStateHandler = (data) => {
        setEnvID(data);
    };

    return (
        <>
        {/* Stvoren Context sa values koje su dostupne Table i Dropdown komponenti */}
            <DataForContext.Provider value={{
                data: DATA, 
                setEnvID: setStateHandler, 
                envID: envID
            }}>
                <div className='dropdown'>
                    <div className='center-dropdown'> 
                        <DropdownComponent />
                    </div>
                </div>

                <div className='table'>
                    <TableComponent />
                </div>            
            </DataForContext.Provider>
        </>
    )
}

export { Home };