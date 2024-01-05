import { useEffect } from "react";
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
    const onclickcalllog = () => {
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
      </>
    );
  };
    
  export default Home;