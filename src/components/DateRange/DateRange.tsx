import React from "react";
import DateInput from "./DateInput/DateInput";
import { useData } from "../../context/DataContext";

const DateRange = () => {
  const { start, final, setFinal, setStart } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        id="inicio"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        label="Final"
        id="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
