import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRated : null,
        upComming : null,
        trailerVideo : null
    },
    reducers : {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRated = action.payload;
        },
        addUpCommingMovies: (state, action) => {
            state.upComming = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies, addTopRatedMovies,addUpCommingMovies} = movieSlice.actions;
export default movieSlice.reducer;