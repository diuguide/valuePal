import { createSlice } from "@reduxjs/toolkit";

export const stockDataSlice = createSlice({
  name: "stockData",
  initialState: {
    dataLoading: false,
    dataLoaded: false,
    dates: [],
    values: [],
    ticker: "",
  },
  reducers: {
    dataLoading: (state) => {
      state.dataLoading = true;
    },
    dataLoaded: (state) => {
      state.dataLoading = false;
      state.dataLoaded = true;
    },
    dataSet: (state, action) => {
      state.dates = action.payload.dates;
      state.values = action.payload.values;
      state.ticker = action.payload.ticker;
    },
  },
});

export const { dataLoading, dataLoaded, dataSet } = stockDataSlice.actions;

export const stockDataState = (state) => state.stockData;

export default stockDataSlice.reducer;
