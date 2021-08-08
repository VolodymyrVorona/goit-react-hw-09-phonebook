// import { useEffect } from 'react';
import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authOperations } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import route from './route';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-page" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path={route.home} component={HomeView} />

          <PublicRoute
            path={route.register}
            component={RegisterView}
            restricted
            redirectTo={route.contacts}
          />

          <PublicRoute
            path={route.login}
            component={LoginView}
            restricted
            redirectTo={route.contacts}
          />

          <PrivateRoute
            path={route.contacts}
            component={ContactsView}
            redirectTo={route.login}
          />
          <PublicRoute component={HomeView} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
