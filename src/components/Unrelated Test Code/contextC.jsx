import { useContext } from "react"
import { DataContext, OtherDataContext } from "./contextA"

function ContextC() {

    const {a, c} = useContext(DataContext);
    const b = useContext(OtherDataContext);

    return (
        <div style={{backgroundColor: "green"}}>
            <p>{a}</p>
            <p>{c}</p>
            <p>{b}</p>       
            <p>Text from Child</p>        
        </div>
    )
}

export { ContextC }