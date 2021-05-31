import React from "react";
import Link from "next/link";
const MovieListItem = ({ item }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#">
            <img className="card-img-top" src={item.image} alt="" />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <Link  href ="/movies/[id]" as={`/movies/${item.id}`}>

                <a>{item.name}</a>
              </Link>
            </h4>
            <div className="movie-genre">{item.genre}</div>
            <h5>{item.rating}.rating</h5>
            <p className="card-text">{item.description.substr(0, 100)}...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListItem;
