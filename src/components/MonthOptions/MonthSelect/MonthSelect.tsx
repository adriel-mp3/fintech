import styles from "./MonthSelect.module.css";
import { useData } from "../../../context/DataContext";
import formatDate from "../../../utils/formatDate";

function getMonthName(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  const name = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
  return name;
}

const MonthSelect = ({ n }: { n: number }) => {
  const { setStart, setFinal } = useData();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = formatDate(new Date(year, month, 1));
    const lastDay = formatDate(new Date(year, month + 1, 0));

    setStart(firstDay);
    setFinal(lastDay);
  }

  return (
    <button className={styles.button} onClick={() => setMonth(n)}>
      {getMonthName(n)}
    </button>
  );
};

export default MonthSelect;
