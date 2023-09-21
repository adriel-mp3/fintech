import React from "react";
import styles from './DateInput.module.css';

// const labelStyle: React.CSSProperties = {
//   display:'block',
// }

type DateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, id, ...props }: DateInputProps) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.input} type="date" name={id} id={id} {...props}/>
    </div>
  );
};

export default DateInput;
