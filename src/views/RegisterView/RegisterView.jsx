import { connect } from 'react-redux';

import useInput from '../../hooks';
import { authOperations } from '../../redux/auth';

import st from './RegisterView.module.css';

const RegisterView = ({ onRegister }) => {
  const name = useInput('');
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    onRegister(user);
  };

  return (
    <div>
      <form className={st.form} autoComplete="off" onSubmit={handleSubmit}>
        <b className={st.title}>Please, sign up</b>

        <label className={st.formField}>
          Name
          <input
            className={st.formInput}
            type="text"
            value={name.value}
            required
            onChange={name.onChange}
          />
        </label>

        <label className={st.formField}>
          Email
          <input
            className={st.formInput}
            type="email"
            value={email.value}
            required
            onChange={email.onChange}
          />
        </label>

        <label className={st.formField}>
          Password
          <input
            className={st.formInput}
            type="password"
            value={password.value}
            required
            onChange={password.onChange}
          />
        </label>

        <button className={st.formButton} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onRegister: data => {
    return dispatch(authOperations.register(data));
  },
});

export default connect(null, mapDispatchToProps)(RegisterView);
