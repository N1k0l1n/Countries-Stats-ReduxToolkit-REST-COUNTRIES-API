import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries} from "./countriesAction"

const initialState = {
  loading: false,
  countriesData: [],
  countryData: [],
  error: false,
  succes: false,
  message: "",
};

export const countriesSleice = createSlice({
  name: "countries",
  initialState: {},
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.succes = false;
      state.error = false;
      state.message = "";
    },
    extraReducers: (builder) => {
      builder
        .addCase(showAllCountries.pending, (state) => {
          state.loading = true;
        })
        .addCase(showAllCountries.fulfilled, (state, action) => {
          state.loading = false;
          state.countriesData = action.payload;
          state.succes = true;
        })
        .addCase(showAllCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countriesData = [];
        })
    },
  },
});

export default createSlice.reducer;
