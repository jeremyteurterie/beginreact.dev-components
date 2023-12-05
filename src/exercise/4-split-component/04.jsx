import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';

// components
import Header from './Header';
import ShoppingList from './ShoppingList';
import Recipes from './Recipes';
import Footer from './Footer';

const App = () => {
  return (
    <div className={clsx(styles['container'])}>
      <Header />
      <hr />
      <div className={clsx(styles['flex-col'])}>
        <ShoppingList />
      </div>
      <hr />
      <div className={clsx(styles['flex-col'])}>
        <Recipes />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
