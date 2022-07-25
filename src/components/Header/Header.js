import styles from "./Header.module.scss";

export const Header = ({ course }) => {
  return (
    <header className={styles.Header}>
      <div className={styles.currentRate}>1 UAH = {course?.USD} USD</div>
      <div className={styles.currentRate}>1 UAH = {course?.EUR} EUR</div>
    </header>
  );
};
