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
          <Link className={styles.menu_item} to="/">Home</Link>
          <Link className={styles.menu_item} to="/pokedex">Pokedex</Link>
          <Link className={styles.menu_item} to="/legendaries">Legendaries</Link>
          <Link className={styles.menu_item} to="/https://pokeapi.co/docs/v2">Documentation</Link>
        </nav>
      </div>
    </div>
  );
};