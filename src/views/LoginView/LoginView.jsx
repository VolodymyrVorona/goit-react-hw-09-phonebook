import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';

import st from './LoginView.module.css';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`the field type ${name} is not supported`);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(authOperations.logIn(user));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={st.form} onSubmit={handleSubmit}>
        <b className={st.title}>Please, log in</b>

        <label className={st.formField}>
          Email
          <input
            className={st.formInput}
            type="email"
            name="email"
            value={email}
            required
            placeholder="peter.parker@gmail.com"
            onChange={handleChange}
          />
        </label>
        <label className={st.formField}>
          Password
          <input
            className={st.formInput}
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>

        <button className={st.formButton} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginView;
