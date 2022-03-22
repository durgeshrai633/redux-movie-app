import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick/lib/slider";
import { settings } from "../../common/settings";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie}></MovieCard>;
      })
    ) : (
      <div className='movies-error'>
        <h3>Error:{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((shows, index) => {
        return <MovieCard key={index} data={shows}></MovieCard>;
      })
    ) : (
      <div className='movies-error'>
        <h3>Error:{movies.Error}</h3>
      </div>
    );
  return (
    <div className='movie-rapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
