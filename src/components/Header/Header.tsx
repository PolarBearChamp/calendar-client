import styles from "./Header.module.scss";

interface Props {
  year: string;
  month: string;
}

const Header = ({ year, month }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.year}>{year}</span>
      <span>{month}</span>
    </div>
  );
};

export default Header;
