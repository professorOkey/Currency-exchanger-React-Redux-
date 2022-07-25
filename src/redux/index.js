import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CurrencyRateSlice from "./CurrencyRate/CurrencyRateSlice";

const rootReducer = combineReducers({
  currencyRate: CurrencyRateSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
