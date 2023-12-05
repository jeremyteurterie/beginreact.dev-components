import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';
import Badge from './Badge';

const Shopping_List = [
  {
    name: 'Carotte !',
    quantity: 12,
  },
  {
    name: 'Patate !',
    quantity: 11,
  },
  {
    name: 'Haricot !',
    quantity: 54,
  },
];

const ShoppingItem = ({ name, quantity }) => (
  <div className={clsx(styles['shopping-item'], styles['bg-paper'])}>
    <div className={styles.section}>
      <p>{name}</p>
      <Badge>{quantity}</Badge>
    </div>
    <div className={styles.section}>
      <input type="checkbox" />
    </div>
  </div>
);

const ShoppingList = () => (
  <>
    <h2>Liste de course</h2>
    <div className={styles['shopping-list-items']}>
      <div className={clsx(styles['shopping-item'], styles['bg-paper'])}>
        {Shopping_List.map((item) => (
          <ShoppingItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  </>
);

export default ShoppingList;
