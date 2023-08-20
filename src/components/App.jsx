import { Routes, Route } from 'react-router-dom';
import Layout from './Layuot/Layout';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivatRoute } from './PrivatRoute/PrivatRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegistrPage = lazy(() => import('../pages/RegistrPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFound = lazy(() => import('../pages/404Page'));

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'user data'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={<PrivatRoute component={ContactsPage} redirectTo="/login" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} redirectTo="/" />}
        />
        <Route
          path="/registr"
          element={<RestrictedRoute component={RegistrPage} redirectTo="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
