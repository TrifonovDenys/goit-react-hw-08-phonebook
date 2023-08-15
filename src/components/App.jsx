import { Routes, Route } from "react-router-dom";

import LoginPage from "pages/LoginPage";
import NotFound from "pages/404Page";
import HomePage from "pages/HomePage";
import Layout from "./Layuot/Layout";
import RegistrPage from "pages/RegistrPage";
import ContactsPage from "pages/ContactsPage";

export const App = () => {

    return (
      <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registr" element={<RegistrPage/>}  />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    )
  }