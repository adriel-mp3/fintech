import React from "react";
import useFetch from "../hooks/useFetch";

type IDataContext = {
  data: ISales[] | null;
  loading: boolean;
  error: string | null;
};

type SalesStatusPayment = "processando" | "pago" | "falha";
type SalesTypePayment = "cartao" | "boleto" | "pix";

type ISales = {
  id: string;
  nome: string;
  preco: number;
  status: SalesTypePayment;
  pagamento: SalesStatusPayment;
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
  const { data, loading, error } = useFetch<ISales[]>(
    "https://data.origamid.dev/vendas/"
  );
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
