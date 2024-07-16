import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const MovieList = ({ title, movies}) => {
  console.log("Movies");
  console.log(movies);
  return (
    <div className="p-4">
      <h1 className="text-3xl p-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none">
        <div className="flex">
          {movies && movies.map((movie) => (
            movie && <Link to={"/watch/"+movie.id}><MovieCard key={movie.id} posterPath={movie.poster_path} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
