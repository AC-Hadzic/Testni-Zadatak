import './App.css'
import DropdownComponent from './components/dropdown'
import TableComponent from './components/table'
import { useState, useEffect } from 'react'

function App() {
    const [keyToTable, setKeyToTable] = useState('');
    const [FetchedData, setFetchedData] = useState([]);
    const URL = "https://raw.githubusercontent.com/AC-Hadzic/JSON-Fetch-Practice/main/data.json"
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
        {/* Oba childa dobivaju data iz fetcha. Dropdown dobiva set funkciju za vraćanje key-a iz selectane opcije. Isti key se šalje dalje u Table za prikaz. */}
        <DropdownComponent 
            keyToTable={setKeyToTable}
            dataToDropdown={FetchedData}
        />
        <TableComponent 
            keyFromDropdown={keyToTable}
            dataToTable={FetchedData}
        />

        {/* <BrowserRouter>
        <Routes>

          <Route path='/' element={<AppWrapperComponent />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Page title={"Contact"} description={"Contact Descrip"}/>}/>
            <Route path='/about' element={<Page title={"About us"} description={"About Descrip"}/>}/>
            
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/contacts' element={<Contact 
              email = "telesales@gmail.com"
              mob_show = "+385 022 123 321" 
              golub = "Oliver Golubović"
              />} 
            />
            <Route path='/blog' element={<Blog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />

            <Route path='/product' element={<Outlet />}>
              <Route index element={<ProductList title={"Default"} />} />
              <Route path='/product/:id' element={<SingleProduct />} />
            </Route>
          </Route> 
                  
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
