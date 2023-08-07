import { createSlice } from "@reduxjs/toolkit";

const loginStatusSlice = createSlice({
    name: "loginStatus",
    initialState: {
        loginStatus: ""
    },
    reducers: {
        add(state, action) {
            state.loginStatus = action.payload;
        },
        remove(state) {
            state.loginStatus = "";
        }
    }
});

export const { add, remove } = loginStatusSlice.actions;
export const loginStatusReducer = loginStatusSlice.reducer;