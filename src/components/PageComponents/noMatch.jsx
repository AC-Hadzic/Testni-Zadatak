import { Link } from "react-router-dom";
import "../../index.css";
import "./noMatch.scss";

function NoMatch() {
    return (
        <>
            <div className="no_match_container">
                <p>The selected path is non-existent!</p>
                <p>Click the button below to return to the homepage.</p>
                <Link to="/"><button className="button"> Homepage </button></Link>  
            </div>
        </>
    )
}

export default NoMatch;