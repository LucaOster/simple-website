import React from "react";
import "./App.scss";
import Home from "./pages/Home.jsx"
import Index from "./auth/index.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path = "login" element={<Index />} />
        
      </Routes>
    </BrowserRouter>
    );
}

export default App;