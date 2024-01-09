import { useEffect } from "react";
import axios from 'axios'
  const Home = () => {
    useEffect(() => {
      if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined)
      {
        window.location.href = "/login";
      } else {
      if (localStorage.getItem("token").split(" ")[0] === "Anaconda") {
          axios.post("http://192.168.81.52:5000/auth/auth/", { token: localStorage.getItem("token") })
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
    const gotogroup = () => {
      window.location.href="/group";
    };
    return (
      <>
      <div>
        <button>Total</button>
        <button onClick={gotogroup}>Group</button>
      </div>
      </>
    );
  };
    
  export default Home;