import styles from './index.module.css';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png';
import { Container } from '../Container';
import { Button } from '../Buttons';

export const HomeComponent = () => {
    return (
        <div className={styles.background}>
            <img src={banner} alt="pikachu" className={styles.img}/>
            <Container>
                <main className={styles.main}>
                    <h1>
                        <b>Find</b> all your<br/>
                        favorite<br/>
                        <b>Pokemon</b>
                    </h1>
                    <p>
                        You can know the type of Pokemon,<br />
                        its strengths, disadvantages and<br />
                        abilities
                    </p>
                    <Link to="/pokedex">
                        <Button text='See Pokemons' type="success"/>
                    </Link>
                </main>
            </Container>
        </div>
    );
};