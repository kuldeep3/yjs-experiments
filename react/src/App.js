import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Preferences } from "./components/Preferences";
import React, { useState } from "react";
import Login from "./components/Auth/Login";

function App() {
  const [token, setToken] = useState("");
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/preferences" element={<Preferences />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
