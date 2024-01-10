<<<<<<< HEAD
require('dotenv').config()
var jwt = require('jsonwebtoken');
const config = require('../config');
var User = require('../models/user.model');
var rbapi = require('../utils/rbapi');
var userinfo = require('../utils/userinfo');

async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ user_name: username });
  if (user && password === user.password) {
    const auth_info = {
      user_id: user.user_id
    };
    const token = jwt.sign(auth_info, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: config.TOKEN_EXPIRE_TIME });
    res.status(200).json({
      user_id: user.user_id,
      token: token
    });
  }
  else {
    res.status(200).json({
      "message": "Username and password are invalid. Please enter correct username and password"
    });
  }
}

async function register(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ user_name: username });

  console.log("Received register request:", username, password);

  if (user) {
    res.status(200).json({
      success: false,
      message: "Username already exists"
    })
  }
  else {
    const count = await User.count();
    console.log("Count is", count);
    await User.create({
      user_id: count,
      user_name: username,
      password: password,
      team_id: 0,
    })

    console.log("Register success");

    res.status(200).json({
      success: true
    });
  }
}

async function loginThirdParty(req, res) {
  const { username, password } = req.body;
  try {
    const user = await rbapi.authUser(username, password);
    if (typeof user.user_id !== "number")
      throw "Authentication Error";
    if (userinfo.isUserAlive(user.user_id))
      throw "You are signed in on another device.";
    const auth_info = {
      user_id: user.user_id
    };
    const token = jwt.sign(auth_info, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: config.TOKEN_EXPIRE_TIME });
    res.status(200).json({
      user_id: user.user_id,
      token: token
    });
  }
  catch(error) {
    res.status(200).json({
      "message": error
    });
  }
}

module.exports = {login, register};
=======
const express = require("express");
require('dotenv').config()
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
var User = require('../models/user.model');
//app.use(express.urlencoded());
app.use(cors());
async function login(req, res) {
    const email = req.body.user.username;
    const password = req.body.user.password;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                const token = jwt.sign(
                    {
                        userEmail: user.email,
                    },
                    "KSR",
                    { expiresIn: "12h" }
                );
                res.send({ message: "Login successfully", user: user, token: "Anaconda " + token});

            }
            else {
                res.send({ message: "Email or Password is Wrong!!!" });
            }
        } else {
            res.send({ message: "Email or Password is Wrong!!!" });
        }
    });
  }

  async function register(req, res) {
    const name = req.body.user.username;
    const email = req.body.user.email;
    const password = req.body.user.password;
    //check email
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User is already registerd" });
        } else {
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
async function auth(req,res) {
    const token = req.body.token;
    const decodedToken = jwt.verify(
        token.split(" ")[1],
        "KSR"
    );
    User.findOne({ email: decodedToken.userEmail }, (err, user) => {
        if (user) {
            res.send({message: "success_auth"});
        } else {
            res.send({message: "invalid"});
        }
    });
}

module.exports = {auth, register, login}
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11
