import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';

const MovieSelector = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div>
      <h2>Select a Movie</h2>
      <select onChange={(e) => setSelectedMovie(e.target.value)} value={selectedMovie}>
        {movies.map((movie) => (
          <option key={movie} value={movie}>
            {movie}
          </option>
        ))}
      </select>
      <RateMovieButton movie={selectedMovie} />
    </div>
  );
};

export default MovieSelector;