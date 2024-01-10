import { useEffect } from "react";
import axios from 'axios'
  const Home = () => {
    useEffect(() => {
      if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined)
      {
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