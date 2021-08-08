import { NavLink } from 'react-router-dom';
import st from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={st.link}
        activeClassName={st.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={st.link}
        activeClassName={st.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}
