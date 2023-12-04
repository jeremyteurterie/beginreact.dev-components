import { useRef, useState } from 'react';

const UserForm = ({ onSubmitUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState();
  // 🦁 Crée une fonction handleSubmit qui prend `event` en paramètre.
  // Récupère ensuite les deux données du formulaire (name et password)
  // Pour ça tu peux t'aider en loggant dans la console `event.currentTarget` et en cherchant les propriétés name et password.
  // 💡 Tu peux utiliser `event.currentTarget.elements` pour récupérer les éléments du formulaire.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    onSubmitUser({ name, password });
  };

  const resetError = () => {
    setError(null);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 🦁 Appelle la fonction `onSubmitUser` avec les deux données du formulaire dans un object
  // 💡 onSubmitUser({ name, password })
  // 💡 Ajoute event.preventDefault() pour éviter que la page ne se recharge

  return (
    // 🦁 ajoute onSubmit en passant la fonction handleSubmit
    <form className="vertical-stack form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          value={name}
          onChange={onNameChange}
          id="name"
          type="text"
          name="name"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          value={password}
          onChange={(event) => {
            resetError();
            onPasswordChange(event);
          }}
          id="password"
          type="password"
          name="password"
        />
      </label>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <input type="submit" value="Submit" />
    </form>
  );
};

const Form = (data) => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;
