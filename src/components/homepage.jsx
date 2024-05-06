import DropdownComponent from './PageComponents/dropdown';
import TableComponent from './PageComponents/table';
import { useState, useEffect } from 'react'
import "./homepage.scss"

function HomePage() {
    const [keyToTable, setKeyToTable] = useState('');
    const [FetchedData, setFetchedData] = useState([]);
    const URL = "https://raw.githubusercontent.com/AC-Hadzic/JSON-Fetch-Practice/main/data.json";
    // const URL2 = "https://api.jsonbin.io/v3/b/662e5e75ad19ca34f8611f63"

    // Fetch podataka sa URL, kroz props šaljemo data childovima Dropdown i Table
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(URL

                // Ovo ispod treba ako pristup JSON-u traži autorizaciju, githubov page je public :D

                //     , {
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'X-Access-Key': '$2a$10$Pz0jsQh.XWuoTV8weiUMPOWdLldMMlzf0zOEs4aeApdTEU.QOzkQ2'
                //     }
                // }
            );
                const result = await response.json();
                // console.log("JSON received from Fetch:", result);
                setFetchedData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
        // console.log("Fetch Effect", data);
    }, []);

    // console.log("Fetch after Effect", data);

  return (
    <>
        <div className='dropdown'>
            <div className='center_dropdown'>
                <DropdownComponent 
                    keyToTable={setKeyToTable}
                    dataToDropdown={FetchedData}
                />
            </div>
        </div>

        <div className='table'>
            <TableComponent 
                keyFromDropdown={keyToTable}
                dataToTable={FetchedData}
            />
        </div>
    </>
  )
}

export default HomePage;