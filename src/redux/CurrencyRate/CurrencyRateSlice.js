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
    shownModalFrom: false,
    shownModalTo: false,
  },
  reducers: {
    showModalFrom(state) {
      state.shownModalFrom = !state.shownModalFrom;
    },
    showModalTo(state) {
      state.shownModalTo = !state.shownModalTo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.currency = action.payload;
    });
  },
});

export default CurrencyRateSlice.reducer;
export const { showModalFrom, showModalTo } = CurrencyRateSlice.actions;
