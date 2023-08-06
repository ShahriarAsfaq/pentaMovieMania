import { configureStore } from "@reduxjs/toolkit";
import { watchListReducer } from "./watchlistSlice";

export const store = configureStore({
    reducer: {
        watchListState: watchListReducer,
    }
});