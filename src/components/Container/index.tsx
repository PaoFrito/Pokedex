import styles from "../../index.module.css";

type ContainerProps = {
    children: React.ReactNode | React.ReactNode[];
}

export const Container = ({ children } : ContainerProps) => {
  return (
    <div className={styles.container}>
        { children }
    </div>
  );
};  