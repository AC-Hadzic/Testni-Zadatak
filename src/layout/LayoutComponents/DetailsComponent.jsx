function DetailsComponent({ title, data }) {
    // Layout za retke s podacima za Modal i Table
    return (
        <div>
            <span> {title} </span>
            <br />
            {data}
        </div>
    )
}

export { DetailsComponent };