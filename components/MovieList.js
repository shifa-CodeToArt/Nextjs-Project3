import React from "react";
import MovieListItem from "./MovieListItem";
import { useRouter } from "next/router";

const MovieList = ({ list }) => {
  return (
    <>
      {list.map((singlemovie) => {
        return <MovieListItem item={singlemovie} key={singlemovie.id} />;
      })}
    </>
  );
};

export default MovieList;
