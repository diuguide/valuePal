import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import errorReducer from "../features/error/errorSlice";
import dataReducer from "../features/stockData/dataSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    stockData: dataReducer,
  },
});
