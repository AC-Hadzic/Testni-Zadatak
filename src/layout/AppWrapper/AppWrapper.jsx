import { Outlet } from "react-router-dom";
import "../../assets/CSS/app-wrapper.scss";
import { HeaderComponent } from "../Header/HeaderComponent";
import { FooterComponent } from "../Footer/FooterComponent";

function AppWrapper() {
    return (
        <>
            <div className='page-wrap'>
                <HeaderComponent />
                <div className='content-container'>
                    <div className="content-wrap">
                        <Outlet />
                    </div>
                </div>
                <FooterComponent />
            </div>
        </>
      )
}

export { AppWrapper };