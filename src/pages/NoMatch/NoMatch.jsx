import "../../assets/CSS/global.css";
import "../../assets/CSS/no-match.scss";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";

function NoMatch() {
    return (
        <>
            <div className="no-match-container">
                <p>The selected path is non-existent!</p>
                <p>Click the button below to return to the homepage.</p>
                
                <ButtonComponent to="/" text ="Go back to home page" />
            </div>
        </>
    )
}

export { NoMatch };