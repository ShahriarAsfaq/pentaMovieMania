import { createSlice } from "@reduxjs/toolkit";

const userIDSlice = createSlice({
    name: "userID",
    initialState: {
        userID: ""
    },
    reducers: {
        addid(state, action) {
            state.userID = action.payload;
        },
        removeid(state) {
            state.userID = "";
        }
    }
});

export const { addid, removeid } = userIDSlice.actions;
export const userIDReducer = userIDSlice.reducer;