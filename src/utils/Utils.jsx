export const statusIndicator = (data, type) => {
    return (
        <>
            {/* Drugi parametar more biti 'small' za manji prikaz statusa */}
            {data == 0 ? (<span className={type == "small" ? 'inactive-status-short' : "inactive-status"}> Inactive </span>)
                : (<span className={type == "small" ? 'active-status-short' : "active-status"}> Active </span>)}
        </>
    )
};

export const tableDataParser = (data, envID) => {
    const newData = envID && data &&
        data.map(item => ({
            id: item.id,
            application_id: item.application_id,
            name: item.name,
            description: item.description,
            date_created: item.date_created,
            status: item.status,
            admin: item.admin,
            ip: item.ip,
            key: item.id.toString(), // Dodan key radi .map funkcije
            serv_env: envID // keyFromDropdown bude prosljeđen u serverDetails radi lociranja na kojem se environmentu nalazi server 
        }))

    return newData
};

export const dropdownDataParser = (data) => {
    const newData = data ?
        data.map(item => ({
            key: item.id.toString(),
            label: item.environment,
        })) :
        [{
            key: "0",
            label: "Loading data..."
        }]

    return newData
};