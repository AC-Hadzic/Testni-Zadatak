import { useParams } from "react-router-dom";
import { NoMatch } from "../NoMatch/NoMatch";
import "../../assets/CSS/server-details.scss";
import { useFetch } from "../../hooks/useFetch";
import { dateParser, generateDetails, statusIndicator } from "../../utils/Utils";
import { DetailsComponent } from "../../layout/LayoutComponents/DetailsComponent";

function ServerDetails({ title, text }) {
    const URL = import.meta.env.VITE_API_URL;
    const data = useFetch(URL); // Fetch podataka sa URL
    let { server, id } = useParams();
    const dataExistCheck = data[server]?.environment && data[server]?.environments[id]?.name;
    const dataProps = data[server]?.environments[id];

    const dataTableLeft = [
        { icon: "bi bi-server", title: "Environment type:", data: data[server]?.environment },
        { icon: "bi bi-pencil-fill", title: "Server name:", data: dataProps?.name },
        { icon: "bi bi-calendar-check-fill", title: "Server created at:", data: dateParser(dataProps?.date_created) },
        { icon: "bi bi-person-fill", title: "Server managed by:", data: dataProps?.admin }
    ];

    const dataTableRight = [
        { icon: "bi bi-database-fill-lock", title: "Server ID:", data: dataProps?.id },
        { icon: "bi bi-database-fill-lock", title: "Server App ID:", data: dataProps?.application_id },
        { icon: "bi bi-ethernet", title: "Server IP Adress:", data: dataProps?.ip },
        { icon: "bi bi-gear-fill", title: "Server status:", data: statusIndicator(dataProps?.status, "small") }
    ];

    const dataTableBottom = [
        { icon: "bi bi-file-text-fill", title: "Server Description:", data: <textarea readOnly defaultValue={data[server]?.environments[id]?.description} /> }
    ]

    return (
        <>
            {dataExistCheck ? ( 
                <div className="server-details">
                    <h1> {title} </h1>
                    <p> {text} </p>

                    <div className="separator horizontal" />

                    <div className="details-container">
                        <div className="details-section">
                            {generateDetails(dataTableLeft)}
                        </div>

                        <div className="separator vertical" />

                        <div className="details-section">
                            {generateDetails(dataTableRight)}
                        </div>
                    </div>

                    <div className="separator horizontal" />

                    <div className="description-container">
                        {generateDetails(dataTableBottom)}
                    </div>
                </div>
            ) : (
                <NoMatch />
            )
            }
        </>
    );
}

export { ServerDetails };