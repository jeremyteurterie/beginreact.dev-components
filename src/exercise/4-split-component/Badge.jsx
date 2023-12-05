import styles from '../../styles/Exercise2.module.css';

const Badge = ({ children }) => {
  return <p className={styles.badge}>{children}</p>;
};

export default Badge;
