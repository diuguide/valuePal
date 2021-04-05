import { createSlice } from "@reduxjs/toolkit";

export const stockDataSlice = createSlice({
  name: "stockData",
  initialState: {
    dataLoading: false,
    dataLoaded: false,
    dates: [],
    values: [],
    ticker: "",
    stockInfo: {},
    quoteInfo: {},
    watchListLoading: false,
    watchListLoaded: false,
    watchList: []
  },
  reducers: {
    dataLoading: (state) => {
      state.dataLoading = true;
      state.dataLoaded = false;
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
    dataSetInfo: (state, action) => {
      state.stockInfo = action.payload.stockInfo;
    },
    dataSetQuote: (state, action) => {
      state.quoteInfo = action.payload.quoteInfo;
    },
    watchListLoading: (state) => {
      state.watchListLoading = true;
      state.watchListLoaded = false;
    },
    watchListLoaded: (state) => {
      state.watchListLoading = false;
      state.watchListLoaded = true;
    },
    setWatchList: (state, action) => {
      state.watchList = action.payload;
    }
  },
});

export const { dataLoading, dataLoaded, dataSet, dataSetInfo, dataSetQuote, watchListLoaded, watchListLoading, setWatchList } = stockDataSlice.actions;

export const stockDataState = (state) => state.stockData;

export default stockDataSlice.reducer;
