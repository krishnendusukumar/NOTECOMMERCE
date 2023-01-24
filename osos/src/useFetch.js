import React, { useState, useEffect } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
// https://www.omdbapi.com/?apikey=cfc6be47&s=RRR
// https://www.omdbapi.com/?apikey=cfc6be47&s=RRR
const useFetch = (apiParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search || data);
                setIsError({ show: "false", msg: "" });
            } else {
                setIsError({ show: "true", msg: data.Error });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovie(`${API_URL}${apiParams}`);
        }, 1000);
        console.log("set");
        return () => {
            clearTimeout(timeOut);
            console.log("clear");
        };
    }, [apiParams]);

    return { isLoading, isError, movie };
};

export default useFetch;