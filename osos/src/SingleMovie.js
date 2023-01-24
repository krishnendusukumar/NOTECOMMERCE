import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
    const { id } = useParams();
    console.log(id);

    const { isLoading, movie, isError } = useFetch(`&i=${id}`);

    if (isLoading) {
        return (
            <section className="movie-section ">
                <div className="loading">Loading....</div>;
            </section>
        );
    }

    return (
        <section className="movie-section">
            <div className="movie-card">
                <figure>
                    <img src={movie.Poster} alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.Title}</p>
                    <p className=""></p>
                    <p className="card-text"><strong>Cast</strong> : {movie.Actors}</p>
                    <p className="card-text"><strong>Plot</strong> : {movie.Plot}</p>
                    <p className="card-text"><strong>Release</strong> : {movie.Released}</p>
                    <p className="card-text"><strong>Genre</strong> : {movie.Genre}</p>
                    <p className="card-text"><strong>IMDB</strong> : {movie.imdbRating} / 10</p>
                    <p className="card-text"><strong>Country</strong> : {movie.Country}</p>
                    <NavLink to="/" className="back-btn">
                        Go Back
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default SingleMovie;