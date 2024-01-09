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
async function auth(requ,res) {
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