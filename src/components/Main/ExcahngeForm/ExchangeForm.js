import { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { getCurrency } from "../../../redux/CurrencyRate/getCurrency";
import styles from "../Main.module.scss";

const options = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "UAH", label: "UAH" },
];

const CustomStyles = {
  option: () => ({
    color: "#000",
    padding: "10px",
  }),
};

export const ExchangeForm = () => {
  const [firstValue, setFirstValue] = useState("");
  const [firstCurrency, setFirstCurrency] = useState(options[0]);
  const [secondValue, setSecondValue] = useState("");
  const [secondCurrency, setSecondCurrency] = useState(options[1]);
  const state = useSelector(getCurrency);
  const currency = { ...state.results, UAH: 1 }; // sorry, need this for UAH to UAH convertion

  const onChangeFirstHandler = (event) => {
    const newFirstValue = event.target.value;
    setFirstValue(newFirstValue);
    calculateFromFirst({ newFirstValue, newFirstCurrency: firstCurrency });
  };

  const onChangeSecondHandler = (event) => {
    const newSecondValue = event.target.value;
    setSecondValue(newSecondValue);
    calculateFromSecond({ newSecondValue, newSecondCurrency: secondCurrency });
  };

  const SelectFirstHandler = (value) => {
    setFirstCurrency(value);
    calculateFromFirst({
      newFirstValue: firstValue,
      newFirstCurrency: value,
    });
  };

  const SelectSecondHandler = (value) => {
    setSecondCurrency(value);
    calculateFromSecond({
      newSecondValue: secondValue,
      newSecondCurrency: value,
    });
  };

  const calculateFromFirst = ({ newFirstValue, newFirstCurrency }) => {
    const newSecondValue =
      +newFirstValue *
      (currency[secondCurrency.value] / currency[newFirstCurrency.value]);
    setSecondValue(newSecondValue.toFixed(2));
  };

  const calculateFromSecond = ({ newSecondValue, newSecondCurrency }) => {
    console.log(newSecondCurrency);
    const newFirstValue =
      +newSecondValue *
      (currency[firstCurrency.value] / currency[newSecondCurrency.value]);
    setFirstValue(newFirstValue.toFixed(2));
  };

  return (
    <form className={styles.form}>
      <div className={styles.formContainer}>
        <input
          type="number"
          min="0"
          id={styles.formFrom}
          onChange={onChangeFirstHandler}
          value={firstValue}
        />
        <Select
          styles={CustomStyles}
          options={options}
          onChange={SelectFirstHandler}
          value={firstCurrency}
        />
      </div>
      <div className={styles.formContainer}>
        <input
          type="number"
          min="0"
          id={styles.formTo}
          onChange={onChangeSecondHandler}
          value={secondValue}
        />
        <Select
          styles={CustomStyles}
          options={options}
          onChange={SelectSecondHandler}
          value={secondCurrency}
        />
      </div>
    </form>
  );
};
