import React from "react";
import useFetch from "../hooks/useFetch";
import getNDaysAgo from "../utils/getNDaysAgo";

type IDataContext = {
  data: Sales[] | null;
  loading: boolean;
  error: string | null;
  start: string;
  final: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

type SalesStatusPayment = "processando" | "pago" | "falha";
type SalesTypePayment = "cartao" | "boleto" | "pix";

type Sales = {
  id: string;
  nome: string;
  preco: number;
  status: SalesStatusPayment;
  pagamento: SalesTypePayment;
  data: string;
  parcelas: number | null;
};

const DataContext = React.createContext<null | IDataContext>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData need to be within the provider");
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [start, setStart] = React.useState(getNDaysAgo(30));
  const [final, setFinal] = React.useState(getNDaysAgo(0));

  const { data, loading, error } = useFetch<Sales[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${final}`
  );
  
  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
