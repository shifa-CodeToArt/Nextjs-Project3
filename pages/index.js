import React, { useState, useEffect } from "react";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies, getCategories } from "../actions/index";

const Home = ({ images, categories }) => {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("all");

  const changeCategory = (category) => {
    setFilter(category);
  };
  useEffect(() => {
    const fetchData = async () => {
      const resMovies = await getMovies();
      setMovies(resMovies);
    };

    fetchData();
  }, [count]);

  const filterMovies = (movies) => {
    if (filter === "all") {
      return movies;
    }

    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter);
    });
  };
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                changeCategory={changeCategory}
                activeCategory={filter}
                categories={categories}
                appName={"Movie DB"}
              />
            </div>
            <div className="col-lg-9">
              this is carousal
              <div className="row">
           
            <MovieList list={filterMovies(movies) || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie) => ({
    id: `images-${movie.id}`,
    image: movie.image,
  }));
  return { movies, images, categories };
};

export default Home;

// <Carousel images={images} />
