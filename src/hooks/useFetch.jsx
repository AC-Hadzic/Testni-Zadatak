import { useEffect, useState } from "react";

export function useFetch(URL) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('The response is not OK :c');
                };
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData(URL);
    }, [URL])

    return data;
};