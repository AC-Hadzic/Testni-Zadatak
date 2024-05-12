import { Button } from "antd";
import { Link } from "react-router-dom";
import "./../../assets/CSS/global.css";

function ButtonComponent({ to, text, ...rest }) {
// type i size imaju default vrijednosti, ako se oce pogaziti posalje se kroz props nove vrijednosti i pokupi ih {...rest}
    return (
        <div className="button-container">
            <Link to={to}>
                <Button className="button" type="primary" size="large" {...rest}>
                    <div>
                        {text}  
                    </div>
                </Button>
            </Link>
        </div>
    )
}

export { ButtonComponent };