import React from "react";
import { Sale } from "@/context/DataContext";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Legend,
} from "recharts";

type DaySale = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function formatData(data: Sale[]): DaySale[] {
  const days = data.reduce((acc: { [key: string]: DaySale }, item) => {
    const [day, _] = item.data.split(" ");
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    // remover os 5 primeiros caracteres da data: XXXX-07/12
    data: day.data.substring(5),
  }));
}

const SalesGraph = ({ data }: { data: Sale[] }) => {
  const formatedData = formatData(data);
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        width={400}
        height={400}
        data={formatedData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <Legend />
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
