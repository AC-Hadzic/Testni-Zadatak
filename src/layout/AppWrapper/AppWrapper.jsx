import { Outlet } from "react-router-dom";
import "../../assets/CSS/app-wrapper.scss";
import "../../assets/CSS/dark-mode.scss";
import { HeaderComponent } from "../Header/HeaderComponent";
import { FooterComponent } from "../Footer/FooterComponent";
import { ThemeProvider } from "../../context/ThemeContext";

function AppWrapper() {
    return (
        <>
            <ThemeProvider>
                <div id="page-wrap" className="light-mode">
                    <div className='page-wrap'>
                        <HeaderComponent />
                        <div className='content-container'>
                            <div className="content-wrap">
                                <Outlet />
                            </div>
                        </div>
                        <FooterComponent />
                    </div>
                </div>                
            </ThemeProvider>
        </>
      )
}

export { AppWrapper };