import React from "react";
import "./App.scss";
import Home from "./pages/Home.jsx"
import Index from "./auth/index.jsx"
import Indexgroup from "./pages/group/index.jsx"
import calllog from "./pages/group/Call-Log.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path = "login" element={<Index />} />
        <Route path = "group" element={<Indexgroup />} >
          <Route index element={<calllog/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;