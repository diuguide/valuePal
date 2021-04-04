import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    intialState: {
        isLoading: false,
        isLoaded: false,
        dates: [],
        values: [],
        ticker: '',
        createdAt: ''
    },
    reducers: {
        dataLoading: state => {
            state.isLoading = true;
        },
        dataLoaded: state => {
            state.isLoading = false;
            state.isLoaded = true;
        },
        dataSet: (state, action) => {
            state.dates = action.payload.dates;
            state.values = action.payload.values;
            state.ticker = action.payload.ticker;
            state.createdAt = actions.payload.createdAt;
        },
    },
});

export const { dataLoaded, dataLoading, dataSlice } = dataSlice.actions;

export const dataState = state => state.data;

export default dataSlice.reducer;