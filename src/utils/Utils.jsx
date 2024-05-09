export const statusIndicator = (data, type) => {
    return (
        <>
        {/* Drugi parametar more biti 'small' za manji prikaz statusa */}
            {data == 0 ? (<span className={type == "small" ? 'inactive-status-short' : "inactive-status"}> Inactive </span>) 
            : (<span className={type == "small" ? 'active-status-short' : "active-status"}> Active </span>)}         
        </>
    )
}