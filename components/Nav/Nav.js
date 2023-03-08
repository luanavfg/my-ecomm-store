import { FaShoppingCart } from "react-icons/fa";
import { useCart, checkout } from "@/hooks/use-cart";

import styles from "./Nav.module.css";
import Link from "next/link";

const Nav = () => {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p className={styles.navTitle}>Space Jelly Shop</p>
      </Link>

      <p className={styles.navCart}>
        <Link href="/cart">
          <FaShoppingCart /> ${subtotal}
        </Link>
      </p>
    </nav>
  );
};

export default Nav;
