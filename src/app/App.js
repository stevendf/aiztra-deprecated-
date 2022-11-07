import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import { RegisterForm, LoginForm } from "./pages/Session";
import "./styles/app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage/>} />
          <Route path="/acerca de" element={<AboutPage />} />
          <Route path="/ingresar" element={<LoginForm />} />
          <Route path="/registrarse" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}