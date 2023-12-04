import './global.css';
import styles from './01.module.css';
// 🦁 Les styles par défaut pour touts les variants sont :
// - border: 0
// - borderRadius: 4

// 🦁 Il y a 3 variants : `primary`, `secondary` et `default`
// Crée un objet ici qui contient les styles pour chaque variant
// 💡 const VariantsStyle = { primary: { ... }, secondary: { ... }, default: { ... } }
const VariantsStyle = {
  primary: { ['--background-color']: '#646cff' },
  secondary: { ['--background-color']: '#16a34a' },
  default: { ['--background-color']: '#171717' },
};
// - primary : le background est #646cff
// - secondary : le background est #16a34a
// - default : le background est #171717

const SizesStyle = {
  small: { ['--padding']: '8px 16px', ['--font-size']: '1rem' },
  large: { ['--padding']: '12px 24px', ['--font-size']: '1.2rem' },
};
// 🦁 Il y a deux size : `small` et `large`
// Fais la même chose que pour les variants (en utilisant SizesStyle)
// - small : le padding est 8px 16px et le fontSize est 1rem
// - large : le padding est 12px 24px et le fontSize est 1.2rem

// 💡 `backgroundColor: 'red'` -> On utilise `backgroundColor` et pas `background-color`
// car on est dans du JavaScript et pas dans du CSS.

const Button = ({ variant, size, children }) => {
  // 🦁 Utiliser les objets VariantsStyle et SizesStyle pour appliquer les styles
  // 💡 variantStyle = VariantsStyle[variant];
  const variantStyle = VariantsStyle[variant];
  const variantSize = SizesStyle[size];

  // 🦁 Ajouter l'objet `style` sur le bouton
  // 💡 style={{ ... }}
  // 💡 Tu pourras utiliser `variantStyle` et `sizeStyle` pour appliquer les styles
  //    En utilisant le spread operator : { ...variantStyle, ...sizeStyle }
  return (
    <button
      className="button"
      style={{ border: 0, borderRadius: 4, ...variantStyle, ...variantSize }}
    >
      {children}
    </button>
  );
};

const Demo = () => {
  return (
    // 🦁 Ajouter des styles pour que les boutons soit alignés au centre avec
    // display: flex et flexDirection: column ainsi que alignItems: center
    <div className="container">
      <Button variant="primary" size="small">
        Primary small
      </Button>
      <Button variant="secondary" size="small">
        Secondary small
      </Button>
      <Button variant="default" size="small">
        Default small
      </Button>
      <Button variant="primary" size="large">
        Primary large
      </Button>
      <Button variant="secondary" size="large">
        Secondary large
      </Button>
      <Button variant="default" size="large">
        Default large
      </Button>
    </div>
  );
};

// ℹ️ Ne pas modifier le code ci-dessous
const App = () => {
  return (
    // ℹ️ Cette classe permet d'enlever les styles par défaut des boutons !
    <div className="remove-global-styles">
      <Demo />
    </div>
  );
};

export default App;
