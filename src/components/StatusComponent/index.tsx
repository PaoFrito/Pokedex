import styles from "./index.module.css";

type StatusComponentProps = {
	stat: number;
	stat_name: "Attack" | "Defense" | "Sp Attack" | "Sp Defense";
}

export const StatusComponent = (status: StatusComponentProps) => {

    return (
			<div className={styles.content}>
				<div className={styles.circle}>
					{status.stat}
				</div>
				<label className={styles.name}>{status.stat_name}</label>
			</div>
    )
};