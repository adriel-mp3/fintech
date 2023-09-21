import styles from "./SaleItem.module.css";
import { Sale } from "../../context/DataContext";

const SaleItem = ({ sale }: { sale: Sale }) => {
  return (
    <li className={`${styles.sale} box`}>
      <a className="sale id" href="">
        {sale.id}
      </a>
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
