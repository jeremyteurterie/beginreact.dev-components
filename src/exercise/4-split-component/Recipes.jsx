import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';
import Badge from './Badge';

const Recipe_List = [
  {
    name: 'Tarte à la carotte',
    date: '11.06.22',
  },
  {
    name: 'Purée de patate',
    date: '15.08.23',
  },
  {
    name: 'Sauce au haricot',
    date: '22.09.24',
  },
];

const RecipeItem = ({ name, date }) => (
  <li className={clsx(styles['flex'], styles['gap-4'])}>
    <span>{name}</span>
    <Badge>{date}</Badge>
  </li>
);

const Recipes = () => (
  <>
    <h2>Liste de recettes à faire</h2>
    <ul className={clsx(styles['flex-col'], styles['gap-2'])}>
      {Recipe_List.map((recipe) => (
        <RecipeItem {...recipe} key={recipe.name} />
      ))}
    </ul>
  </>
);

export default Recipes;
