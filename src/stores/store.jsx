import { configureStore } from "@reduxjs/toolkit";
import { watchListReducer } from "./slices/watchlistSlice";
import { loginStatusReducer } from "./slices/useLogedInSlice";
import { userIDReducer } from "./slices/userIDSlice";
//import { guestReducer } from "./guestSlice";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

export const store = configureStore({
    reducer: {
        loginStatusState: loginStatusReducer,
        watchListState: watchListReducer,
        userIDState: userIDReducer,
    }
});

// const rootReducer = combineReducers({
//     watchListState: watchListReducer,
//     // Add other reducers here if needed
//   });
  
//   const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["watchListState"], // List of reducers to persist
//   };
  
//   const persistedReducer = persistReducer(persistConfig, rootReducer);
  
//   export const store = configureStore({
//     reducer: persistedReducer,
//     // Add middleware, devtools, etc. as needed
//   });
  
//   export const persistor = persistStore(store);