// src/components/HeaderComponent/HeaderComponent.jsx
import React from "react";
import { Toaster } from "react-hot-toast";
import "../../assets/CSS/header.scss";
import { NavButtonComponent } from "../../components/ButtonComponent/NavButtonComponent";
import { showPageNotFoundError } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { ThemeToggleComponent } from "../../components/ButtonComponent/ThemeToggleComponent";
import { LogoComponent } from "../../components/ButtonComponent/LogoComponent";

function HeaderComponent() {
    const urlParams = new URLSearchParams(window.location.search);
    const env = urlParams.get("env");
    const navigate = useNavigate();

    const handleNavigation = (event) => {
        event.preventDefault();
        env === null && navigate(-1);
    };

    return (
        <header className='header'>
            <Toaster />

            <div className='banner'>
                <LogoComponent 
                    logo={logo}
                    alt="Logo Image"
                    onClick={(e) => handleNavigation(e)}
                />

                <ThemeToggleComponent />
            </div>

            <nav className='nav'>
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
            </nav>
        </header>
    );
}

export { HeaderComponent };