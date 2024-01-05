import React from "react";
import "./App.scss";
import Home from "./pages/Home.jsx"
import Index from "./auth/index.jsx"
import Indexgroup from "./pages/group/index.jsx"
import Calllog from "./pages/group/Call-Log.jsx"
import Grouprank from "./pages/group/Group-Rank.jsx"
import News from "./pages/group/News.jsx"
import Sites from "./pages/group/Sites.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Indexgroup/>} />
        <Route path = "/login" element={<Index />} />
        <Route path = "/group">
          <Route path = "calllog" element={<Calllog/>} />
          <Route path = "grouprank" element={<Grouprank/>} />
          <Route path = "news" element={<News/>} />
          <Route path = "sites" element={<Sites/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;