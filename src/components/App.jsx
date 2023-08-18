import { Routes, Route } from "react-router-dom";

import LoginPage from "pages/LoginPage";
import NotFound from "pages/404Page";
import HomePage from "pages/HomePage";
import Layout from "./Layuot/Layout";
import RegistrPage from "pages/RegistrPage";
import ContactsPage from "pages/ContactsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivatRoute } from './PrivatRoute/PrivatRoute'
export const App = () => {
  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()
  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])
  return isRefreshing ? (
    'user data'
  ) : (
    <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path="/" element={<HomePage />} />
          {/* <Route path="/contacts" element={<ContactsPage />} /> */}
          <Route path="/contacts" element={<PrivatRoute component={ContactsPage} redirectTo="/login"/>} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/"/>} />
          {/* <Route path="/registr" element={<RegistrPage />} /> */}
          <Route path="/registr" element={<RestrictedRoute component={RegistrPage} redirectTo="/"/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    )
  }