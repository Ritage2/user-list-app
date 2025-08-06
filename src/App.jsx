import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Users from "./pages/users";
import About from "./pages/about";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} /> 
      </Routes>

    </>
  );
};

export default App;
