import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
