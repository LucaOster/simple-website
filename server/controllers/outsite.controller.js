const express = require("express");
require('dotenv').config()
const cors = require("cors");
const app = express();
app.use(express.json());
var Site = require('../models/outsite.model');
app.use(cors());

async function getdata(req, res) {
  try {
      const data = await Site.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function setdata(req, res) {
  const title = req.body.user.title;
  const url = req.body.user.url;
  Site.findOne({ title: title }, (err, user) => {
      if(user) {
          res.send({ message: "It is already added"});
      } else {
          const user = new Site({
              title,
              url
          });
          console.log(user);
          user.save((err) => {
              if (err) {
                  res.send(err);
              } else {
                  res.send({ message: "It has been added"});
              }
          })
      }
  });
}
module.exports = { getdata, setdata}