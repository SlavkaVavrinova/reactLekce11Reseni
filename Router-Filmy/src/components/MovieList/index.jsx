import React from 'react';
import movies from './../../movies.js';
import { Link } from 'react-router-dom';
import './style.css';

const MovieList = () => {
  return (
    <nav>
      <ul className="movieList">
        {movies.map((movie) => (
          <li className="movieList__item" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                className="movieList__poster"
                src={`/assets/${movie.poster}`}
                alt={`poster${movie.title}`}
              />
              <p>{movie.title}</p>
              <p>{movie.year}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MovieList;
