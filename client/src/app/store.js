import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import errorReducer from "../features/error/errorSlice";
import stockDataReducer from "../features/stockData/stockDataSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    stockData: stockDataReducer
    
  },
});
