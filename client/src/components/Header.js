import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <h1 className={styles.gradeTitle}>Grade Calculator</h1>
      </header>
    </div>
  );
};

export default Header;
