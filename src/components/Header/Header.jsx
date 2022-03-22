import React, { useState } from "react";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import "./header.scss";
import { useDispatch, useStore } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please Enter A Search Term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <Link to={"/"}>Movie App </Link>
        </div>
        <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input
              type='text'
              name=''
              id=''
              value={term}
              placeholder='Search Movies or Show'
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type='submit'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
        <div className='user-image'>
          <img src={user} alt='user' />
        </div>
      </div>
    </div>
  );
};

export default Header;
