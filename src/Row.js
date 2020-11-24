import React, { useState, useEffect } from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // this is this full url
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };


    console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className="row__poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name} />

                ))}
            </div>
            <Youtube videoId="_x6lux6f_6g" opts={opts} />
        </div>
    )
}

export default Row;
