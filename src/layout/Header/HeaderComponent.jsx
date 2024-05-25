import { Toaster } from "react-hot-toast";
import "../../assets/CSS/header.scss";
import { NavButtonComponent } from "../../components/ButtonComponent/NavButtonComponent";
import { showPageNotFoundError } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
    const urlParams = new URLSearchParams(window.location.search);
    const env = urlParams.get("env")
    const navigate = useNavigate();

    const handleNavigation = (event) => {
        event.preventDefault();
        env === null && navigate(-1);
    };

    return (
        <div className='header'>
            <Toaster />

            <div className='banner'>
                Banner Location - image, logo etc.
            </div>

            <div className='nav'>
                <NavButtonComponent
                    text="Homepage"
                    icon="bi bi-house-door-fill"
                    onClick={(e) => handleNavigation(e)}
                />

                <NavButtonComponent
                    text="About"
                    icon="bi bi-person-fill"
                    onClick={() => showPageNotFoundError("This page currently does not exist.")}
                />

                <NavButtonComponent
                    text="Contacts"
                    icon="bi bi-chat-dots-fill"
                    onClick={() => showPageNotFoundError("This page currently does not exist.")}
                />

                <NavButtonComponent
                    text="Login"
                    icon="bi bi-box-arrow-in-right"
                    onClick={() => showPageNotFoundError("This page currently does not exist.")}
                />
            </div>
        </div>
    )
}

export { HeaderComponent };