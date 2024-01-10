import React, { useState } from "react";
import loginImg from "../login.svg";
import axios from 'axios';
import swal from 'sweetalert';
import "./style.scss";

export default function Register(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
<<<<<<< HEAD
    axios.post("http://localhost:5000/signup/", { user: { username: username, email: email, password: password} }).then((res) => {
=======
    axios.post("http://192.168.81.52:5000/auth/signup/", { user: { username: username, email: email, password: password} }).then((res) => {
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11
      swal({
        text: res.data.message,
        icon: "success",
        type: "success"
      })
    })
  }

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'username':
        setUsername(value);
      break;
      case 'email':
        setEmail(value);
      break;
      case 'password':
        setPassword(value);
      break;
        default:
      break;
    }
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" onChange={onChange} value={username} name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" onChange={onChange} value={email} name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" onChange={onChange} value={password} name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  );
}