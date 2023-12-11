import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";

export const store=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
    }
});
