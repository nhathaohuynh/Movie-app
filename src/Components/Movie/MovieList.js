import React, { useEffect, useState } from "react";
import MovieCard from "./MoviesCard";
import useSWR from "swr";
import { fetcher } from "../../Config/config";

// https://api.themoviedb.org/3/movie/now_playing?api_key=95f2419536f533cdaa1dadf83c606027
export default function MovieList({type}) {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(() => {
      const newMovies = []
      for(let i = 0 ; i < 8 ; i++){
        newMovies[i] = data.results[i]
      }
      return newMovies
    });
  }, [data]);
  return (
    <div className="movie-list grid grid-cols-4 gap-10">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie}></MovieCard>;
      })}
    </div>
  );
}
