import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';

const Header = () => {
  return (
    <div className={clsx(styles['container'])}>
      <header>
        <h1>Mes recettes de cuisine !</h1>
        <p>Par BeginReact.dev</p>
      </header>
    </div>
  );
};

export default Header;
