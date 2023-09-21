import MonthSelect from "./MonthSelect/MonthSelect";

const MonthOptions = () => {
  return (
    <div className="flex">
      <MonthSelect n={-3} />
      <MonthSelect n={-2} />
      <MonthSelect n={-1} />
      <MonthSelect n={0} />
    </div>
  );
};

export default MonthOptions;
