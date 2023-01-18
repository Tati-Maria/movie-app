import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchData (url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async() => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setData(response.data.results);
        } catch(err) {
            setError(err);
        }

        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [url]);

    return {data, loading, error}
}
