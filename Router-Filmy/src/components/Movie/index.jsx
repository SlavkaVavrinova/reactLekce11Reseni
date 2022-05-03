import React from 'react';
import movies from './../../movies.js';
import { useParams, Link } from 'react-router-dom';
import { Actor } from '../Actor';

const Movie = () => {
  const { id } = useParams();

  const chosenMovie = movies.find((movie) => movie.id === Number(id));
  // console.log(chosenMovie);

  return (
    <div>
      <p>
        <span>{chosenMovie.rating}</span>/10
      </p>
      <img
        src={`../../assets/${chosenMovie.poster}`}
        alt={`poster${chosenMovie.title}`}
      />

      <h2>{chosenMovie.title}</h2>
      <div>
        <span>Rok vydání: </span>
        {chosenMovie.year}
        <br />
        <span>Žánr: </span>
        {chosenMovie.genre} <br />
        <span>Režie: </span>
        {chosenMovie.director}
        <h5>V hlavních rolích:</h5>
        <div>
          {chosenMovie.cast.map((actor) => (
            <Actor key={actor.name} name={actor.name} as={actor.as} />
          ))}
        </div>
      </div>
      <Link to="/">
        <button>Zpět</button>
      </Link>
    </div>
  );
};

export default Movie;
