import Container from "../Container";
import styles from "./index.module.css";

export const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_content}>
                    <h4>Make with ❤️ for the PokéSpartans team Platzi Master</h4>
                    <h4><b>Ours Team</b></h4>
                </div>  
            </Container>
        </footer>
    );
};