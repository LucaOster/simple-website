require('dotenv').config()
var express = require('express');
var jwt = require('express-jwt');
var path = require('path');
var authRouter = require('./auth.router');

const route = (app) => {
    app.use('/auth', authRouter);
  }
  
  module.exports = route;