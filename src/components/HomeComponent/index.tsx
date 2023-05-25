import styles from './index.module.css';
import banner from '../../assets/Banner.png';
import { Container } from '../Container';
import { Button } from '../Buttons';

export const HomeComponent = () => {
    return (
        <div className={styles.background}>
            <div className={styles.p_relative}>    
                <img src={banner} alt="pikachu" className={styles.img}/>
                <Container>
                    <main className={styles.main}>
                        <h1><b>Find</b> all your favorite <b>Pokemon</b></h1>
                        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                        <Button link="/pokedex" text='See Pokemons' type="success"/>
                    </main>
                </Container>
            </div>
        </div>
    );
};