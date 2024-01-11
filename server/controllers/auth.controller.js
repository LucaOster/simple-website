const express = require("express");
require('dotenv').config()
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
var User = require('../models/user.model');
app.use(cors());

async function login(req, res) {
  const email = req.body.user.username;
  const password = req.body.user.password;
  User.findOne({ email: email }, (err, user) => {
      if (user) {
          if (password === user.password) {
              res.send({ message: "Login successfully", user: user, token: "Anaconda " + token});
          }
          else {
              res.send({ message: "Email or Password is Wrong!!!" });
          }
      }
      else {
          res.send({ message: "Email or Password is Wrong!!!" });
      }
  });
}

async function register(req, res) {
  const name = req.body.user.username;
  const email = req.body.user.email;
  const password = req.body.user.password;
  User.findOne({ email: email }, (err, user) => {
      if (user) {
          res.send({ message: "User is already registerd" });
      }
      else {
          const user = new User({
              name,
              email,
              password
          });
          console.log(user);
          user.save((err) => {
              if (err) {
                  res.send(err);
              } else {
                  res.send({ message: "Account has been created!! Please Login" });
              }
          });
      }
  });
}
async function role(req,res) {
  const password = req.body.user.password;
  const type = req.body.user.type;
  if(password === "111" && type === "Leader"){
      res.send({ message: "You are our " + type, success: "true"});
  }
  else if (password === "222" && type === "Viceleader"){
      res.send({ message: "You are our "+type, success:"true" });
  } else{
      res.send({ message: "You are not our "+type, success:"false" });
  }
}
module.exports = { register, login, role}