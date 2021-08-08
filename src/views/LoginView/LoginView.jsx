import { connect } from 'react-redux';

import useInput from '../../hooks';
import { authOperations } from '../../redux/auth';

import st from './LoginView.module.css';

const LoginView = ({ onLogin }) => {
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = e => {
    e.preventDefault();

    let user = {
      email: email.value,
      password: password.value,
    };

    onLogin(user);
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
            value={email.value}
            required
            placeholder="peter.parker@gmail.com"
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
          Log in
        </button>
      </form>
    </div>
  );
};

const mdtp = {
  onLogin: authOperations.logIn,
};

// const mapDispatchToProps = dispatch => ({
//   onLogin: data => dispatch(authOperations.logIn(data)),
// });

export default connect(null, mdtp)(LoginView);
