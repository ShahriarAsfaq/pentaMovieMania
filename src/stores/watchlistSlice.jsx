
import { createSlice } from "@reduxjs/toolkit";

const WatchListSlice = createSlice({
    name: "watchlist",
    initialState: {
        watchList: []
    },
    reducers: {
        add(state, action){
            console.log(action.payload);
            const updatedWatchList = state.watchList.concat(action.payload);
            return {...state, watchList : updatedWatchList};
        },
        remove(state, action){
             const updatedWatchList = state.watchList.filter(item => item.id !== action.payload.id);
             return {...state, watchList: updatedWatchList};
        }
    }
});

export const { add, remove } = WatchListSlice.actions;
export const watchListReducer = WatchListSlice.reducer;