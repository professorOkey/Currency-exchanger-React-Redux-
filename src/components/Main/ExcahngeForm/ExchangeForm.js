import styles from "../Main.module.scss";
import Select from "react-select";

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
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const SelectHandler = (event) => {
    console.log(event.value);
  };

  return (
    <form className={styles.form}>
      <div className={styles.formContainer}>
        <input
          type="number"
          min="0"
          id={styles.formFrom}
          onChange={onChangeHandler}
        />
        <Select
          styles={CustomStyles}
          options={options}
          onChange={SelectHandler}
        />
      </div>
      <div className={styles.formContainer}>
        <input
          type="number"
          min="0"
          id={styles.formTo}
          onChange={onChangeHandler}
        />
        <Select
          styles={CustomStyles}
          options={options}
          onChange={SelectHandler}
        />
      </div>
    </form>
  );
};
