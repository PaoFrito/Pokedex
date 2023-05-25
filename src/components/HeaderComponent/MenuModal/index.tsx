import useMenuContext from "../../../hooks/useMenuContext";
import styles from "./index.module.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

export const MenuModal = () => {

  const { isActiveState, switchBoll } = useMenuContext();

  return (
    <div className={isActiveState ? styles.background_block : styles.background_none} onClick={()=>switchBoll()}>
      <div className={styles.menu}>  
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.menu_item} to="/a">Home</Link>
          <Link className={styles.menu_item} to="/">Pokedex</Link>
          <Link className={styles.menu_item} to="/">Legendaries</Link>
          <Link className={styles.menu_item} to="/">Documentation</Link>
        </nav>
      </div>
    </div>
  );
};