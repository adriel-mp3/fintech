import React from "react";
import styles from './Header.module.css';
import DateRange from "../../components/DateRange/DateRange";
import MonthOptions from "../../components/MonthOptions/MonthOptions";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");

  return (
    <header className="mb">
      <div className={`${styles.daterange} mb `}>
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <MonthOptions />
    </header>
  );
};

export default Header;
