import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <>
            <p>Route non existent.</p>

            <Link to="/"><button> Go to homepage </button></Link>  
        </>
    )
}

export default NoMatch;