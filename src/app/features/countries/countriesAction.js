import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//show all countries
export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      console.log("Response:", response.data); // Log the response data
      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data) || error.message;

      //rejectWithvalue sends the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);

