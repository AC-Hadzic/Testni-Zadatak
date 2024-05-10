import { Link } from "react-router-dom";
import "../../assets/CSS/global.css";
import "../../assets/CSS/no-match.scss";

function NoMatch() {
    return (
        <>
            <div className="no-match-container">
                <p>The selected path is non-existent!</p>
                <p>Click the button below to return to the homepage.</p>
                
                <Link to="/">
                    <button className="button">
                        Homepage
                    </button>
                </Link>
            </div>
        </>
    )
}

export { NoMatch };