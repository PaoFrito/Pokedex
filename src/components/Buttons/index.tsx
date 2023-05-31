import { Link } from 'react-router-dom';
import styles from './index.module.css';

type ButtonProps = {
    text: string;
    type: "success" | "warning";
    link: string;
}

export const Button = ({ text, type, link }: ButtonProps) => {
    return (
        <Link to={link}>
            <button className={type == "success" ? styles.success : styles.warning}>
                {text}
            </button>
        </Link>
    );
};