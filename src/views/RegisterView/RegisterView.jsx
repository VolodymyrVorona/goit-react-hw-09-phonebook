import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';

import st from './RegisterView.module.css';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const user = {
        name,
        email,
        password,
      };

      dispatch(authOperations.register(user));

      setName('');
      setEmail('');
      setPassword('');
    },
    [name, email, password, dispatch],
  );

  return (
    <div>
      <form className={st.form} autoComplete="off" onSubmit={handleSubmit}>
        <b className={st.title}>Please, sign up</b>

        <label className={st.formField}>
          Name
          <input
            className={st.formInput}
            type="text"
            name="name"
            value={name}
            required
            onChange={handChange}
          />
        </label>

        <label className={st.formField}>
          Email
          <input
            className={st.formInput}
            type="email"
            name="email"
            value={email}
            required
            onChange={handChange}
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
            onChange={handChange}
          />
        </label>

        <button className={st.formButton} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
