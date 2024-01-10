<<<<<<< HEAD
import axios from 'axios'
import swal from "sweetalert";
import React, { useState, useEffect } from "react";

export default function NewsManage() {

    const [content, setContent] = useState('');

    const handleClick = () => {

        axios.post("http://localhost:5000/api/save_news/", { datas: { news_content: content, user_id: '1', type:'1'} }).then((res) => {
          if (res.data.message === "successfully") {
            
            swal({
              text: res.data.message,
              icon: "success",
              type: "success"
            }).then(() => {
              //window.location.href="/";
            });
            //localStorage.setItem("token", res.data.token);
          }
    
      
        });
      }

      const handleChange = (e) =>{

        const content  = e.target.value
        setContent(content)
      }
   
    return (
        <>
            <div> 
                This is the news manage page!!!
                <textarea name='textcontent' onChange={handleChange}/>
                <button type="button" className="btn" onClick={handleClick}>click me!</button>
            </div>
        </>
=======
export default function NewsManage() {

   
    return (
        <>
        <header>
          <div class="navbar">
            <div class="dropdown">
                <button class="dropbtn">Group-Rank 
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="/group/rankview">RankView</a>
                  <a href="/group/rankmanage">RankManage</a>
                </div>
              </div>
              <a href="/group/calllog">Call-Log</a>
            
            <div class="dropdown">
              <button class="dropbtn">Sites
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/group/outsidehomepage">OutSites</a>
                <a href="/group/bidhelps">Bids Helps</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">News 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/group/view_new">New_Alarm</a>
                <a href="/group/blog">Blog</a>
              </div>
            </div>
           <div class="dropdown">
              <button class="dropbtn">Report 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/group/newsmanage">New_Manage</a>
                <a href="/group/reportview">View_All_Reports</a>
                <a href="/group/makereport">Make_Report</a>
              </div>
            </div>
            <a href="/">Home</a>
            
            
            
            
          </div>
        </header>
        {/*<div>
            <div id="mySidenav" class="sidenav">
                <a id="News" onClick={onclicknews}>News</a>
                <a id="Report" onClick={onclickreports}>Report</a>
                <a id="Call-Log" onClick={onclickcalllog}>Call-Log</a>
                <a id="Group-Rank" onClick={onclickgrouprank}>Group-Rank</a>
                <a id="Sites" onClick={onclicksites}>Sites</a>
            </div>
    </div>*/}
      </>
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11
      )
}
  