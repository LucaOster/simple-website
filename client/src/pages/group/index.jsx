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
<<<<<<< HEAD
          axios.post("http://localhost:5000/auth/", { token: localStorage.getItem("token") })
=======
          axios.post("http://192.168.81.52:5000/auth/auth/", { token: localStorage.getItem("token") })
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11
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
<<<<<<< HEAD
    };
    return (
      <>
        <div>
            <div id="mySidenav" class="sidenav">
                <a id="News" onClick={onclicknews}>News</a>
                <a id="Report" onClick={onclickreports}>Report</a>
                <a id="Call-Log" onClick={onclickcalllog}>Call-Log</a>
                <a id="Group-Rank" onClick={onclickgrouprank}>Group-Rank</a>
                <a id="Sites" onClick={onclicksites}>Sites</a>
            </div>
         </div>
=======
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
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11
      </>
    );
  };
    
  export default Home;