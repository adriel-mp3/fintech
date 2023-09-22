import styles from "./SaleItem.module.css";
import { Sale } from "../../context/DataContext";
import { NavLink } from "react-router-dom";

const SaleItem = ({ sale }: { sale: Sale }) => {
  return (
    <li className={`${styles.sale} box`}>
      <NavLink to={`/vendas/${sale.id}`} className="sale">
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </li>
  );
};

export default SaleItem;
