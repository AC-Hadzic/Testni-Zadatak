function DetailsComponent({ title, data }) {
    // Layout za retke s podacima za Modal i Table
    return (
        <div className="details-component">
            <h3 className="details-title"> {title} </h3>
            <div className="details-data"> {data}</div>
        </div>
    )
}

export { DetailsComponent };