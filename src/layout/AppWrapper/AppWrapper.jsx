import { Outlet } from "react-router-dom";
import "../../assets/CSS/app-wrapper.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

function AppWrapper() {
    return (
        <>
            <div className='page-wrap'>
                <Header />
                <div className='content-container'>
                    <div className="content-wrap">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
      )
}

export { AppWrapper };