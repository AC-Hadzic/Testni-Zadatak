import { ServerDetails } from './pages/ServerDetails/ServerDetails';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NoMatch } from './pages/NoMatch/NoMatch';
import { AppWrapper } from './layout/AppWrapper/AppWrapper';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<AppWrapper />}>
                    <Route index element={<Home />} />
                    <Route path='/:server/:id' element={<ServerDetails />} />
                    <Route path='*' element={<NoMatch />} />
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </>
    )
}

export { App };