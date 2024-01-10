require('dotenv').config()
var express = require('express');
var jwt = require('express-jwt');
var path = require('path');
var authRouter = require('./auth.router');
var apiRouter = require('./api.router');

const route = (app) => {
    app.use('/auth', authRouter);
    app.use('/api', apiRouter); // here error place
  }
  
  module.exports = route;