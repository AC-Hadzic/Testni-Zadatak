import React from "react"
import { ContextB } from "./contextB";
import { ContextC } from "./contextC";

export const DataContext = React.createContext();
export const OtherDataContext = React.createContext();

const string1 = "Hellou from the other side!";
const string2 = "Hei";
function ContextA() {
    return (
        <div style={{backgroundColor: "red", height: "200px"}}>
            <DataContext.Provider value={{a: string1, c: string2}}>
                <OtherDataContext.Provider value={"More hello!"}>
                    < ContextB />    
                    < ContextC />    
                    Text from Parent            
                </OtherDataContext.Provider>
            </DataContext.Provider>            
        </div>

    )
}

export { ContextA };