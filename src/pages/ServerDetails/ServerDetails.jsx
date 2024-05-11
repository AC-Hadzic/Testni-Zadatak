import { Link, useParams } from "react-router-dom";
import { NoMatch } from "../NoMatch/NoMatch";
import "../../assets/CSS/server-details.scss";
import { useFetch } from "../../hooks/useFetch";
import { statusIndicator } from "../../utils/Utils";
import { DetailsComponent } from "../../layout/LayoutComponents/DetailsComponent";

function ServerDetails({ title, text }) {
    const URL = import.meta.env.VITE_API_URL;
    const DATA = useFetch(URL); // Fetch podataka sa URL
    let { server } = useParams();
    let { id } = useParams();

    return (
        <>
            {DATA[server]?.environment && DATA[server]?.environments[id]?.name ? (
                <div className="server-details">
                    <h1> {title} </h1>
                    <p> {text} </p>

                    <div className="details-container">
                        <div>
                            <DetailsComponent title="Environment type:" data={DATA[server]?.environment} />
                            <DetailsComponent title="Server name:" data={DATA[server]?.environments[id]?.name} />
                            <DetailsComponent title="Server created at:" data={DATA[server]?.environments[id]?.date_created} />
                            <DetailsComponent title="Server managed by:" data={DATA[server]?.environments[id]?.admin} />
                            <DetailsComponent title="Server description:" data={DATA[server]?.environments[id]?.description} />
                        </div>

                        <div>
                            <DetailsComponent title="Server ID:" data={DATA[server]?.environments[id]?.id} />
                            <DetailsComponent title="Server App ID:" data={DATA[server]?.environments[id]?.application_id} />
                            <DetailsComponent title="Server IP Adress:" data={DATA[server]?.environments[id]?.ip} />
                            <DetailsComponent title="Server status:" data={statusIndicator(DATA[server]?.environments[id]?.status, "small")} />
                        </div>
                    </div>

                    <div className="button-container">
                        <Link to="/">
                            <button className="button">
                                Go to homepage
                            </button>
                        </Link>
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