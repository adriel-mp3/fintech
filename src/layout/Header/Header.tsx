import React from "react";
import styles from "./Header.module.css";
import DateRange from "@/components/DateRange/DateRange";
import MonthOptions from "@/components/MonthOptions/MonthOptions";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("");
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (pathname === "/") {
      setTitle("Resumo");
      document.title = " Fintech | Resumo";
    } else {
      document.title = " Fintech | Vendas";
      setTitle("Vendas");
    }
  }, [pathname]);
  
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
