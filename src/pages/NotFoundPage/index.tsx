import styles from "./index.module.css";
import { Button } from "../../components/Buttons";
import team_rocket_404 from "../../assets/team_rocket_404.png";
import Container from "../../components/Container";

export const ErrorPage = () => {

  return (
    <section className={styles.error_page}>
      <Container>
        <div className={styles.content}>
          <img src={team_rocket_404} className={styles.team_rocket} />
          <h3 className={styles.text}>
            <span className={styles.white_text}>The rocket team </span>
            has won this time.
          </h3>
          <Button link="/" type="warning" text="Return"/>
        </div>
      </Container>
    </section>
  );
}