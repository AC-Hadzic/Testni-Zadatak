import { Outlet } from "react-router-dom";
import "./appWrapper.scss"
import HeaderComponent from "./Header&Footer/headerComponent";
import FooterComponent from "./Header&Footer/footerComponent";

function AppWrapper() {
    return (
        <>
            <div className='page_wrap'>

                <HeaderComponent />

                <div className='content_container'>
                    <div className="content_wrap">
                        <Outlet />
                    </div>
                </div>

                <FooterComponent />
            </div>
        </>
      )
}

export default AppWrapper;