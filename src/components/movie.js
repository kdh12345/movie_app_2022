import React  from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({id, title, year, summary, poster, genres }){
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: 'movie-detail',
                    state: {year, title, summary, poster, genres},
                }}
                >
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
            
               <h2 className="movie__title">{title}</h2>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) =>{
                         return <li key={index} className="genres__genre">{genre}</li>
                    })}

               </ul>
               <p className="movie_summary">{summary.slice(0,180)}</p>
            </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;