import styles from "./Main.module.scss";
import { ExchangeForm } from "./ExcahngeForm";

export const Main = () => {
  return (
    <section className={styles.Main}>
      <div className={styles.container}>
        <header className={styles.currency}>Currency exchanger</header>
        <ExchangeForm />
      </div>
    </section>
  );
};
