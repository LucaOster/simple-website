import { useEffect } from "react";
import backurl from "../../img/back.jpg";
import axios from 'axios';
import "./style.scss";
  const Home = () => {
    useEffect(() => {
      if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined)
      {
        alert("localStorage.getItem(token)")
        window.location.href = "/login";
      } else {
      if (localStorage.getItem("token").split(" ")[0] === "Anaconda") {
          axios.post("http://192.168.81.52:5000/auth/", { token: localStorage.getItem("token") })
              .then((res) => {
                  if (res.data.message === "success_auth") {
                      console.log('success_auth');
                    } else {
                    console.log('token error');
                    window.location.href = "/login";
                  }
              })
              .catch((error) => {
                  error = new Error();
              });
      }
    }
    }, []);
    /*const onclickcalllog = () => {
      window.location.href = "/group/calllog";
    };
    const onclickgrouprank = () => {
      window.location.href = "/group/grouprank";
    };
    const onclicknews = () => {
      window.location.href = "/group/news";
    };
    const onclicksites = () => {
      window.location.href = "/group/sites";
    };
    const onclickreports = () => {
      window.location.href = "/group/reports";
    };*/
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
              <a href="/group/calllog" >Call-Log</a>
            
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
        <body>
          <img className="backgroundstyle" src={backurl} style={{width:'100%',height:'100%'}}></img>
        </body>
      </>
    );
  };
    
  export default Home;