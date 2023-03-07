import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/hooks/use-cart";

import styles from "./Nav.module.css";

const Nav = () => {
  const { subtotal, checkOut } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>Space Jelly Shop</p>
      <p className={styles.navCart}>
        <button onClick={checkOut}>
          <FaShoppingCart /> ${subtotal}
        </button>
      </p>
    </nav>
  );
};

export default Nav;
