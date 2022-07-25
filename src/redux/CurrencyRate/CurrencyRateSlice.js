import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../API/request";

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async () => {
    return request();
  }
);

const CurrencyRateSlice = createSlice({
  name: "currencyRate",
  initialState: {
    currency: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.currency = action.payload;
    });
  },
});

export default CurrencyRateSlice.reducer;
export const { showModalFrom, showModalTo } = CurrencyRateSlice.actions;
