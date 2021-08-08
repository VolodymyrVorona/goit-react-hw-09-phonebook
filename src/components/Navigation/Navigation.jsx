import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import st from './Navigation.module.css';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink to="/" exact className={st.link} activeClassName={st.activeLink}>
        Главная
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={st.link}
          activeClassName={st.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

export default Navigation;
