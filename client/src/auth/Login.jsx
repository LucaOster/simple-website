import React, { useState, useEffect } from "react";
import loginImg from "../login.svg";
//const axios = require('axios');
import axios from 'axios'
import swal from "sweetalert";
import "./style.scss"

export default function Login(props) {
  useEffect(() => {
    if (localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined)
    {
      if (localStorage.getItem('token').split(" ")[0] === "Anaconda") {
          axios.post("http://192.168.81.52:5000/auth/", { token: localStorage.getItem("token") })
              .then((res) => {
                  if (res.data.message === "success_auth") {
                      window.location.href = "/";
                  }
              })
              .catch((error) => {
                  error = new Error();
              });
      }
    }
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {

    axios.post("http://192.168.81.52:5000/login/", { user: { username: username, password: password} }).then((res) => {
      if (res.data.message === "Login successfully") {
        
        swal({
          text: res.data.message,
          icon: "success",
          type: "success"
        }).then(() => {
          window.location.href="/";
        });
        localStorage.setItem("token", res.data.token);
      }
      else if (res.data.message === "Email or Password is Wrong!!!") {
        console.log(res.data);
  
        swal({
          text: res.data.message,
          icon: "error",
          type: "error"
        }).then(() => {
          window.location.href="/";
        });
      }
      else {
        swal({
          text: res.data.message,
          icon: "error",
          type: "error"
        }).then(() => {
          window.location.href="/";
        });
      }
    });
  }

  const onChange = (e) => {
  // This function will handle the change of both username and password inputs
  // It will update the state according to the input name and value
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

return (
  <div className="base-container" ref={props.containerRef}>
    <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Email Address</label>
          <input type="text" name="username" placeholder="username"  onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password"  onChange={onChange}/>
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn" onClick={handleClick}>
        Login
      </button>
    </div>
  </div>
);
}
