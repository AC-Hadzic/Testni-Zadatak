import { Link, useParams } from "react-router-dom";
import { NoMatch } from "../NoMatch/NoMatch";
import "../../assets/CSS/server-details.scss";
import { useFetch } from "../../hooks/useFetch";

function ServerDetails() {
    const URL = "https://raw.githubusercontent.com/AC-Hadzic/JSON-Fetch-Practice/main/data.json";
    const data = useFetch(URL); // Fetch podataka sa URL
    let { server } = useParams();
    let { id } = useParams();

    return (
        <>
            {data[server]?.environment && data[server]?.environments[id]?.name ? (
                <>
                    <div className="server-details">
                        <h1> Server details </h1>
                        <p> Below you can find a detailed list of informations regarding selected server. </p>

                        <div className="details-container">
                            <div>
                                <div>
                                    <span> Environment type: </span> <br /> {data[server].environment}
                                </div>

                                <div>
                                    <span>Server name: </span> <br /> {data[server].environments[id].name}
                                </div>

                                <div>
                                    <span>Server created at: </span> <br /> {data[server].environments[id].date_created}
                                </div>

                                <div>
                                    <span>Server managed by: </span> <br /> {data[server].environments[id].admin} 
                                </div>

                                <div>
                                    <span>Server description: </span> <br /> {data[server].environments[id].description}
                                </div>    
                            </div>
                            
                            <div>
                                <div>
                                    <span>Server ID: </span> <br /> {data[server].environments[id].id}
                                    </div>

                                <div>
                                    <span>Server App ID: </span> <br /> {data[server].environments[id].application_id}
                                </div>

                                <div>
                                    <span>Server IP Adress: </span> <br /> {data[server].environments[id].ip}
                                </div>

                                <div>
                                    <span>Server status: </span> <br /> {data[server].environments[id].status == 0 ? (<span className='inactive-status-short'> Inactive </span>) : (<span className='active-status-short'> Active </span>)}
                                </div>                          
                            </div>                            
                        </div>

                        <div className="button-container">
                            <Link to="/"><button className="button"> Go to homepage </button></Link>   
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