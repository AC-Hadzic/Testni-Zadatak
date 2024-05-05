import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NoMatch from "./noMatch";
import "./serverDetails.scss";

function ServerDetails() {
    const [data, setData] = useState([]);
    const URL = "https://raw.githubusercontent.com/AC-Hadzic/JSON-Fetch-Practice/main/data.json";
    let { server } = useParams();
    let { id } = useParams();

    // Fetch podataka sa URL
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(URL);
                const result = await response.json();
                // console.log("JSON received from Fetch:", result);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
        // console.log("Fetch Effect", data);
    }, []);

        // console.log("Fetch Effect after", data);

    return (
        <>
            {data[server]?.environment && data[server]?.environments[id]?.name ? (
                <>
                    <div className="server_details">
                        <h1> Server details </h1>
                        <p> Below you can find a detailed list of informations regarding selected server. </p>

                        <div className="details_container">
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
                                    <span>Server status: </span> <br /> {data[server].environments[id].status == 0 ? (<span className='inactive_status_short'> Inactive </span>) : (<span className='active_status_short'> Active </span>)}
                                </div>                          
                            </div>                            
                        </div>

                        <div className="button_container">
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

export default ServerDetails;