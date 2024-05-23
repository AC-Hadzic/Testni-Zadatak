import toast, { Toaster } from "react-hot-toast";
import "../../assets/CSS/header.scss";

function HeaderComponent() {

    function nullHandler() {
        return toast.error("This page currently does not exist.", { duration: 1800, style: { borderRadius: "25px" }, position:  (window.innerWidth) <= 720 && "bottom-center"})
    }

    return (
        <div className='header'>
            <Toaster />
            <div className='banner'>
                Banner Location - image, logo etc.

            </div>
            <div className='nav'>
                <div className="home" onClick={() => nullHandler()}>
                    <i className="bi bi-house-door-fill"></i> 
                    <span> HomePage </span>
                </div>

                <div className="about" onClick={() => nullHandler()}>
                    <i className="bi bi-person-fill"></i> 
                    <span> About </span>
                </div>

                <div className="contact" onClick={() => nullHandler()}>
                    <i className="bi bi-chat-dots-fill"></i> 
                    <span> Contacts </span>
                </div>

                <div className="login" onClick={() => nullHandler()}>
                    <i className="bi bi-box-arrow-in-right"></i> 
                    <span> Login </span>
                </div>
            </div>
        </div>
    )
}

export { HeaderComponent };