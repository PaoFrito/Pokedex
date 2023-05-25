import styles from './index.module.css';

type ButtonProps = {
    text: string;
    type: "success" | "warning";
}

export const Button = ({ text, type }: ButtonProps) => {
    return (
        <button className={type == "success" ? styles.success : styles.warning}>{text}</button>
    );
};