import ServerDetails from './components/ServerDetails/serverDetails'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/homepage'
import NoMatch from './components/PageComponents/noMatch'
import AppWrapper from './components/appWrapper'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<AppWrapper />}>
                    <Route index element={<HomePage />} />
                    <Route path='/:server/:id' element={<ServerDetails />} />
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </>
    )
}

export default App