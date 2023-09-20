import React from "react";
import DateInput from "./DateInput/DateInput";

const DateRange = () => {
  const [start, setStart] = React.useState("");
  const [final, setFinal] = React.useState("");
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
