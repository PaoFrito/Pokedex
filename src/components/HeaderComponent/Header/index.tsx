import logo from "../../assets/logo.svg";
import { Container } from "../../Container";
import styles from "./index.module.css";
import { AiOutlineMenu } from "react-icons/ai"
import { MenuModal } from "../MenuModal";
import useMenuContext from "../../../hooks/useMenuContext";
import { Link } from "react-router-dom";

export const Header = () => {

  const { switchBoll} = useMenuContext();

  return (
    <header className={styles.header_background}>
      <Container>
        <div className={styles.header}>
          <img className={styles.logo} src={logo} alt="Logo principal do sistema"/>
          <AiOutlineMenu className={styles.icon} onClick={()=> switchBoll()}/>
          <nav className={styles.nav}>
            <Link className={styles.menu} to="/">
              Home
              <div className={styles.underline}/>  
            </Link>  
            <Link className={styles.menu} to="/">
              Pokedex
              <div className={styles.underline}/>
            </Link> 
            <Link className={styles.menu} to="/">
              Lengendaries
              <div className={styles.underline}/>
            </Link>  
            <Link className={styles.menu} to="https://pokeapi.co/docs/v2">
              Documentation
              <div className={styles.underline}/>
            </Link>
          </nav>
        </div>
      </Container>  
      <MenuModal/>
    </header>
    
  );
};