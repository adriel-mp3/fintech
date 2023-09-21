import React from "react";
import { useData } from "../../context/DataContext";
import SaleItem from "../../components/SaleItem/SaleItem";

const Sales = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <ul>
      {data.map((sale) => (
        <SaleItem key={sale.id} sale={sale} />
      ))}
    </ul>
  );
};

export default Sales;
