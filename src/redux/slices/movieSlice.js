import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        addUpcominMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        }
    }
});

export default movieSlice.reducer;
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies,addUpcominMovies}=movieSlice.actions;