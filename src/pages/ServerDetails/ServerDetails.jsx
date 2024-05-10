import { Link, useParams } from "react-router-dom";
import { NoMatch } from "../NoMatch/NoMatch";
import "../../assets/CSS/server-details.scss";
import { useFetch } from "../../hooks/useFetch";
import { statusIndicator } from "../../utils/Utils";
import { DetailsComponent } from "../../layout/LayoutComponents/DetailsComponent";

function ServerDetails({ title, text }) {
    const URL = "https://raw.githubusercontent.com/AC-Hadzic/JSON-Fetch-Practice/main/data.json";
    const data = useFetch(URL); // Fetch podataka sa URL
    let { server } = useParams();
    let { id } = useParams();

    return (
        <>
            {data[server]?.environment && data[server]?.environments[id]?.name ? (
                <>
                    <div className="server-details">
                        <h1> {title} </h1>
                        <p> {text} </p>

                        <div className="details-container">
                            <div>
                                <DetailsComponent title="Environment type:" data={data[server]?.environment} />
                                <DetailsComponent title="Server name:" data={data[server]?.environments[id]?.name} />
                                <DetailsComponent title="Server created at:" data={data[server]?.environments[id]?.date_created} />
                                <DetailsComponent title="Server managed by:" data={data[server]?.environments[id]?.admin} />
                                <DetailsComponent title="Server description:" data={data[server]?.environments[id]?.description} />
                            </div>

                            <div>
                                <DetailsComponent title="Server ID:" data={data[server]?.environments[id]?.id} />
                                <DetailsComponent title="Server App ID:" data={data[server]?.environments[id]?.application_id} />
                                <DetailsComponent title="Server IP Adress:" data={data[server]?.environments[id]?.ip} />
                                <DetailsComponent title="Server status:" data={statusIndicator(data[server]?.environments[id]?.status, "small")} />
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
                </>
            ) : (
                <NoMatch />
            )
            }
        </>
    );
}

export { ServerDetails };