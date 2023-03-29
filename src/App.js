import React from "react";
import Header from "./components/header";
import Login from "./components/login";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
