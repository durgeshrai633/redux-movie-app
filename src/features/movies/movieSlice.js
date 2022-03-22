import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/movieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term = "Harry") => {
    const response = await movieApi.get(
      `?apiKey=${APIKEY}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term = "friends") => {
    const response = await movieApi.get(
      `?apiKey=${APIKEY}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedShowOrMovie: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fullfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fullfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fullfilled");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedShowOrMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
