import { createSlice } from "@reduxjs/toolkit";

export const stockDataSlice = createSlice({
  name: "stockData",
  initialState: {
    dataLoading: false,
    dataLoaded: false,
    dates: [],
    values: [],
    ticker: "",
    stockInfo: {
      name: "",
      tradedOn: "",
      marketCap: 0,
      ytd: {
        high: 0,
        low: 0,
      },
      bookValue: 0,
      eps: 0,
      psRatio: 0,
      pbrRatio: 0,
      beta: 0,
    },
    quoteInfo: {
      price: 0,
      volume: 0,
      date: "",
      change: 0,
      changePer: 0,
    },
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
