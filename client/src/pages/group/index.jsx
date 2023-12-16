import { useEffect } from "react";
import axios from 'axios';
import "./style.scss";
  const Home = () => {
    useEffect(() => {
      if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined)
      {
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
    return (
      <>
      <div>
            <div id="mySidenav" class="sidenav">
                <a href="/calllog" id="Call-Log">Call-Log</a>
                <a href="#" id="Group-Rank">Group-Rank</a>
                <a href="#" id="News">News</a>
                <a href="#" id="Sites">Sites</a>
            </div>
      </div>
      </>
    );
  };
    
  export default Home;