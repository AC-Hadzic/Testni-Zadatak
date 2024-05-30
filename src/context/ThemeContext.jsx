import React, {useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../assets/CSS/themeColorsAnt";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        const savedThemeInStorage = localStorage.getItem("app-theme");

        // Provjera postoji li već tema u localStorage
        if (savedThemeInStorage) {
            const page = document.getElementById("page-wrap");
            setTheme(savedThemeInStorage == "dark" ? darkTheme : lightTheme);
    
            // Postavi className na wrapper
            if (page) {
                page.classList = savedThemeInStorage == "dark" ? "dark-mode" : "light-mode";
            }
        }
    }, []);
    
    const toggleTheme = () => {
        const page = document.getElementById("page-wrap");    
        
        // Postavlja temu i wrapper ClassName
        setTheme(theme == lightTheme ? darkTheme : lightTheme);
        if (page) {
            page.classList == "light-mode" ? page.classList = "dark-mode" : page.classList = "light-mode"
        }

        // Invertirano da radi kako treba
        localStorage.setItem("app-theme", theme == darkTheme ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };