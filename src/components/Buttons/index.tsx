import { redirect } from 'react-router-dom';
import styles from './index.module.css';


type ButtonProps = {
    text: string;
    type: "success" | "warning";
    link: string;
}

export const Button = ({ text, type, link }: ButtonProps) => {
    return (
        <button
            onClick={() => redirect(`${link}`)} 
            className={type == "success" ? styles.success : styles.warning}>
            {text}
        </button>
    );
};