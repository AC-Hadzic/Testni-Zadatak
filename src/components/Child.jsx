import "./style.scss"

function ChildComponent(props) {
    let text = "JOIASWEJGOISAEJG"

    return (
        <div className="Child">
            This is Child Component.
            <br></br>
            <span>Text from button:</span>
            <br></br>
            <button onClick={() => props.Handler(text)}>Click me for text!</button>

            <br />


            <button onClick={() => props.Handler("Empty")}>Click me for clear!</button>
        </div>
    )
}

export {ChildComponent}