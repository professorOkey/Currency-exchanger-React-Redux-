import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrency } from "./redux/CurrencyRate/CurrencyRateSlice";
import { getCurrency } from "./redux/CurrencyRate/getCurrency";
import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  const state = useSelector(getCurrency);

  return (
    <section className={styles.App}>
      <Header course={state.results} />
      <Main />
      <Footer />
    </section>
  );
};
