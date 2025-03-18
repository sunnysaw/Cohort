import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/signUp.jsx";
import Profile from "./components/profile.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
