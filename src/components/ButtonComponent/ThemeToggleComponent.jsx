import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeToggleComponent() {
    const { toggleTheme } = useContext(ThemeContext);
    const page = document.getElementById("page-wrap");
    return (
        <div className="theme_button">
            <button onClick={toggleTheme}>
                <i className={page?.classList == "dark-mode" ? "bi bi-brightness-high-fill" : "bi bi-moon-stars-fill"}></i>
            </button>
        </div>
    )
}

export { ThemeToggleComponent };