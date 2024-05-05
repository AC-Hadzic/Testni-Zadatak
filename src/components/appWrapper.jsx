import { Outlet } from "react-router-dom";
import "./appWrapper.scss"

function AppWrapper() {
    return (
        <>
            <div className='page_wrap'>
                <div className='top'>
                    <div className='banner'>
                        Banner Location - image, logo etc.
                    </div>
    
                    <div className='header'>
                        Header Location - place for a nav bar or something similar
                    </div>
                </div>

                <div className='content_container'>
                    <div className="content_wrap">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
      )
}

export default AppWrapper;