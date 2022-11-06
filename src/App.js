import React, { useState } from "react";
import './App.css';

//paginas
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
//componentes
import NavBar from "./components/NavBar"

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <NavBar/>
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
      </div>
  );
}

export default App;