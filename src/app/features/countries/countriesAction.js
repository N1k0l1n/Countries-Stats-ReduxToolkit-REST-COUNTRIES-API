import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//show all countries
export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

