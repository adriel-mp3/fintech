import React from "react";
import DateRange from "../components/DateRange/DateRange";
import MonthOptions from "../components/MonthOptions/MonthOptions";

const Header = () => {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <MonthOptions />
    </header>
  );
};

export default Header;
