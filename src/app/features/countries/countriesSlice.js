import { createSlice } from "@reduxjs/toolkit";
import {
  showAllCountries,
  searchByCode,
  searchByRegion,
} from "./countriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  countrySearched: [],
  region: "",
  error: false,
  success: false,
  message: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.countrySearched = [];
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      })
      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = true;
        state.countrySearched = action.payload;
        state.success = true;
      })
      .addCase(searchByCode.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.error = true;
        state.countrySearched = [];
      })
      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(searchByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      });
  },
});

export const { reset, setRegion } = countriesSlice.actions;
export default countriesSlice.reducer;
