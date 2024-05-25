import { Link } from "react-router-dom";
import "./../../assets/CSS/nav-button.scss";

function NavButtonComponent({ to, text, icon, ...rest }) {
    return (
        <div className="nav-button-container">
            <Link to={to}>
                <div className="nav-button" {...rest}>
                    <i className={icon}></i>
                    <span> {text} </span>
                </div>
            </Link>
        </div>
    )
}

export { NavButtonComponent };