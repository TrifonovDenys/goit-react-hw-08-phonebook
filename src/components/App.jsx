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
    <div className="absolute top-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-1"></div>
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
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/registr"
          element={
            <RestrictedRoute component={RegistrPage} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
