import { ChildComponent } from "./Child"
import "./style.scss"
import { useState } from "react";
import { Button, Flex } from "antd";

function ParentComponent() {
    const [text, setText] = useState("Empty");

    function SendIt(x) {
        return setText(x)
    }

    return (
        <div className="Parent">
            This is Parent Component.
            <br></br>
            <span>Text from button:</span>
            <p> {text} </p>
            <div>
                <ChildComponent Handler={SendIt}/>
            </div>

            <Flex gap="small" wrap="wrap">
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Flex>
        </div>

        
    )
}

export {ParentComponent}