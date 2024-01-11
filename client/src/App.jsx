import React from "react";
import "./App.scss";
import Index from "./auth/index.jsx"
import Indexgroup from "./pages/group/index.jsx"
import Calllog from "./pages/group/Call-Log.jsx"
import Grouprank from "./pages/group/Group-Rank.jsx"
import News from "./pages/group/News.jsx"
import Sites from "./pages/group/Sites.jsx"
import Reports from "./pages/group/Reports.jsx"
import Blog from "./pages/group/Blog.jsx"
import View_New from "./pages/group/View_new.jsx"
import ReportView from "./pages/group/reportview.jsx"
import NewsManage from "./pages/group/newsmanage.jsx"
import Make_Report from "./pages/group/makereport.jsx"
import BidHelp from "./pages/group/bidhelp.jsx"
import OutSites from "./pages/group/outsites.jsx"
import RankView from "./pages/group/rankview.jsx"
import RankManage from "./pages/group/rankmanage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Indexgroup/>} />
        <Route path = "/login" element={<Index />} /> 
        <Route path = "/group">
          <Route path = "calllog" element={<Calllog/>} />
          <Route path = "reports" element={<Reports/>}/>
          <Route path = "grouprank" element={<Grouprank/>} />
          <Route path = "news" element={<News/>} />
          <Route path = "sites" element={<Sites/>} />
          <Route path = "blog" element={<Blog/>}/>
          <Route path = "view_new" element={<View_New/>}/>
          <Route path = "reportview" element={<ReportView/>}/>
          <Route path = "newsmanage" element={<NewsManage/>}/>
          <Route path = "makereport" element={<Make_Report/>}/>
          <Route path = "bidhelps" element={<BidHelp/>}/>
          <Route path = "outsidehomepage" element={<OutSites/>}/>
          <Route path = "rankview" element={<RankView/>}/>
          <Route path = "rankmanage" element={<RankManage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    );
}
export default App;