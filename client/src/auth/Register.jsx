import React,{ useState } from "react";
import loginImg from "../login.svg";
import axios from 'axios';
import swal from 'sweetalert';
import "./style.scss";
import {useEffect } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

export default function Register(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [myValue, setValue] = useState('');
  const [userType, setUserType] = useState('member');
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('member');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickOpen = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    setUserType(value)
    if(value !== "Member") {
      setOpen(true);
    }
  }
  useEffect(() => {
    setSelectedValue("Member");
  }, []);

  const handleClose = () => {
    setSelectedValue("Member");
    setOpen(false);        
  };

  const handleRole = () => {
    axios.post('http://192.168.81.52:5000/auth/role/', { user:{type:userType, password:myValue}}).then((res) => {
      if(res.data.success === "true") {
        swal({
          text: res.data.message,
          icon: "success",
          type: "success"
        }).then(() => {
          setSelectedValue(userType);
          localStorage.setItem("userType", userType);
          setValue("");
        });
      }
      else {
        swal({
          text: res.data.message,
          icon: "error",
          type: "error"
        }).then(() => {
          setSelectedValue("Member");
          setValue("");
        });
      }
    })
    setOpen(false);
  }

  const handleClick = () => {
    if(username && password && password1) {
      if(password !== password1) {
        swal({
          text: "Your password is not match",
          icon: "error",
          type: "error"
        })
      }
      else {
        axios.post("http://192.168.81.52:5000/auth/signup/", { user: { username: username, password: password ,type: userType} }).then((res) => {
          swal({
            text: res.data.message,
            icon: "success",
            type: "success"
          })
        });
      }
    }
    else {
      swal({
        text: "Please Fill all field",
        icon: "error",
        type: "error"
      })
    }
  }

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'username':
        setUsername(value);
      break;
      case 'password':
        setPassword(value);
      break;
      case 'password1':
        setPassword1(value);
        default:
      break;
    }
  }
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  return (
    <div classNameName="base-container" ref={props.containerRef}>
      <div classNameName="header">Register</div>
      <div classNameName="content">
        <div classNameName="image">
          <img src={loginImg} />
        </div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Leader" control={<Radio />} label="Leader" onChange={handleClickOpen} checked={selectedValue === "Leader"}/>
            <FormControlLabel value="Viceleader" control={<Radio />} label="Vice-leader" onChange={handleClickOpen} checked={selectedValue === "Viceleader"}/>
            <FormControlLabel value="Member" control={<Radio />} label="Member" onChange={handleClickOpen} checked={selectedValue === "Member"}/>
          </RadioGroup>
        </FormControl>
        <div classNameName="form">
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Input password for role!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={myValue}
                  onChange={(e)=>setValue(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleRole}>OK</Button>
            </DialogActions>
          </Dialog>
          <div classNameName="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" onChange={onChange} value={username} name="username" placeholder="username" required/>
          </div>
          <div classNameName="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" onChange={onChange} value={password} name="password" placeholder="password" required/>
            <label htmlFor="password">Confirm the Password</label>
            <input type="password" onChange={onChange} value={password1} name="password1" placeholder="password" required/>
          </div>
        </div>
      </div>
      <div classNameName="footer">
        <button type="button" classNameName="btn" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  );
}
