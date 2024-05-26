import { ServerDetails } from "./pages/ServerDetails/ServerDetails";
import { Route, Routes } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { AppWrapper } from "./layout/AppWrapper/AppWrapper";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppWrapper />}>
                <Route index element={<HomePage />} />
                <Route path=":server/:id" element={
                    <ServerDetails
                        title={<>
                            <i className="bi bi-server" />
                            Server details
                        </>}
                        text="Below you can find a detailed list of informations regarding selected server."
                    />
                } />
                <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}

export { App };
