import toast from "react-hot-toast";

// Indikator aktivnosti za servere
export const statusIndicator = (data, type) => {
    return (
        <>
            {/* Drugi parametar more biti 'small' za manji prikaz statusa */}
            {data == 0 ? (<span className={type == "small" ? 'inactive-status-short' : "inactive-status"}> Inactive </span>)
                : (<span className={type == "small" ? 'active-status-short' : "active-status"}> Active </span>)}
        </>
    )
};

// Parsira data iz fetcha za potrebe tablice
export const tableDataParser = (data, envID) => {
    const newData = envID && data &&
        data.map(item => ({
            id: item.id,
            application_id: item.application_id,
            name: item.name,
            description: item.description,
            date_created: dateParser(item.date_created),
            status: item.status,
            admin: item.admin,
            ip: item.ip,
            key: item.id.toString(), // Dodan key radi .map funkcije
            serv_env: envID // keyFromDropdown bude prosljeđen u serverDetails radi lociranja na kojem se environmentu nalazi server 
        }))

    return newData
};

// Parsira data iz fetcha za potrebe dropdowna
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

// Parsira datume iz fetcha za jednostavniji prikaz formata
export const dateParser = (data) => {
    const date = new Date(data);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
};

// Vraća korisniku nekakav error info, npr. nefunkcionalni button
export const showPageNotFoundError = (errorMessage) => {
    return (
        toast.error(errorMessage, {
            duration: 1800,
            style: { borderRadius: "25px" },
            position: (window.innerWidth) <= 720 && "bottom-center"
        })
    )
};