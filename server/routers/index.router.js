require('dotenv').config()
// var express = require('express');
// var jwt = require('express-jwt');
// var path = require('path');
// var authRouter = require('./auth.router');
// var downloadController = require('../controllers/download.controller');
// var errorHandler = require('../helpers/http-error-handler');

var apiRouter = require('./api.router');

const route = (app) => {
  // app.use('/auth', authRouter);
  // app.use(jwt({ 
  //   secret: process.env.SECRET_KEY, 
  //   algorithms: ['HS256'],
  //   getToken: (req) => {
  //     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
  //       return req.headers.authorization.split(' ')[1];
  //     } else if (req.query && req.query.guid) {
  //       return req.query.guid;
  //     }
  //     return null;
  //   }
  // }));
  // app.use('/files/:path', downloadController.download);
 
  app.use('/api', apiRouter); // here error place

  // global error handler
  // app.use(errorHandler);
} 

module.exports = route;