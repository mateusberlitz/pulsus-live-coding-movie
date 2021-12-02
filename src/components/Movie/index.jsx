import { Link } from "react-router-dom";
import { MovieStyle } from "./MovieStyle";

export function Movie({movie}){
    return(
        <MovieStyle>
            <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />

                <h2>{movie.Title}</h2>
                <span>{movie.Year}</span>
            </Link>
        </MovieStyle>
    )
}