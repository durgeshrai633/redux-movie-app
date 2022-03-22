import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route
              path='/movie/:imdbID'
              element={<MovieDetail></MovieDetail>}
            ></Route>
            <Route element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
