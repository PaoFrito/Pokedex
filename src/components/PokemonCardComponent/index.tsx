import styles from "./index.module.css";
import Pokemon from "../../models/pokemon";
import { StatusComponent } from "../StatusComponent";

export const PokemonCardComponent = (pokemon: Pokemon) => {
	return (
		<article className={styles.card}>
			<div className={styles.col_left}>
				<h3 className={styles.name}>{pokemon.name}</h3>
				<div className={styles.stats}>
					<StatusComponent stat_name="Attack" stat={pokemon.atk} />
					<StatusComponent stat_name="Defense" stat={pokemon.def} />
				</div>
			</div>
			<img src={pokemon.sprite} alt={pokemon.name} className={styles.img}/>
		</article>
	)
};
