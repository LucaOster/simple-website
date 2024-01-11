import React, { useState, useEffect } from "react";
import loginImg from "../login.svg";
import axios from 'axios'
import swal from "sweetalert";
import "./style.scss"

export default function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    axios.post("http://192.168.81.52:5000/auth/login/", { user: { username: username, password: password} }).then((res) => {
      if (res.data.message === "Login successfully") {
        swal({
          text: res.data.message,
          icon: "success",
          type: "success"
        }).then(() => {
          window.location.href="/";
        });
        localStorage.setItem("username", res.data.user.name);
      }
      else {
        swal({
          text: res.data.message,
          icon: "error",
          type: "error"
        })
      }
    });
  }

  const onChange = (e) => {
    const {name, value} = e.target;
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
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" placeholder="username"  onChange={onChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password"  onChange={onChange} required />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}
